"""
Data Transformation Script for JEE Advanced Cutoff Data
Transforms raw CSV data into normalized relational schema:
- IIT table
- Branch table  
- Cutoff table
"""

import pandas as pd
import re
from pathlib import Path
from typing import Dict, List, Tuple, Optional

# Constants
RANK_DATA_PATH = "row_Data/rank_data.csv"
IIT_DATA_DIR = "row_Data/IIT_row_data"
OUTPUT_DIR = "normalized_data"
YEAR = 2024  # Assuming current year - adjust if needed

# Institute name mapping (short -> full normalized)
INSTITUTE_NAME_MAPPING = {
    "IIT Madras": "Indian Institute of Technology Madras",
    "IIT Delhi": "Indian Institute of Technology Delhi",
    "IIT Bombay": "Indian Institute of Technology Bombay",
    "IIT Kanpur": "Indian Institute of Technology Kanpur",
    "IIT Kharagpur": "Indian Institute of Technology Kharagpur",
    "IIT Roorkee": "Indian Institute of Technology Roorkee",
    "IIT Guwahati": "Indian Institute of Technology Guwahati",
    "IIT Hyderabad": "Indian Institute of Technology Hyderabad",
    "IIT (BHU) Varanasi": "Indian Institute of Technology (BHU) Varanasi",
    "IIT Dhanbad (ISM)": "Indian Institute of Technology Dhanbad",
    "IIT Indore": "Indian Institute of Technology Indore",
    "IIT Gandhinagar": "Indian Institute of Technology Gandhinagar",
    "IIT Ropar": "Indian Institute of Technology Ropar",
    "IIT Jodhpur": "Indian Institute of Technology Jodhpur",
    "IIT Mandi": "Indian Institute of Technology Mandi",
    "IIT Patna": "Indian Institute of Technology Patna",
    "IIT Bhubaneswar": "Indian Institute of Technology Bhubaneswar",
    "IIT Tirupati": "Indian Institute of Technology Tirupati",
    "IIT Jammu": "Indian Institute of Technology Jammu",
    "IIT Palakkad": "Indian Institute of Technology Palakkad",
    "IIT Bhilai": "Indian Institute of Technology Bhilai",
    "IIT Dharwad": "Indian Institute of Technology Dharwad",
    "IIT Goa": "Indian Institute of Technology Goa",
}

# Branch name to abbreviation mapping
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
}

def normalize_institute_name(name: str) -> str:
    """Normalize institute name to a consistent format."""
    if pd.isna(name):
        return None
    
    name = name.strip()
    
    # Check direct mapping first
    if name in INSTITUTE_NAME_MAPPING:
        return INSTITUTE_NAME_MAPPING[name]
    
    # Handle "Indian Institute of Technology" variations
    if "Indian Institute of Technology" in name:
        # Normalize Dhanbad/ISM variations to consistent name
        if "Dhanbad" in name or "(ISM)" in name:
            return "Indian Institute of Technology Dhanbad"
        # Handle "(BHU)" special case
        if "(BHU)" in name or "BHU" in name:
            return "Indian Institute of Technology (BHU) Varanasi"
        # Extract location from full name (e.g., "Indian Institute of Technology Bhubaneswar")
        if name.startswith("Indian Institute of Technology"):
            return name  # Already normalized
    
    # Handle "IIT" prefix variations
    match = re.match(r"IIT\s+(.+?)(?:\s*\(|$)", name, re.IGNORECASE)
    if match:
        location = match.group(1).strip()
        # Handle special cases
        if "BHU" in location or "Varanasi" in location:
            return "Indian Institute of Technology (BHU) Varanasi"
        if "Dhanbad" in location or "ISM" in location:
            return "Indian Institute of Technology Dhanbad"
        # Standard format
        return f"Indian Institute of Technology {location}"
    
    return name

def extract_branch_info(academic_program: str) -> Tuple[str, str, str]:
    """
    Extract branch name, short name, and degree type from academic program.
    Returns: (branch_name, short_name, degree_type)
    """
    if pd.isna(academic_program):
        return None, None, None
    
    academic_program = academic_program.strip()
    
    # Extract degree type (B.Tech, BS, Dual, etc.)
    degree_type = None
    if "Bachelor of Technology" in academic_program or "B.Tech" in academic_program:
        degree_type = "B.Tech"
    elif "Bachelor of Science" in academic_program or "BS" in academic_program:
        degree_type = "BS"
    elif "Dual" in academic_program:
        degree_type = "Dual"
    elif "Bachelor" in academic_program:
        degree_type = "B.Tech"  # Default
    else:
        degree_type = "B.Tech"  # Default assumption
    
    # Extract branch name (before the parenthesis or comma)
    # Pattern: "Branch Name (Years, Degree Type)"
    match = re.match(r"^(.+?)\s*\([^)]+\)", academic_program)
    if match:
        branch_name = match.group(1).strip()
    else:
        # Fallback: take everything before comma or parenthesis
        branch_name = re.split(r'[,\(]', academic_program)[0].strip()
    
    # Normalize branch name
    branch_name = re.sub(r'\s+', ' ', branch_name)  # Remove extra spaces
    
    # Generate short name
    short_name = None
    for key, abbrev in BRANCH_ABBREVIATIONS.items():
        if key in branch_name:
            short_name = abbrev
            break
    
    # If no abbreviation found, create one from first letters
    if not short_name:
        words = branch_name.split()
        if len(words) >= 2:
            short_name = ''.join([w[0].upper() for w in words[:3]])
        else:
            short_name = branch_name[:3].upper()
    
    return branch_name, short_name, degree_type

def derive_category(seat_type: str, quota: str, gender: str) -> str:
    """
    Derive category from Seat Type, Quota, and Gender.
    Returns standardized category: GEN, OBC, SC, ST, EWS
    """
    if pd.isna(seat_type):
        return "GEN"
    
    seat_type = str(seat_type).strip().upper()
    quota = str(quota).strip().upper() if not pd.isna(quota) else ""
    
    # Map seat types to categories
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
    elif quota == "OBC-NCL":
        return "OBC"
    elif quota == "EWS":
        return "EWS"
    else:
        return "GEN"  # Default

def create_iit_table(rank_df: pd.DataFrame, cutoff_dfs: List[pd.DataFrame]) -> Tuple[pd.DataFrame, Dict[str, int]]:
    """Create IIT master table from rank data and cutoff data."""
    # Filter only IITs from rank data
    iit_pattern = r'^IIT\s+'
    iit_mask = rank_df['Institute'].str.match(iit_pattern, case=False, na=False)
    iit_rank_df = rank_df[iit_mask].copy()
    
    # Normalize institute names
    iit_rank_df['normalized_name'] = iit_rank_df['Institute'].apply(normalize_institute_name)
    
    # Create IIT table from rank data
    iit_records = []
    seen_names = set()
    
    for _, row in iit_rank_df.iterrows():
        normalized_name = row['normalized_name']
        if normalized_name not in seen_names:
            iit_records.append({
                'name': normalized_name,
                'location': f"{row['City']}, {row['State']}",
                'nirf_rank': row['Rank']
            })
            seen_names.add(normalized_name)
    
    # Find IITs in cutoff data that aren't in ranking data
    # Location mapping for IITs not in ranking
    iit_location_map = {
        "Indian Institute of Technology Goa": "Ponda, Goa",
        # Add more mappings as needed
    }
    
    # Collect all IIT institute names from cutoff data
    all_cutoff_institutes = set()
    for df in cutoff_dfs:
        institutes = df['Institute'].dropna().unique()
        for inst in institutes:
            normalized = normalize_institute_name(inst)
            if normalized and normalized.startswith("Indian Institute of Technology"):
                all_cutoff_institutes.add(normalized)
    
    # Add missing IITs from cutoff data
    for inst_name in all_cutoff_institutes:
        if inst_name not in seen_names:
            # Determine location
            if inst_name in iit_location_map:
                location = iit_location_map[inst_name]
            else:
                # Extract location from name if possible
                # Default fallback
                location = "India"
            
            iit_records.append({
                'name': inst_name,
                'location': location,
                'nirf_rank': 201  # Default rank for missing IITs
            })
            seen_names.add(inst_name)
    
    # Create DataFrame and assign IDs
    iit_table = pd.DataFrame(iit_records)
    iit_table = iit_table.sort_values('name')  # Sort for consistent ordering
    iit_table['iit_id'] = range(1, len(iit_table) + 1)
    iit_table = iit_table[['iit_id', 'name', 'location', 'nirf_rank']]
    
    # Create mapping for later use
    iit_mapping = dict(zip(iit_table['name'], iit_table['iit_id']))
    
    return iit_table, iit_mapping

def create_branch_table(cutoff_dfs: List[pd.DataFrame]) -> Tuple[pd.DataFrame, Dict[str, int]]:
    """Create Branch master table from all cutoff data."""
    all_programs = set()
    
    # Collect all unique academic programs
    for df in cutoff_dfs:
        programs = df['Academic Program'].dropna().unique()
        all_programs.update(programs)
    
    # Extract branch information
    branches_data = []
    for program in sorted(all_programs):
        branch_name, short_name, degree_type = extract_branch_info(program)
        if branch_name:
            branches_data.append({
                'branch_name': branch_name,
                'short_name': short_name,
                'degree_type': degree_type
            })
    
    # Remove duplicates based on branch_name
    branches_df = pd.DataFrame(branches_data)
    branches_df = branches_df.drop_duplicates(subset=['branch_name'], keep='first')
    branches_df = branches_df.reset_index(drop=True)
    branches_df['branch_id'] = range(1, len(branches_df) + 1)
    
    # Create mapping
    branch_mapping = {}
    for _, row in branches_df.iterrows():
        # Map all variations of the program name to this branch_id
        branch_name = row['branch_name']
        branch_id = row['branch_id']
        branch_mapping[branch_name] = branch_id
        
        # Also map programs that contain this branch name
        for program in all_programs:
            if branch_name in program:
                branch_mapping[program] = branch_id
    
    return branches_df[['branch_id', 'branch_name', 'short_name', 'degree_type']], branch_mapping

def create_cutoff_table(cutoff_dfs: List[pd.DataFrame], iit_mapping: Dict[str, int], 
                       branch_mapping: Dict[str, int]) -> pd.DataFrame:
    """Create Cutoff fact table from all cutoff data."""
    cutoff_records = []
    
    round_numbers = [1, 2, 3, 4, 5]
    
    for idx, df in enumerate(cutoff_dfs):
        round_num = round_numbers[idx]
        
        for _, row in df.iterrows():
            # Normalize institute name
            institute_name = normalize_institute_name(row['Institute'])
            
            # Skip if not an IIT
            if not institute_name or institute_name not in iit_mapping:
                continue
            
            iit_id = iit_mapping[institute_name]
            
            # Map branch
            program = row['Academic Program']
            if pd.isna(program):
                continue
            
            # Find matching branch
            branch_id = None
            for key in branch_mapping:
                if key in str(program):
                    branch_id = branch_mapping[key]
                    break
            
            if not branch_id:
                continue
            
            # Derive category
            category = derive_category(row.get('Seat Type'), row.get('Quota'), row.get('Gender'))
            
            # Get closing rank (handle special values like "50P")
            closing_rank_str = str(row['Closing Rank']).strip()
            if closing_rank_str.upper().endswith('P') or closing_rank_str == 'nan':
                continue  # Skip PwD special cases for now
            try:
                closing_rank = int(float(closing_rank_str))
            except (ValueError, TypeError):
                continue
            
            cutoff_records.append({
                'iit_id': iit_id,
                'branch_id': branch_id,
                'year': YEAR,
                'category': category,
                'closing_rank': closing_rank,
                'round': round_num
            })
    
    cutoff_df = pd.DataFrame(cutoff_records)
    cutoff_df['cutoff_id'] = range(1, len(cutoff_df) + 1)
    
    return cutoff_df[['cutoff_id', 'iit_id', 'branch_id', 'year', 'category', 'closing_rank', 'round']]

def main():
    """Main transformation pipeline."""
    print("Starting data transformation...")
    
    # Create output directory
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    
    # Load rank data
    print("Loading rank data...")
    rank_df = pd.read_csv(RANK_DATA_PATH)
    
    # Load IIT cutoff data (all rounds)
    print("Loading IIT cutoff data...")
    cutoff_dfs = []
    for round_num in range(1, 6):
        file_path = Path(IIT_DATA_DIR) / f"josaa_round{round_num}_iit_results.csv"
        if file_path.exists():
            df = pd.read_csv(file_path)
            cutoff_dfs.append(df)
            print(f"  Loaded round {round_num}: {len(df)} records")
    
    # Step 1: Create IIT table
    print("\nStep 1: Creating IIT master table...")
    iit_table, iit_mapping = create_iit_table(rank_df, cutoff_dfs)
    print(f"  Created {len(iit_table)} IIT records")
    print("\nSample IIT records:")
    print(iit_table.head(10).to_string(index=False))
    
    # Step 2: Create Branch table
    print("\nStep 2: Creating Branch master table...")
    branch_table, branch_mapping = create_branch_table(cutoff_dfs)
    print(f"  Created {len(branch_table)} branch records")
    print("\nSample Branch records:")
    print(branch_table.head(15).to_string(index=False))
    
    # Step 3: Create Cutoff table
    print("\nStep 3: Creating Cutoff fact table...")
    cutoff_table = create_cutoff_table(cutoff_dfs, iit_mapping, branch_mapping)
    print(f"  Created {len(cutoff_table)} cutoff records")
    print("\nSample Cutoff records:")
    print(cutoff_table.head(20).to_string(index=False))
    
    # Save to CSV
    print("\nSaving normalized data to CSV files...")
    iit_table.to_csv(f"{OUTPUT_DIR}/iit.csv", index=False)
    branch_table.to_csv(f"{OUTPUT_DIR}/branch.csv", index=False)
    cutoff_table.to_csv(f"{OUTPUT_DIR}/cutoff.csv", index=False)
    print(f"  Saved: {OUTPUT_DIR}/iit.csv")
    print(f"  Saved: {OUTPUT_DIR}/branch.csv")
    print(f"  Saved: {OUTPUT_DIR}/cutoff.csv")
    
    # Generate SQL INSERT statements
    print("\nGenerating SQL INSERT statements...")
    generate_sql_inserts(iit_table, branch_table, cutoff_table)
    
    # Print statistics
    print("\n" + "="*60)
    print("TRANSFORMATION SUMMARY")
    print("="*60)
    print(f"IIT records: {len(iit_table)}")
    print(f"Branch records: {len(branch_table)}")
    print(f"Cutoff records: {len(cutoff_table)}")
    print(f"Unique IITs: {cutoff_table['iit_id'].nunique()}")
    print(f"Unique Branches: {cutoff_table['branch_id'].nunique()}")
    print(f"Rounds covered: {sorted(cutoff_table['round'].unique())}")
    print("="*60)

def generate_sql_inserts(iit_table: pd.DataFrame, branch_table: pd.DataFrame, 
                        cutoff_table: pd.DataFrame):
    """Generate SQL INSERT statements."""
    sql_file = Path(OUTPUT_DIR) / "insert_statements.sql"
    
    with open(sql_file, 'w', encoding='utf-8') as f:
        f.write("-- SQL INSERT Statements for Normalized IIT Data\n")
        f.write("-- Generated automatically\n\n")
        
        # IIT table
        f.write("-- IIT Table\n")
        f.write("INSERT INTO IIT (iit_id, name, location, nirf_rank) VALUES\n")
        iit_values = []
        for _, row in iit_table.iterrows():
            name = str(row['name']).replace("'", "''")
            location = str(row['location']).replace("'", "''")
            nirf_rank = row['nirf_rank'] if pd.notna(row['nirf_rank']) else 'NULL'
            iit_values.append(f"({row['iit_id']}, '{name}', '{location}', {nirf_rank})")
        f.write(",\n".join(iit_values) + ";\n\n")
        
        # Branch table
        f.write("-- Branch Table\n")
        f.write("INSERT INTO Branch (branch_id, branch_name, short_name, degree_type) VALUES\n")
        branch_values = []
        for _, row in branch_table.iterrows():
            branch_name = str(row['branch_name']).replace("'", "''")
            short_name = str(row['short_name']).replace("'", "''")
            degree_type = str(row['degree_type']).replace("'", "''")
            branch_values.append(f"({row['branch_id']}, '{branch_name}', '{short_name}', '{degree_type}')")
        f.write(",\n".join(branch_values) + ";\n\n")
        
        # Cutoff table (sample - limit to first 1000 for readability)
        f.write("-- Cutoff Table (first 1000 records)\n")
        f.write("INSERT INTO Cutoff (cutoff_id, iit_id, branch_id, year, category, closing_rank, round) VALUES\n")
        cutoff_sample = cutoff_table.head(1000)
        cutoff_values = []
        for _, row in cutoff_sample.iterrows():
            cutoff_values.append(
                f"({row['cutoff_id']}, {row['iit_id']}, {row['branch_id']}, "
                f"{row['year']}, '{row['category']}', {row['closing_rank']}, {row['round']})"
            )
        f.write(",\n".join(cutoff_values) + ";\n\n")
        
        f.write(f"-- Note: Total cutoff records: {len(cutoff_table)}\n")
        f.write("-- Remaining records can be inserted using the same pattern.\n")
    
    print(f"  Saved: {sql_file}")

if __name__ == "__main__":
    main()
