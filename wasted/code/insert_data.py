import pandas as pd
import psycopg2

# Load CSV files
cutoff_df = pd.read_csv("cutoff_data.csv")
fees_df = pd.read_csv("fees_data.csv")
rank_df = pd.read_csv("rank_data.csv")

# Strip and lowercase institute names to standardize


# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="college_assist",
    user="postgres",
    password="Ak996085@",
    host="localhost",
    port="5433"
)
cursor = conn.cursor()

# Create tables
cursor.execute("""
CREATE TABLE IF NOT EXISTS college_rank (
    institute TEXT PRIMARY KEY,
    city TEXT,
    state TEXT,
    rank FLOAT ,
    college_id FLOAT  UNIQUE
);
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS college_fees (
    institute TEXT PRIMARY KEY,
    gen_obc_ews_gt_5l TEXT,
    gen_obc_ews_1to5l TEXT,
    gen_obc_ews_lt_1l TEXT,
    sc_st_pwd TEXT,
    notes TEXT,
    college_id FLOAT
);
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS college_cutoff (
    institute TEXT,
    program_name TEXT,
    seat_type TEXT,
    gender TEXT,
    round_number INT,
    opening_rank FLOAT,
    closing_rank FLOAT,
    nirf_rank FLOAT,
    duration TEXT,
    degree_raw TEXT,
    PRIMARY KEY (institute, program_name, seat_type, gender, round_number)
);
""")

conn.commit()

# Insert into college_rank
for _, row in rank_df.iterrows():
    cursor.execute("""
        INSERT INTO college_rank (institute, city, state, rank, college_id)
        VALUES (%s, %s, %s, %s, %s)
        ON CONFLICT (institute) DO NOTHING
    """, (row['institute'], row['city'], row['state'], row['rank'], row['college_id']))

# Insert into college_fees
for _, row in fees_df.iterrows():
    cursor.execute("""
        INSERT INTO college_fees (institute, gen_obc_ews_gt_5l, gen_obc_ews_1to5l,
        gen_obc_ews_lt_1l, sc_st_pwd, notes, college_id)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (institute) DO NOTHING
    """, (row['institute'], row['gen_obc_ews_gt_5l'], row['gen_obc_ews_1to5l'],
          row['gen_obc_ews_lt_1l'], row['sc_st_pwd'], row['notes'], row['college_id']))

# Insert into college_cutoff
for _, row in cutoff_df.iterrows():
    cursor.execute("""
        INSERT INTO college_cutoff (institute, program_name, seat_type, gender,
        round_number, opening_rank, closing_rank, nirf_rank, duration, degree_raw)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT DO NOTHING;
    """, (
        row['institute'], row['program_name'], row['seat_type'], row['gender'],
        row['round_number'], row['opening_rank'], row['closing_rank'],
        row['nirf_rank'], row['duration'], row['degree_raw']  # Assuming nirf_rank = college_id
    ))

# Finalize
conn.commit()
cursor.close()
conn.close()
