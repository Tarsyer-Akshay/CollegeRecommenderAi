"""Verify IIT Goa data is correctly included in all normalized files"""

import pandas as pd

print("="*60)
print("IIT GOA DATA VERIFICATION")
print("="*60)

# Load files
iit = pd.read_csv('normalized_data/iit.csv')
cutoff = pd.read_csv('normalized_data/cutoff.csv')
branch = pd.read_csv('normalized_data/branch.csv')

# Find IIT Goa
goa_iit = iit[iit['name'].str.contains('Goa', case=False, na=False)]
if len(goa_iit) == 0:
    print("\n❌ ERROR: IIT Goa not found in iit.csv")
    exit(1)

print(f"\n✅ IIT Goa found in iit.csv:")
print(goa_iit.to_string(index=False))

goa_id = goa_iit['iit_id'].values[0]
print(f"\nIIT Goa iit_id: {goa_id}")

# Check cutoff data
goa_cutoff = cutoff[cutoff['iit_id'] == goa_id]
print(f"\n✅ IIT Goa Cutoff Records: {len(goa_cutoff)}")

if len(goa_cutoff) > 0:
    print(f"  Categories: {sorted(goa_cutoff['category'].unique())}")
    print(f"  Rounds: {sorted(goa_cutoff['round'].unique())}")
    print(f"  Unique Branches: {goa_cutoff['branch_id'].nunique()}")
    
    # Get branch names
    goa_branches = goa_cutoff['branch_id'].unique()
    goa_branch_names = branch[branch['branch_id'].isin(goa_branches)][['branch_id', 'branch_name', 'short_name']]
    print(f"\n  IIT Goa Branches ({len(goa_branch_names)}):")
    for _, br in goa_branch_names.iterrows():
        count = len(goa_cutoff[goa_cutoff['branch_id'] == br['branch_id']])
        print(f"    {br['branch_id']:3d}. {br['short_name']:4s} - {br['branch_name']} ({count} records)")
    
    print(f"\n  Sample IIT Goa cutoff records (first 10):")
    sample = goa_cutoff.head(10)[['cutoff_id', 'iit_id', 'branch_id', 'category', 'closing_rank', 'round']]
    print(sample.to_string(index=False))
else:
    print("\n❌ ERROR: No cutoff records found for IIT Goa")

# Overall statistics
print(f"\n" + "="*60)
print("OVERALL DATA SUMMARY")
print("="*60)
print(f"IIT Table: {len(iit)} records")
print(f"Branch Table: {len(branch)} records")
print(f"Cutoff Table: {len(cutoff)} records")
print(f"Unique IITs in cutoff: {cutoff['iit_id'].nunique()}")
print(f"Unique branches in cutoff: {cutoff['branch_id'].nunique()}")

# Verify all IITs in cutoff have matching iit_id
missing = set(cutoff['iit_id']) - set(iit['iit_id'])
if missing:
    print(f"\n⚠️  WARNING: Some iit_ids in cutoff.csv don't have matching entries in iit.csv: {missing}")
else:
    print(f"\n✅ All cutoff records have valid iit_id references")

# Verify all branches in cutoff have matching branch_id
missing_branches = set(cutoff['branch_id']) - set(branch['branch_id'])
if missing_branches:
    print(f"⚠️  WARNING: Some branch_ids in cutoff.csv don't have matching entries in branch.csv: {missing_branches}")
else:
    print(f"✅ All cutoff records have valid branch_id references")

print("="*60)
