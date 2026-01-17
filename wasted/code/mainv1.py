from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from sqlalchemy import create_engine, text
import psycopg2
import google.generativeai as genai
import re

# === Gemini API Key ===
genai.configure(api_key="AIzaSyCntaYRFWV0coloORLkgC-57lTqq1_eGfU")

# === FastAPI Setup ===
app = FastAPI()

# === CORS Middleware (allow frontend) ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with ["http://localhost:5173"] in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Request Schema ===
class QueryRequest(BaseModel):
    query: str

# === DB Query Function ===
DATABASE_URL = "postgresql+psycopg2://postgres:Ak996085%40@localhost:5433/college_assist"
engine = create_engine(DATABASE_URL)
# === DB Query Function ===
def run_sql(sql_query: str) -> pd.DataFrame:
    with engine.connect() as conn:
        df = pd.read_sql_query(text(sql_query), conn)
    return df
""" 
def run_sql(sql_query: str) -> pd.DataFrame:
    conn = psycopg2.connect(
        dbname="college_assist",
        user="postgres",
        password="Ak996085@",
        host="localhost",
        port="5433"
    )
    df = pd.read_sql_query(sql_query, conn)
    conn.close()
    return df
"""
# === Gemini SQL Generation ===
def generate_sql(user_question: str) -> str:
    prompt = f"""
You are an PostgreSQL assistant for a college admissions database if use aske for perticular branch or department then use ILIKE so any matchin department data can be fetched, you can use same for other columns too if needed as the exact name might not be present in database. Also alway write case insensitive query.
There are  tables: 
- college_advance(institute,seat_type,gender,opening_rank,closing_rank,round_number,nirf_rank,program_name,duration,degree,average_package,highest_package)
- college_mains(institute,seat_type,gender,opening_rank,closing_rank,round_number,program_name,duration,degree,nirf_rank,average_package,highest_package)
- college_fees(institute, gen_obc_ews_gt_5l, gen_obc_ews_1to5l, gen_obc_ews_lt_1l, sc_st_pwd, notes, college_id)

Write an SQL query based on the user's question. Alway use select * as other details might be helpfull.  Assume seat_type is 'OPEN' and gender is'Gender-Neutral' unless specified. Use college_fees table only if user query ask about fees else just use college_cutoff table
In query try get max top 20 institute order by rank or highest package for given rank. If provided rank is relates to jee mains rank then use college_mains table or if provided rank is related to jee advance rank then use college_advance table.
User question: "{user_question}"

Only return a clean SQL query. Do not include explanations or comments. Also do not use sql initialy of query.
"""

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip("`").strip()


# === Gemini SQL Generation jee mains ===
def answer_jee_mains_query(user_question: str) -> str:
    prompt = f"""
You are an PostgreSQL assistant for a college admissions database if user ask for perticular branch or department then use ILIKE so any matchin department data can be fetched, you can use same for other columns too if needed as the exact name might not be present in database. Also alway write case insensitive query.
There are  tables: 
- college_mains(institute,seat_type,gender,opening_rank,closing_rank,round_number,program_name,duration,degree,nirf_rank,average_package,highest_package)

Write an SQL query based on the user's question. Alway use select * as other details might be helpfull.  Assume seat_type is 'OPEN' and gender is'Gender-Neutral' unless specified. 
In query try get max top 20 institute order by rank or highest package for given rank. If provided rank is relates to jee mains rank then use college_mains table or if provided rank is related to jee advance rank then use college_advance table.
User question: "{user_question}"

Only return a clean SQL query. Do not include explanations or comments. Also do not use sql initialy of query.
"""

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip("`").strip()

# === Gemini SQL Generation for jee advanced ===
def answer_jee_advanced_query(user_question: str) -> str:
    prompt = f"""
You are an PostgreSQL assistant for a college admissions database if use aske for perticular branch or department then use ILIKE so any matching department data can be fetched, you can use same for other columns too if needed as the exact name might not be present in database. Also alway write case insensitive query.
do not use where or any constrain on institute
There are  tables: 
- college_advance(institute,seat_type,gender,opening_rank,closing_rank,round_number,nirf_rank,program_name,duration,degree,average_package,highest_package)
- college_fees(institute, gen_obc_ews_gt_5l, gen_obc_ews_1to5l, gen_obc_ews_lt_1l, sc_st_pwd, notes, college_id)

Write an SQL query based on the user's question. Alway use select * as other details might be helpfull.  Assume seat_type is 'OPEN' and gender is'Gender-Neutral' unless specified. Use college_fees table only if user query ask about fees else just use college_cutoff table
In query try get max top 20 institute order by rank or highest package for given rank. If provided rank is relates to jee mains rank then use college_mains table or if provided rank is related to jee advance rank then use college_advance table.
User question: "{user_question}"

Only return a clean SQL query. Do not include explanations or comments. Also do not use sql initialy of query.
"""

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip("`").strip()


# === Gemini Summary Generation ===
def generate_final_answer(user_question: str, df_result: pd.DataFrame) -> str:
    prompt = f"""
The user asked: "{user_question}"

Here is the result of the SQL query from the college database:

{df_result}

Now generate a clear, helpful answer for the user in plain language.
"""

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip()

# === FastAPI Route ===
@app.post("/api/query")
async def handle_query(request: QueryRequest):
    try:
        user_question = request.query

        sql_query = generate_sql(user_question)
        sql_query = re.sub(r"(?i)^sql\s*", "", sql_query).strip("`").strip()

        df_result = run_sql(sql_query)

        if df_result.empty:
            return {"response": "No matching colleges found for your query."}

        final_answer = generate_final_answer(user_question, df_result)
        return {"response": final_answer}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
# Route 1: Handle JEE Mains queries
@app.post("/api/jee-mains")
async def handle_jee_mains(query_input: QueryRequest):
    sql_query = answer_jee_mains_query(query_input.query)
    sql_query = re.sub(r"(?i)^sql\s*", "", sql_query).strip("`").strip()

    df_result = run_sql(sql_query)

    if df_result.empty:
        return {"response": "No matching colleges found for your query."}

    final_answer = generate_final_answer(query_input.query, df_result)
    return {"response": final_answer}

# Route 2: Handle JEE Advanced queries
@app.post("/api/jee-advanced")
async def handle_jee_advanced(query_input: QueryRequest):
    sql_query = answer_jee_advanced_query(query_input.query)
    print(sql_query)
    sql_query = re.sub(r"(?i)^sql\s*", "", sql_query).strip("`").strip()

    df_result = run_sql(sql_query)

    if df_result.empty:
        return {"response": "No matching colleges found for your query."}

    final_answer = generate_final_answer(query_input.query, df_result)
    return {"response": final_answer}

