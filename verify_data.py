"""Quick verification script for normalized data"""

import pandas as pd

iit = pd.read_csv('normalized_data/iit.csv')
cutoff = pd.read_csv('normalized_data/cutoff.csv')
branch = pd.read_csv('normalized_data/branch.csv')

print("="*60)
print("DATA QUALITY VERIFICATION")
print("="*60)

print(f"\nIIT Table: {len(iit)} records")
print(f"  Unique IITs with cutoff data: {cutoff['iit_id'].nunique()}")

missing_iits = set(iit['iit_id']) - set(cutoff['iit_id'])
if missing_iits:
    print(f"\n  Missing IIT IDs (in master but no cutoff data): {list(missing_iits)}")
    print("  Missing IIT names:")
    for iit_id in missing_iits:
        name = iit[iit['iit_id'] == iit_id]['name'].values[0]
        print(f"    {iit_id}: {name}")
else:
    print("  ✓ All IITs have cutoff data")

print(f"\nBranch Table: {len(branch)} records")
print(f"  Unique branches in cutoff data: {cutoff['branch_id'].nunique()}")

print(f"\nCutoff Table: {len(cutoff)} records")
print(f"  Categories: {sorted(cutoff['category'].unique())}")
print(f"  Rounds: {sorted(cutoff['round'].unique())}")
print(f"  Year: {cutoff['year'].unique()[0]}")

print("\n" + "="*60)
