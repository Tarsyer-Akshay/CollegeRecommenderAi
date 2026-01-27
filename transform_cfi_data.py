"""
Data Transformation Script for CFI (GFTI) Cutoff Data
Transforms raw CSV data into normalized relational schema:
- CFI table
- Branch table  
- Cutoff table
"""

import pandas as pd
import re
from pathlib import Path

CFI_DATA_DIR = "row_Data/CFI_row_data"
OUTPUT_DIR = "normalized_data"
YEAR = 2024

def normalize_name(name):
    if pd.isna(name): return None
    return name.strip()

def extract_branch(program):
    if pd.isna(program): return None, None, None
    program = program.strip()
    dt = "B.Tech" # Simplified
    
    match = re.match(r"^(.+?)\s*\([^)]+\)", program)
    bn = match.group(1).strip() if match else re.split(r'[,\(]', program)[0].strip()
    sn = bn[:3].upper()
    return bn, sn, dt

def derive_cat(seat, quota):
    seat = str(seat).upper()
    if "OPEN" in seat and "PWD" not in seat: return "GEN"
    if "OBC" in seat: return "OBC"
    if "SC" in seat: return "SC"
    if "ST" in seat: return "ST"
    if "EWS" in seat: return "EWS"
    return "GEN"

NIRF_RANK_MAPPING = {
    "Assam University, Silchar": 399,
    "Birla Institute of Technology, Deoghar Off-Campus": 399,
    "Birla Institute of Technology, Mesra, Ranchi": 51,
    "Birla Institute of Technology, Patna Off-Campus": 399,
    "CU Jharkhand": 399,
    "Central University of Haryana": 399,
    "Central University of Jammu": 399,
    "Central University of Rajasthan, Rajasthan": 399,
    "Central institute of Technology Kokrajar, Assam": 399,
    "Chhattisgarh Swami Vivekanada Technical University, Bhilai (CSVTU Bhilai)": 399, # User said: Chhattisgarh Swami Vivekanada Technical University, Bhilai
    "Gati Shakti Vishwavidyalaya, Vadodara": 399,
    "Ghani Khan Choudhary Institute of Engineering and Technology, Malda, West Bengal": 399,
    "Gurukula Kangri Vishwavidyalaya, Haridwar": 399,
    "Indian Institute of Carpet Technology, Bhadohi": 399,
    "Indian Institute of Handloom Technology(IIHT), Varanasi": 399,
    "Indian Institute of Handloom Technology, Salem": 399,
    "Institute of Chemical Technology, Mumbai: Indian Oil Odisha Campus, Bhubaneswar": 399,
    "Institute of Engineering and Technology, Dr. H. S. Gour University. Sagar (A Central University)": 399,
    "Institute of Infrastructure, Technology, Research and Management-Ahmedabad": 399,
    "International Institute of Information Technology, Bhubaneswar": 201,
    "International Institute of Information Technology, Naya Raipur": 202,
    "Islamic University of Science and Technology Kashmir": 151,
    "J.K. Institute of Applied Physics & Technology, Department of Electronics & Communication, University of Allahabad- Allahabad": 399,
    "Jawaharlal Nehru University, Delhi": 203,
    "Mizoram University, Aizawl": 399,
    "National Institute of Advanced Manufacturing Technology, Ranchi": 204,
    "National Institute of Electronics and Information Technology, Ajmer (Rajasthan)": 399,
    "National Institute of Electronics and Information Technology, Aurangabad (Maharashtra)": 399,
    "National Institute of Electronics and Information Technology, Gorakhpur (UP)": 399,
    "National Institute of Electronics and Information Technology, Patna (Bihar)": 399,
    "National Institute of Electronics and Information Technology, Ropar (Punjab)": 399,
    "National Institute of Food Technology Entrepreneurship and Management, Kundli": 101,
    "National Institute of Food Technology Entrepreneurship and Management, Thanjavur": 102,
    "North Eastern Regional Institute of Science and Technology, Nirjuli-791109 (Itanagar),Arunachal Pradesh": 152,
    "North-Eastern Hill University, Shillong": 399,
    "Puducherry Technological University, Puducherry": 399,
    "Punjab Engineering College, Chandigarh": 103,
    "Rajiv Gandhi National Aviation University, Fursatganj, Amethi (UP)": 399,
    "Sant Longowal Institute of Engineering and Technology": 79,
    "School of Engineering, Tezpur University, Napaam, Tezpur": 153,
    "School of Planning & Architecture, Bhopal": 11,
    "School of Planning & Architecture, New Delhi": 8,
    "School of Planning & Architecture: Vijayawada": 19,
    "School of Studies of Engineering and Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur": 154,
    "Shri G. S. Institute of Technology and Science Indore": 399,
    "Shri Mata Vaishno Devi University, Katra, Jammu & Kashmir": 155,
    "University of Hyderabad": 74
}

def main():
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    dfs = []
    
    for i in range(1, 6):
        p = Path(CFI_DATA_DIR) / f"josaa_round{i}_cfi_results.csv"
        if p.exists(): dfs.append(pd.read_csv(p))
        
    print(f"Loaded {len(dfs)} rounds CFI data")
    
    # CFI Table
    names = set()
    for df in dfs:
        names.update(df['Institute'].dropna().apply(normalize_name).unique())
    
    cfi_recs = []
    for n in sorted(names):
        rank = NIRF_RANK_MAPPING.get(n, 399) # Default to 399 if not mapped (or check closely)
        cfi_recs.append({'name': n, 'location': 'India', 'nirf_rank': rank})
        
    cfi_df = pd.DataFrame(cfi_recs)
    # Sort by Rank then Name
    cfi_df = cfi_df.sort_values(['nirf_rank', 'name'])
    cfi_df['cfi_id'] = range(1, len(cfi_df) + 1)
    
    cfi_map = dict(zip(cfi_df['name'], cfi_df['cfi_id']))
    
    # Branch Table
    progs = set()
    for df in dfs:
        progs.update(df['Academic Program'].dropna().unique())
        
    br_recs = []
    for p in sorted(progs):
        bn, sn, dt = extract_branch(p)
        if bn: br_recs.append({'branch_name': bn, 'short_name': sn, 'degree_type': dt})
        
    br_df = pd.DataFrame(br_recs).drop_duplicates('branch_name').reset_index(drop=True)
    br_df['branch_id'] = range(1, len(br_df)+1)
    br_map = {}
    for _, r in br_df.iterrows():
        br_map[r['branch_name']] = r['branch_id']
        for p in progs:
            if r['branch_name'] in p: br_map[p] = r['branch_id']
            
    # Cutoff Table
    cut_recs = []
    for idx, df in enumerate(dfs):
        for _, row in df.iterrows():
            nm = normalize_name(row['Institute'])
            if nm not in cfi_map: continue
            
            prog = row['Academic Program']
            bid = None
            for k in br_map:
                if k in str(prog): 
                    bid = br_map[k]
                    break
            if not bid: continue
            
            try:
                cr = str(row['Closing Rank'])
                if cr.upper().endswith('P') or cr == 'nan': continue
                val = int(float(cr))
            except: continue
            
            cut_recs.append({
                'cfi_id': cfi_map[nm],
                'branch_id': bid,
                'year': YEAR,
                'category': derive_cat(row.get('Seat Type'), row.get('Quota')),
                'closing_rank': val,
                'round': idx + 1,
                'quota': row.get('Quota', '')
            })
            
    cut_df = pd.DataFrame(cut_recs)
    cut_df['cutoff_id'] = range(1, len(cut_df)+1)
    
    cfi_df.to_csv(f"{OUTPUT_DIR}/cfi.csv", index=False)
    br_df.to_csv(f"{OUTPUT_DIR}/cfi_branch.csv", index=False)
    cut_df.to_csv(f"{OUTPUT_DIR}/cfi_cutoff.csv", index=False)
    
    # SQL
    with open(f"{OUTPUT_DIR}/insert_cfi.sql", 'w', encoding='utf-8') as f:
        f.write("INSERT INTO cfis (cfi_id, name, location) VALUES\n")
        vals = [f"({r['cfi_id']}, '{str(r['name']).replace('\'','\'\'')}', '{r['location']}')" for _, r in cfi_df.iterrows()]
        f.write(",\n".join(vals) + ";\n\n")
        
        f.write("INSERT INTO cfi_branches (branch_id, branch_name, short_name, degree_type) VALUES\n")
        vals = [f"({r['branch_id']}, '{str(r['branch_name']).replace('\'','\'\'')}', '{r['short_name']}', '{r['degree_type']}')" for _, r in br_df.iterrows()]
        f.write(",\n".join(vals) + ";\n\n")
        
        f.write("INSERT INTO cfi_cutoffs (cutoff_id, cfi_id, branch_id, closing_rank, round, quota) VALUES\n")
        vals = [f"({r['cutoff_id']}, {r['cfi_id']}, {r['branch_id']}, {r['closing_rank']}, {r['round']}, '{r['quota']}')" for _, r in cut_df.head(1000).iterrows()]
        f.write(",\n".join(vals) + ";\n")

    print("CFI Done")

if __name__ == "__main__":
    main()
