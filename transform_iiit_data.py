"""
Data Transformation Script for IIIT Cutoff Data
Transforms raw CSV data into normalized relational schema:
- IIIT table
- Branch table  
- Cutoff table
"""

import pandas as pd
import re
from pathlib import Path
from typing import Dict, List, Tuple

RANK_DATA_PATH = "row_Data/rank_data.csv"
IIIT_DATA_DIR = "row_Data/IIIT_row_data"
OUTPUT_DIR = "normalized_data"
YEAR = 2024

BRANCH_ABBREVIATIONS = {
    "Computer Science": "CSE",
    "Computer Science and Engineering": "CSE",
    "Electronics and Communication Engineering": "ECE",
    "Information Technology": "IT",
    # Add more as discovered
}

def normalize_institute_name(name: str) -> str:
    if pd.isna(name): return None
    return name.strip()

def extract_branch_info(academic_program: str):
    if pd.isna(academic_program): return None, None, None
    academic_program = academic_program.strip()
    
    degree_type = "B.Tech"
    if "B.Tech" in academic_program: degree_type = "B.Tech"
    elif "M.Tech" in academic_program and "Integrated" in academic_program: degree_type = "Integrated M.Tech"
    
    match = re.match(r"^(.+?)\s*\([^)]+\)", academic_program)
    branch_name = match.group(1).strip() if match else re.split(r'[,\(]', academic_program)[0].strip()
    branch_name = re.sub(r'\s+', ' ', branch_name)
    
    short_name = None
    for key, abbrev in BRANCH_ABBREVIATIONS.items():
        if key in branch_name:
            short_name = abbrev
            break
    if not short_name:
        short_name = branch_name[:3].upper()
        
    return branch_name, short_name, degree_type

def derive_category(seat_type, quota, gender):
    seat_type = str(seat_type).strip().upper()
    if "OPEN" in seat_type and "PWD" not in seat_type: return "GEN"
    elif "OBC" in seat_type: return "OBC"
    elif "SC" in seat_type: return "SC"
    elif "ST" in seat_type: return "ST"
    elif "EWS" in seat_type: return "EWS"
    return "GEN"

NIRF_RANK_MAPPING = {
    "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior": 96,
    "Indian Institute of Information Technology, Allahabad": 101,
    "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacture Jabalpur": 102,
    "Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram": 151,
    "Indian Institute of Information Technology Guwahati": 201,
    "Indian Institute of Information Technology (IIIT) Nagpur": 399,
    "Indian Institute of Information Technology (IIIT) Pune": 399,
    "Indian Institute of Information Technology (IIIT) Ranchi": 399,
    "Indian Institute of Information Technology (IIIT), Sri City, Chittoor": 399,
    "Indian Institute of Information Technology (IIIT)Kota, Rajasthan": 399,
    "Indian Institute of Information Technology Bhagalpur": 399,
    "Indian Institute of Information Technology Bhopal": 399,
    "Indian Institute of Information Technology Design & Manufacturing Kurnool, Andhra Pradesh": 399,
    "Indian Institute of Information Technology Lucknow": 399,
    "Indian Institute of Information Technology Surat": 399,
    "Indian Institute of Information Technology Tiruchirappalli": 399,
    "Indian Institute of Information Technology(IIIT) Dharwad": 399,
    "Indian Institute of Information Technology(IIIT) Kalyani, West Bengal": 399,
    "Indian Institute of Information Technology(IIIT) Kilohrad, Sonepat, Haryana": 399,
    "Indian Institute of Information Technology(IIIT) Kottayam": 399,
    "Indian Institute of Information Technology(IIIT) Una, Himachal Pradesh": 399,
    "Indian Institute of Information Technology(IIIT), Vadodara, Gujrat": 399,
    "Indian Institute of Information Technology, Agartala": 399,
    "Indian Institute of Information Technology, Vadodara International Campus Diu (IIITVICD)": 399
}

def create_iiit_table(cutoff_dfs):
    all_names = set()
    for df in cutoff_dfs:
        for inst in df['Institute'].dropna().unique():
            name = normalize_institute_name(inst)
            if "Indian Institute of Information Technology" in name or "IIIT" in name:
                all_names.add(name)
                
    records = []
    for name in sorted(list(all_names)):
        # Default to 399 or 0 if somehow missed
        rank = NIRF_RANK_MAPPING.get(name, 399) 
        records.append({'name': name, 'location': 'India', 'nirf_rank': rank})
        
    df = pd.DataFrame(records)
    # Sort by Rank then Name
    df = df.sort_values(['nirf_rank', 'name'])
    df['iiit_id'] = range(1, len(df) + 1)
    return df, dict(zip(df['name'], df['iiit_id']))

def create_branch_table(cutoff_dfs):
    all_programs = set()
    for df in cutoff_dfs:
        all_programs.update(df['Academic Program'].dropna().unique())
        
    data = []
    for prog in sorted(all_programs):
        bn, sn, dt = extract_branch_info(prog)
        if bn: data.append({'branch_name': bn, 'short_name': sn, 'degree_type': dt})
        
    df = pd.DataFrame(data).drop_duplicates(subset=['branch_name']).reset_index(drop=True)
    df['branch_id'] = range(1, len(df) + 1)
    
    mapping = {}
    for _, row in df.iterrows():
        mapping[row['branch_name']] = row['branch_id']
        for p in all_programs:
            if row['branch_name'] in p: mapping[p] = row['branch_id']
    return df, mapping

def create_cutoff_table(cutoff_dfs, iiit_map, branch_map):
    records = []
    round_numbers = [1, 2, 3, 4, 5]
    for idx, df in enumerate(cutoff_dfs):
        if idx >= len(round_numbers): break
        for _, row in df.iterrows():
            name = normalize_institute_name(row['Institute'])
            if name not in iiit_map: continue
            
            prog = row['Academic Program']
            bid = None
            for k in branch_map:
                if k in str(prog): 
                    bid = branch_map[k]
                    break
            if not bid: continue
            
            try:
                cr_str = str(row['Closing Rank']).strip()
                if cr_str.upper().endswith('P') or cr_str == 'nan': continue
                cr = int(float(cr_str))
            except: continue
            
            records.append({
                'iiit_id': iiit_map[name],
                'branch_id': bid,
                'year': YEAR,
                'category': derive_category(row.get('Seat Type'), row.get('Quota'), row.get('Gender')),
                'closing_rank': cr,
                'round': round_numbers[idx],
                'quota': row.get('Quota', '')
            })
            
    df = pd.DataFrame(records)
    df['cutoff_id'] = range(1, len(df) + 1)
    return df

def generate_sql(iiit, branch, cutoff):
    path = Path(OUTPUT_DIR) / "insert_iiit.sql"
    with open(path, 'w', encoding='utf-8') as f:
        f.write("INSERT INTO iiits (iiit_id, name, location, nirf_rank) VALUES\n")
        vals = [f"({r['iiit_id']}, '{str(r['name']).replace('\'','\'\'')}', '{r['location']}', {r['nirf_rank']})" for _, r in iiit.iterrows()]
        f.write(",\n".join(vals) + ";\n\n")
        
        f.write("INSERT INTO iiit_branches (branch_id, branch_name, short_name, degree_type) VALUES\n")
        vals = [f"({r['branch_id']}, '{str(r['branch_name']).replace('\'','\'\'')}', '{r['short_name']}', '{r['degree_type']}')" for _, r in branch.iterrows()]
        f.write(",\n".join(vals) + ";\n\n")
        
        f.write("INSERT INTO iiit_cutoffs (cutoff_id, iiit_id, branch_id, year, category, closing_rank, round, quota) VALUES\n")
        vals = [f"({r['cutoff_id']}, {r['iiit_id']}, {r['branch_id']}, {r['year']}, '{r['category']}', {r['closing_rank']}, {r['round']}, '{r['quota']}')" for _, r in cutoff.head(1000).iterrows()]
        f.write(",\n".join(vals) + ";\n")

def main():
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    cutoff_dfs = []
    
    r1 = Path(IIIT_DATA_DIR) / "Indian_Institute_of_Information_Technology.csv"
    if r1.exists(): cutoff_dfs.append(pd.read_csv(r1))
    
    for i in range(2, 6):
        p = Path(IIIT_DATA_DIR) / f"josaa_round{i}_iiit_results.csv"
        if p.exists(): cutoff_dfs.append(pd.read_csv(p))
        
    print(f"Loaded {len(cutoff_dfs)} rounds IIIT data")
    
    iiit_t, iiit_m = create_iiit_table(cutoff_dfs)
    br_t, br_m = create_branch_table(cutoff_dfs)
    cut_t = create_cutoff_table(cutoff_dfs, iiit_m, br_m)
    
    iiit_t.to_csv(f"{OUTPUT_DIR}/iiit.csv", index=False)
    br_t.to_csv(f"{OUTPUT_DIR}/iiit_branch.csv", index=False)
    cut_t.to_csv(f"{OUTPUT_DIR}/iiit_cutoff.csv", index=False)
    
    generate_sql(iiit_t, br_t, cut_t)
    print("IIIT Done")

if __name__ == "__main__":
    main()
