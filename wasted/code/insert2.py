import pandas as pd
import psycopg2

# Load your updated data
iit_df = pd.read_csv("iit_data.csv")      # JEE Advanced
gfti_df = pd.read_csv("jee_mains.csv")    # JEE Mains

# Replace NaN with None for PostgreSQL
iit_df = iit_df.where(pd.notnull(iit_df), None)
gfti_df = gfti_df.where(pd.notnull(gfti_df), None)

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="college_assist",
    user="postgres",
    password="Ak996085@",
    host="localhost",
    port="5433"
)
cursor = conn.cursor()

# --- Create IIT Table ---
cursor.execute("""
CREATE TABLE IF NOT EXISTS college_advance (
    institute TEXT,
    program_name TEXT,
    seat_type TEXT,
    gender TEXT,
    round_number INT,
    opening_rank FLOAT,
    closing_rank FLOAT,
    nirf_rank FLOAT,
    duration TEXT,
    degree TEXT,
    average_package FLOAT,
    highest_package FLOAT,
    PRIMARY KEY (institute, program_name, seat_type, gender, round_number)
);
""")

# --- Create GFTI Table ---
cursor.execute("""
CREATE TABLE IF NOT EXISTS college_mains (
    institute TEXT,
    program_name TEXT,
    seat_type TEXT,
    gender TEXT,
    round_number INT,
    opening_rank FLOAT,
    closing_rank FLOAT,
    nirf_rank FLOAT,
    duration TEXT,
    degree TEXT,
    average_package FLOAT,
    highest_package FLOAT,
    PRIMARY KEY (institute, program_name, seat_type, gender, round_number)
);
""")

# --- Insert into college_advance ---
for _, row in iit_df.iterrows():
    cursor.execute("""
        INSERT INTO college_advance (
            institute, program_name, seat_type, gender, round_number,
            opening_rank, closing_rank, nirf_rank, duration, degree,
            average_package, highest_package
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT DO NOTHING;
    """, (
        row['institute'], row['program_name'], row['seat_type'], row['gender'],
        row['round_number'], row['opening_rank'], row['closing_rank'],
        row['nirf_rank'], row['duration'], row['degree'],
        row['average_package'], row['highest_package']
    ))

# --- Insert into college_mains ---
for _, row in gfti_df.iterrows():
    cursor.execute("""
        INSERT INTO college_mains (
            institute, program_name, seat_type, gender, round_number,
            opening_rank, closing_rank, nirf_rank, duration, degree,
            average_package, highest_package
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT DO NOTHING;
    """, (
        row['institute'], row['program_name'], row['seat_type'], row['gender'],
        row['round_number'], row['opening_rank'], row['closing_rank'],
        row['nirf_rank'], row['duration'], row['degree'],
        row['average_package'], row['highest_package']
    ))

# Commit and close
conn.commit()
cursor.close()
conn.close()
