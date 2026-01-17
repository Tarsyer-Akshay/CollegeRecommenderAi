# database_config.py
import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="college_assist",
        user="postgres",
        password="Ak996085@",
        host="localhost",
        port="5433"
    )
