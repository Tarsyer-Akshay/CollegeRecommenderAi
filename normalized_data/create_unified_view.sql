-- SQL Script to Create Unified Views for JEE Mains Data
-- This allows you to query all NITs, IIITs, and CFIs as if they were in one table,
-- while keeping the underlying data physically separate for easier management.

-- 1. Unified Institutes View
CREATE OR REPLACE VIEW jee_mains_institutes AS
SELECT 
    nit_id as id, 
    name, 
    location, 
    nirf_rank, 
    'NIT' as institute_type 
FROM nits
UNION ALL
SELECT 
    iiit_id as id, 
    name, 
    location, 
    nirf_rank, 
    'IIIT' as institute_type 
FROM iiits
UNION ALL
SELECT 
    cfi_id as id, 
    name, 
    location, 
    nirf_rank, 
    'GFTI' as institute_type 
FROM cfis;

-- 2. Unified Branches View
-- Note: Branches might duplicate across types, this view helps normalize searching
CREATE OR REPLACE VIEW jee_mains_branches AS
SELECT branch_id, branch_name, short_name, degree_type, 'NIT' as source_type FROM nit_branches
UNION ALL
SELECT branch_id, branch_name, short_name, degree_type, 'IIIT' as source_type FROM iiit_branches
UNION ALL
SELECT branch_id, branch_name, short_name, degree_type, 'GFTI' as source_type FROM cfi_branches;


-- 3. Unified Cutoffs View
-- This is the most important one for your "College Predictor"
CREATE OR REPLACE VIEW jee_mains_cutoffs AS
SELECT 
    c.cutoff_id,
    c.nit_id as institute_id,
    i.name as institute_name,
    'NIT' as institute_type,
    c.branch_id,
    b.branch_name,
    c.year,
    c.category,
    c.closing_rank,
    c.round,
    c.quota
FROM nit_cutoffs c
JOIN nits i ON c.nit_id = i.nit_id
JOIN nit_branches b ON c.branch_id = b.branch_id

UNION ALL

SELECT 
    c.cutoff_id,
    c.iiit_id as institute_id,
    i.name as institute_name,
    'IIIT' as institute_type,
    c.branch_id,
    b.branch_name,
    c.year,
    c.category,
    c.closing_rank,
    c.round,
    c.quota
FROM iiit_cutoffs c
JOIN iiits i ON c.iiit_id = i.iiit_id
JOIN iiit_branches b ON c.branch_id = b.branch_id

UNION ALL

SELECT 
    c.cutoff_id,
    c.cfi_id as institute_id,
    i.name as institute_name,
    'GFTI' as institute_type,
    c.branch_id,
    b.branch_name,
    c.year,
    c.category,
    c.closing_rank,
    c.round,
    c.quota
FROM cfi_cutoffs c
JOIN cfis i ON c.cfi_id = i.cfi_id
JOIN cfi_branches b ON c.branch_id = b.branch_id;
