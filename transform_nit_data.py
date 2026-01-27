"""
Data Transformation Script for NIT Cutoff Data
Transforms raw CSV data into normalized relational schema:
- NIT table
- Branch table  
- Cutoff table
"""

import pandas as pd
import re
from pathlib import Path
from typing import Dict, List, Tuple, Optional

# Constants
RANK_DATA_PATH = "row_Data/rank_data.csv"
NIT_DATA_DIR = "row_Data/NIT_row_data"
OUTPUT_DIR = "normalized_data"
YEAR = 2024

# Branch name to abbreviation mapping (reused and expanded if needed)
BRANCH_ABBREVIATIONS = {
    "Civil Engineering": "CE",
    "Computer Science and Engineering": "CSE",
    "Electrical Engineering": "EE",
    "Electronics and Communication Engineering": "ECE",
    "Mechanical Engineering": "ME",
    "Chemical Engineering": "CHE",
    "Aerospace Engineering": "AE",
    "Biotechnology": "BT",
    "Engineering Physics": "EP",
    "Materials Science and Engineering": "MSE",
    "Metallurgical and Materials Engineering": "MME",
    "Industrial and Systems Engineering": "ISE",
    "Agricultural and Food Engineering": "AFE",
    "Ocean Engineering and Naval Architecture": "OENA",
    "Mathematics and Computing": "MNC",
    "Data Science and Artificial Intelligence": "DSAI",
    "Artificial Intelligence and Data Science": "AIDS",
    "Artificial Intelligence": "AI",
    "Data Science": "DS",
    "Energy Engineering": "ENE",
    "Environmental Engineering": "ENV",
    "Mining Engineering": "MIN",
    "Petroleum Engineering": "PE",
    "Geological Engineering": "GE",
    "Applied Geology": "AG",
    "Applied Geophysics": "AGP",
    "Architecture": "ARCH",
    "Design": "DES",
    "Textile Technology": "TT",
    "Manufacturing Science and Engineering": "MSE",
    "Production Engineering": "PE",
    "Information Technology": "IT",
}

def normalize_institute_name(name: str) -> str:
    """Normalize institute name to a consistent format."""
    if pd.isna(name):
        return None
    name = name.strip()
    # Basic normalization for NIT names if needed
    # Most NIT names in data seem to be "National Institute of Technology, [Location]"
    # or "Dr. B R Ambedkar National Institute of Technology, Jalandhar"
    return name

def extract_branch_info(academic_program: str) -> Tuple[str, str, str]:
    """
    Extract branch name, short name, and degree type from academic program.
    Returns: (branch_name, short_name, degree_type)
    """
    if pd.isna(academic_program):
        return None, None, None
    
    academic_program = academic_program.strip()
    
    # Extract degree type
    degree_type = "B.Tech" # Default
    if "Bachelor of Technology" in academic_program or "B.Tech" in academic_program:
        degree_type = "B.Tech"
    elif "Bachelor of Architecture" in academic_program or "B.Arch" in academic_program:
        degree_type = "B.Arch"
    elif "Bachelor of Science" in academic_program or "BS" in academic_program:
        degree_type = "BS"
    elif "Dual" in academic_program or "Integrated" in academic_program:
        degree_type = "Dual/Integrated"
    elif "Master" in academic_program:
        degree_type = "M.Tech" # Should not be in UG cutoff data normally but just in case
        
    
    # Extract branch name
    match = re.match(r"^(.+?)\s*\([^)]+\)", academic_program)
    if match:
        branch_name = match.group(1).strip()
    else:
        branch_name = re.split(r'[,\(]', academic_program)[0].strip()
    
    branch_name = re.sub(r'\s+', ' ', branch_name)
    
    # Generate short name
    short_name = None
    for key, abbrev in BRANCH_ABBREVIATIONS.items():
        if key in branch_name:
            short_name = abbrev
            break
            
    if not short_name:
        words = branch_name.split()
        if len(words) >= 2:
            short_name = ''.join([w[0].upper() for w in words[:3]])
        else:
            short_name = branch_name[:3].upper()
            
    return branch_name, short_name, degree_type

def derive_category(seat_type: str, quota: str, gender: str) -> str:
    """Derive category from Seat Type, Quota, and Gender."""
    if pd.isna(seat_type):
        return "GEN"
    seat_type = str(seat_type).strip().upper()
    
    # Map seat types
    if "OPEN" in seat_type and "PWD" not in seat_type:
        return "GEN"
    elif "OBC" in seat_type:
        return "OBC"
    elif "SC" in seat_type:
        return "SC"
    elif "ST" in seat_type:
        return "ST"
    elif "EWS" in seat_type:
        return "EWS"
    else:
        return "GEN"


NIRF_RANK_MAPPING = {
    "National Institute of Technology, Tiruchirappalli": 9,
    "National Institute of Technology, Rourkela": 13,
    "National Institute of Technology Karnataka, Surathkal": 17,
    "National Institute of Technology Calicut": 21,
    "National Institute of Technology, Warangal": 28,
    "Malaviya National Institute of Technology Jaipur": 42,
    "Visvesvaraya National Institute of Technology, Nagpur": 44,
    "National Institute of Technology Durgapur": 49,
    "National Institute of Technology, Silchar": 50,
    "National Institute of Technology Patna": 53,
    "Dr. B R Ambedkar National Institute of Technology, Jalandhar": 55,
    "Motilal Nehru National Institute of Technology Allahabad": 62,
    "National Institute of Technology Delhi": 65,
    "Sardar Vallabhbhai National Institute of Technology, Surat": 66,
    "National Institute of Technology, Srinagar": 73,
    "Maulana Azad National Institute of Technology Bhopal": 81,
    "National Institute of Technology, Jamshedpur": 82,
    "National Institute of Technology Meghalaya": 83,
    "National Institute of Technology, Kurukshetra": 85,
    "National Institute of Technology Raipur": 86,
    "National Institute of Technology Hamirpur": 97,
    "National Institute of Technology Puducherry": 99,
    "National Institute of Technology Agartala": 101,
    "National Institute of Technology Arunachal Pradesh": 102,
    "National Institute of Technology Goa": 103,
    "National Institute of Technology, Mizoram": 104,
    "National Institute of Technology Nagaland": 105,
    "National Institute of Technology, Manipur": 151,
    "National Institute of Technology Sikkim": 152,
    "National Institute of Technology, Uttarakhand": 153,
    "National Institute of Technology, Andhra Pradesh": 201
}

def create_nit_table(rank_df: pd.DataFrame, cutoff_dfs: List[pd.DataFrame]) -> Tuple[pd.DataFrame, Dict[str, int]]:
    """Create NIT master table."""
    # Collect all NIT names from cutoff data
    all_cutoff_institutes = set()
    for df in cutoff_dfs:
        institutes = df['Institute'].dropna().unique()
        for inst in institutes:
            name = normalize_institute_name(inst)
            # Filter for NITs
            if "National Institute of Technology" in name or "NIT" in name:
                all_cutoff_institutes.add(name)
    
    nit_records = []
    seen_names = set()
    
    for inst_name in sorted(list(all_cutoff_institutes)):
        if inst_name not in seen_names:
            location = "India"
            parts = inst_name.replace(",", "").split()
            if parts:
                location = parts[-1]
            
            # Lookup rank from mapping, default to 0 (or >201 check user request)
            # User list had specific ranks. Mapping keys must match `inst_name` exactly.
            # csv showed: "National Institute of Technology, Tiruchirappalli" which matches user input.
            
            rank = NIRF_RANK_MAPPING.get(inst_name, 0)
            
            nit_records.append({
                'name': inst_name,
                'location': location,
                'nirf_rank': rank
            })
            seen_names.add(inst_name)
            
    nit_table = pd.DataFrame(nit_records)
    nit_table = nit_table.sort_values('nirf_rank') # Sort by rank for Nicer CSV
    nit_table['nit_id'] = range(1, len(nit_table) + 1)
    
    nit_mapping = dict(zip(nit_table['name'], nit_table['nit_id']))
    return nit_table, nit_mapping

def create_branch_table(cutoff_dfs: List[pd.DataFrame]) -> Tuple[pd.DataFrame, Dict[str, int]]:
    """Create Branch master table (specific to NITs found)."""
    all_programs = set()
    for df in cutoff_dfs:
        programs = df['Academic Program'].dropna().unique()
        all_programs.update(programs)
        
    branches_data = []
    for program in sorted(all_programs):
        branch_name, short_name, degree_type = extract_branch_info(program)
        if branch_name:
            branches_data.append({
                'branch_name': branch_name,
                'short_name': short_name,
                'degree_type': degree_type
            })
            
    branches_df = pd.DataFrame(branches_data)
    branches_df = branches_df.drop_duplicates(subset=['branch_name'], keep='first').reset_index(drop=True)
    branches_df['branch_id'] = range(1, len(branches_df) + 1)
    
    branch_mapping = {}
    for _, row in branches_df.iterrows():
        branch_mapping[row['branch_name']] = row['branch_id']
        for program in all_programs:
            if row['branch_name'] in program:
                branch_mapping[program] = row['branch_id']
                
    return branches_df, branch_mapping

def create_cutoff_table(cutoff_dfs: List[pd.DataFrame], nit_mapping: Dict[str, int], branch_mapping: Dict[str, int]) -> pd.DataFrame:
    """Create Cutoff fact table."""
    cutoff_records = []
    round_numbers = [1, 2, 3, 4, 5] # Assuming similar rounds
    
    for idx, df in enumerate(cutoff_dfs):
        # Handle index out of range if fewer files than rounds
        if idx >= len(round_numbers):
            break
        round_num = round_numbers[idx]
        
        for _, row in df.iterrows():
            name = normalize_institute_name(row['Institute'])
            if name not in nit_mapping:
                continue
            nit_id = nit_mapping[name]
            
            program = row['Academic Program']
            branch_id = None
            for key in branch_mapping:
                if key in str(program):
                    branch_id = branch_mapping[key]
                    break
            if not branch_id:
                continue
                
            category = derive_category(row.get('Seat Type'), row.get('Quota'), row.get('Gender'))
            
            closing_rank_str = str(row['Closing Rank']).strip()
            if closing_rank_str.upper().endswith('P') or closing_rank_str == 'nan':
                 continue
            try:
                closing_rank = int(float(closing_rank_str))
            except:
                continue
                
            cutoff_records.append({
                'nit_id': nit_id,
                'branch_id': branch_id,
                'year': YEAR,
                'category': category,
                'closing_rank': closing_rank,
                'round': round_num,
                'quota': row.get('Quota', '') # Capture quota state data (HS/OS) often relevant for NITs
            })
            
    cutoff_df = pd.DataFrame(cutoff_records)
    cutoff_df['cutoff_id'] = range(1, len(cutoff_df) + 1)
    return cutoff_df

def generate_sql_inserts(nit_table, branch_table, cutoff_table):
    """Generate SQL INSERT statements."""
    sql_file = Path(OUTPUT_DIR) / "insert_nit.sql"
    with open(sql_file, 'w', encoding='utf-8') as f:
        f.write("-- SQL INSERT Statements for normalized NIT Data\n\n")
        
        f.write("-- NIT Table\n")
        f.write("INSERT INTO nits (nit_id, name, location, nirf_rank) VALUES\n")
        values = []
        for _, row in nit_table.iterrows():
            name = str(row['name']).replace("'", "''")
            loc = str(row['location']).replace("'", "''")
            values.append(f"({row['nit_id']}, '{name}', '{loc}', {row['nirf_rank']})")
        f.write(",\n".join(values) + ";\n\n")
        
        f.write("-- NIT Branch Table\n")
        f.write("INSERT INTO nit_branches (branch_id, branch_name, short_name, degree_type) VALUES\n")
        values = []
        for _, row in branch_table.iterrows():
             values.append(f"({row['branch_id']}, '{str(row['branch_name']).replace('\'','\'\'')}', '{row['short_name']}', '{row['degree_type']}')")
        f.write(",\n".join(values) + ";\n\n")
        
        f.write("-- NIT Cutoff Table\n")
        f.write("INSERT INTO nit_cutoffs (cutoff_id, nit_id, branch_id, year, category, closing_rank, round, quota) VALUES\n")
        cutoff_sample = cutoff_table.head(1000)
        values = []
        for _, row in cutoff_sample.iterrows():
            quota = str(row['quota']) if pd.notna(row['quota']) else ''
            values.append(f"({row['cutoff_id']}, {row['nit_id']}, {row['branch_id']}, {row['year']}, '{row['category']}', {row['closing_rank']}, {row['round']}, '{quota}')")
        f.write(",\n".join(values) + ";\n\n")

def main():
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    
    # Load rank data (optional usage)
    rank_df = pd.read_csv(RANK_DATA_PATH)
    
    # Load NIT data
    cutoff_dfs = []
    # R1 File
    r1_path = Path(NIT_DATA_DIR) / "National_Institute_of_Technology.csv"
    if r1_path.exists():
        cutoff_dfs.append(pd.read_csv(r1_path))
    
    # R2-R5 Files
    for i in range(2, 6):
        path = Path(NIT_DATA_DIR) / f"josaa_round{i}_nit_results.csv"
        if path.exists():
            cutoff_dfs.append(pd.read_csv(path))
            
    print(f"Loaded {len(cutoff_dfs)} rounds of NIT data.")
    
    nit_table, nit_map = create_nit_table(rank_df, cutoff_dfs)
    branch_table, branch_map = create_branch_table(cutoff_dfs)
    cutoff_table = create_cutoff_table(cutoff_dfs, nit_map, branch_map)
    
    nit_table.to_csv(f"{OUTPUT_DIR}/nit.csv", index=False)
    branch_table.to_csv(f"{OUTPUT_DIR}/nit_branch.csv", index=False)
    cutoff_table.to_csv(f"{OUTPUT_DIR}/nit_cutoff.csv", index=False)
    
    generate_sql_inserts(nit_table, branch_table, cutoff_table)
    print("NIT Transformation Complete.")

if __name__ == "__main__":
    main()
