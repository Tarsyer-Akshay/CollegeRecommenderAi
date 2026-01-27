-- SQL Script to Create Tables for NIT, IIIT, and CFI (GFTI) Data
-- Run this in your Supabase SQL Editor before uploading CSV files.

-- ==========================================
-- 1. NIT Tables
-- ==========================================

-- Table: nits
CREATE TABLE IF NOT EXISTS nits (
    nit_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    nirf_rank INTEGER
);

-- Table: nit_branches
CREATE TABLE IF NOT EXISTS nit_branches (
    branch_id INTEGER PRIMARY KEY,
    branch_name TEXT NOT NULL,
    short_name TEXT,
    degree_type TEXT
);

-- Table: nit_cutoffs
CREATE TABLE IF NOT EXISTS nit_cutoffs (
    cutoff_id INTEGER PRIMARY KEY,
    nit_id INTEGER NOT NULL REFERENCES nits(nit_id),
    branch_id INTEGER NOT NULL REFERENCES nit_branches(branch_id),
    year INTEGER NOT NULL,
    category TEXT NOT NULL,
    closing_rank INTEGER NOT NULL,
    round INTEGER NOT NULL,
    quota TEXT
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_nit_cutoffs_nit_id ON nit_cutoffs(nit_id);
CREATE INDEX IF NOT EXISTS idx_nit_cutoffs_branch_id ON nit_cutoffs(branch_id);
CREATE INDEX IF NOT EXISTS idx_nit_cutoffs_category ON nit_cutoffs(category);

-- ==========================================
-- 2. IIIT Tables
-- ==========================================

-- Table: iiits
CREATE TABLE IF NOT EXISTS iiits (
    iiit_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    nirf_rank INTEGER
);

-- Table: iiit_branches
CREATE TABLE IF NOT EXISTS iiit_branches (
    branch_id INTEGER PRIMARY KEY,
    branch_name TEXT NOT NULL,
    short_name TEXT,
    degree_type TEXT
);

-- Table: iiit_cutoffs
CREATE TABLE IF NOT EXISTS iiit_cutoffs (
    cutoff_id INTEGER PRIMARY KEY,
    iiit_id INTEGER NOT NULL REFERENCES iiits(iiit_id),
    branch_id INTEGER NOT NULL REFERENCES iiit_branches(branch_id),
    year INTEGER NOT NULL,
    category TEXT NOT NULL,
    closing_rank INTEGER NOT NULL,
    round INTEGER NOT NULL,
    quota TEXT
);

CREATE INDEX IF NOT EXISTS idx_iiit_cutoffs_iiit_id ON iiit_cutoffs(iiit_id);
CREATE INDEX IF NOT EXISTS idx_iiit_cutoffs_branch_id ON iiit_cutoffs(branch_id);

-- ==========================================
-- 3. CFI (GFTI) Tables
-- ==========================================

-- Table: cfis
CREATE TABLE IF NOT EXISTS cfis (
    cfi_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    nirf_rank INTEGER
);

-- Table: cfi_branches
CREATE TABLE IF NOT EXISTS cfi_branches (
    branch_id INTEGER PRIMARY KEY,
    branch_name TEXT NOT NULL,
    short_name TEXT,
    degree_type TEXT
);

-- Table: cfi_cutoffs
CREATE TABLE IF NOT EXISTS cfi_cutoffs (
    cutoff_id INTEGER PRIMARY KEY,
    cfi_id INTEGER NOT NULL REFERENCES cfis(cfi_id),
    branch_id INTEGER NOT NULL REFERENCES cfi_branches(branch_id),
    year INTEGER NOT NULL,
    category TEXT NOT NULL,
    closing_rank INTEGER NOT NULL,
    round INTEGER NOT NULL,
    quota TEXT
);

CREATE INDEX IF NOT EXISTS idx_cfi_cutoffs_cfi_id ON cfi_cutoffs(cfi_id);
CREATE INDEX IF NOT EXISTS idx_cfi_cutoffs_branch_id ON cfi_cutoffs(branch_id);
