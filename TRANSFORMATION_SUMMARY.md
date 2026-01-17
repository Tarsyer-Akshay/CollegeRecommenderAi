# JEE Advanced Cutoff Data Transformation Summary

## Overview
Successfully transformed raw JEE Advanced cutoff data into a normalized relational schema with three tables: **IIT**, **Branch**, and **Cutoff**.

## Transformation Results

### Statistics
- **IIT Records**: 22 (all IITs from ranking file)
- **Branch Records**: 104 unique branches
- **Cutoff Records**: 13,901 total records
- **Unique IITs with Cutoff Data**: 21 (IIT Dhanbad has no cutoff data in source files)
- **Unique Branches in Cutoff**: 71 (not all branches are offered at all IITs)
- **Rounds Covered**: 1, 2, 3, 4, 5 (all JOSAA rounds)
- **Year**: 2024

### Category Distribution
- **GEN** (General): 3,238 records
- **OBC**: 2,965 records
- **SC**: 2,706 records
- **EWS**: 2,642 records
- **ST**: 2,350 records

## Output Files

All normalized data is saved in the `normalized_data/` directory:

1. **`iit.csv`** - IIT master table (22 records)
2. **`branch.csv`** - Branch master table (104 records)
3. **`cutoff.csv`** - Cutoff fact table (13,901 records)
4. **`insert_statements.sql`** - SQL INSERT statements for database import

## Table Schemas

### IIT Table
| Column | Type | Description |
|--------|------|-------------|
| iit_id | Integer (PK) | Auto-increment primary key |
| name | Text | Normalized institute name |
| location | Text | City, State |
| nirf_rank | Integer | NIRF ranking (from rank_data.csv) |

### Branch Table
| Column | Type | Description |
|--------|------|-------------|
| branch_id | Integer (PK) | Auto-increment primary key |
| branch_name | Text | Full program name |
| short_name | Text | Abbreviation (e.g., CSE, ECE) |
| degree_type | Text | B.Tech, BS, or Dual |

### Cutoff Table
| Column | Type | Description |
|--------|------|-------------|
| cutoff_id | Integer (PK) | Auto-increment primary key |
| iit_id | Integer (FK) | Foreign key to IIT table |
| branch_id | Integer (FK) | Foreign key to Branch table |
| year | Integer | Academic year (2024) |
| category | Text | GEN, OBC, SC, ST, EWS |
| closing_rank | Integer | JEE Advanced closing rank |
| round | Integer | JOSAA round (1-5) |

## Sample Data

### Sample IIT Records (first 10)
```
iit_id  name                                              location              nirf_rank
1       Indian Institute of Technology Madras             Chennai, Tamil Nadu  1
2       Indian Institute of Technology Delhi              New Delhi, Delhi     2
3       Indian Institute of Technology Bombay             Mumbai, Maharashtra  3
4       Indian Institute of Technology Kanpur             Kanpur, Uttar Pradesh 4
5       Indian Institute of Technology Kharagpur          Kharagpur, West Bengal 5
6       Indian Institute of Technology Roorkee            Roorkee, Uttarakhand 6
7       Indian Institute of Technology Guwahati           Guwahati, Assam      7
8       Indian Institute of Technology Hyderabad          Hyderabad, Telangana 8
9       Indian Institute of Technology (BHU) Varanasi     Varanasi, Uttar Pradesh 10
10      Indian Institute of Technology Dhanbad            Dhanbad, Jharkhand   15
```

### Sample Branch Records (first 15)
```
branch_id  branch_name                              short_name  degree_type
1          Abu Dhabi Campus - Chemical Engineering  CHE         B.Tech
2          Abu Dhabi Campus - Computer Science...   CSE         B.Tech
4          Aerospace Engineering                    AE          B.Tech
5          Agricultural and Food Engineering        AFE         B.Tech
37         Chemical Engineering                     CHE         B.Tech
44         Civil Engineering                        CE          B.Tech
48         Computer Science and Engineering         CSE         B.Tech
55         Electrical Engineering                   EE          B.Tech
58         Electronics and Communication...         ECE         B.Tech
63         Engineering Physics                      EP          B.Tech
```

### Sample Cutoff Records (first 20)
```
cutoff_id  iit_id  branch_id  year  category  closing_rank  round
1          17      44         2024  GEN       13957         1
2          17      44         2024  GEN       22403         1
3          17      44         2024  EWS       2069          1
4          17      44         2024  EWS       3646          1
5          17      44         2024  OBC       4996          1
6          17      44         2024  OBC       8599          1
7          17      44         2024  SC        2659          1
8          17      44         2024  SC        3619          1
9          17      44         2024  ST        1093          1
10         17      44         2024  ST        1419          1
11         17      48         2024  GEN       3785          1
12         17      48         2024  GEN       6467          1
...
```

## Key Transformations Applied

### 1. Institute Name Normalization
- Mapped short names (e.g., "IIT Madras") to full names ("Indian Institute of Technology Madras")
- Handled special cases like "IIT (BHU) Varanasi" and "IIT Dhanbad (ISM)"
- Ensured consistent naming across all files

### 2. Branch Extraction
- Parsed Academic Program column to extract branch names
- Identified degree types (B.Tech, BS, Dual) from program descriptions
- Generated short names/abbreviations for each branch
- Normalized branch names to remove variations

### 3. Category Derivation
- Mapped Seat Type and Quota to standardized categories:
  - OPEN → GEN
  - OBC-NCL → OBC
  - EWS → EWS
  - SC → SC
  - ST → ST

### 4. Data Integrity
- All foreign key relationships maintained (iit_id, branch_id)
- No duplicate IITs or branches
- Missing NIRF ranks handled gracefully (NULL allowed)
- Invalid closing ranks (e.g., "50P" for PwD) filtered out

## Notes

1. **Missing Data**: IIT Dhanbad (ID 10) is in the master table but has no cutoff records in the source files. This is expected if the institute didn't participate in JOSAA 2024.

2. **PwD Categories**: Records with special codes (ending in "P") for Persons with Disabilities were excluded from cutoff table as they require different handling.

3. **Branch Variations**: Some branches have multiple variations (e.g., "Computer Science and Engineering" vs "B.Tech in Computer Science and Engineering"). These are mapped to the same branch_id for consistency.

4. **Round Information**: Each cutoff record is tagged with the round number (1-5) from the source file name.

## Usage

### Python/Pandas
```python
import pandas as pd

iit_df = pd.read_csv('normalized_data/iit.csv')
branch_df = pd.read_csv('normalized_data/branch.csv')
cutoff_df = pd.read_csv('normalized_data/cutoff.csv')

# Join to get complete information
complete_df = cutoff_df.merge(iit_df, on='iit_id').merge(branch_df, on='branch_id')
```

### SQL Database
```sql
-- Use the generated insert_statements.sql file
-- Or import CSV files directly into your database
```

### Example Query: Find CSE cutoffs for IIT Bombay
```sql
SELECT 
    i.name AS iit_name,
    b.branch_name,
    c.category,
    c.closing_rank,
    c.round
FROM Cutoff c
JOIN IIT i ON c.iit_id = i.iit_id
JOIN Branch b ON c.branch_id = b.branch_id
WHERE i.name LIKE '%Bombay%'
  AND b.short_name = 'CSE'
ORDER BY c.round, c.category, c.closing_rank;
```

## Files Generated

- `normalized_data/iit.csv` - IIT master data
- `normalized_data/branch.csv` - Branch master data  
- `normalized_data/cutoff.csv` - Cutoff fact table
- `normalized_data/insert_statements.sql` - SQL INSERT statements
- `transform_iit_data.py` - Transformation script (reusable)
- `verify_data.py` - Data quality verification script

## Transformation Script

The main transformation script `transform_iit_data.py` can be rerun if source data changes. It includes:
- Automated institute name normalization
- Branch extraction and abbreviation generation
- Category standardization
- Foreign key relationship maintenance
- Data quality checks
