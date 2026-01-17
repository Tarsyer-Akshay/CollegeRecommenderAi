import pandas as pd
import psycopg2
import google.generativeai as genai
import re

# === Gemini API Key ===
genai.configure(api_key="AIzaSyCntaYRFWV0coloORLkgC-57lTqq1_eGfU")

# === Database Connection ===
def run_sql(sql_query):
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

# === Step 1: Generate SQL using Gemini ===
def generate_sql(user_question):
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

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip("`").strip()

# === Step 2: Generate final answer using Gemini ===
def generate_final_answer(user_question, df_result):
    prompt = f"""
The user asked: "{user_question}"

Here is the result of the SQL query from the college database:

{df_result.to_markdown(index=False)}

Now generate a clear, helpful answer for the user in plain language.
Summarize the colleges, branches, or ranks based on the data. Provide best colleges that user can get admission and use nirf rank data for that
Use bullet points if necessary. 
"""

    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip()

# === Interface ===
def main():
    print("🎓 Welcome to the Gemini-Powered College Admission Assistant")
    user_question = "Which college I can get on 2000 jee mains rank in computer department"

    try:
        print("\n🤖 Generating SQL using Gemini...")
        sql_query = generate_sql(user_question)
        sql_query = re.sub(r"(?i)^sql\s*", "", sql_query).strip("`").strip()

        #raw_sql = sql_query.strip()
        #sql_query = re.search(r"```sql\s*(.*?)\s*```", raw_sql, re.DOTALL)
        #sql_query = re.sub(r"^sql|$", "", sql_query.strip(), flags=re.IGNORECASE).strip()

        print("🔍 SQL Query:", sql_query)

        print("\n📊 Fetching data from database...")
        df_result = run_sql(sql_query)
        print(df_result)

        if df_result.empty:
            print("⚠️ No data found for this query.")
            return

        print("\n📝 Asking Gemini to summarize the result...")
        final_answer = generate_final_answer(user_question, df_result)

        print("\n✅ Answer:\n")
        print(final_answer)

    except Exception as e:
        print("❌ Error:", e)

if __name__ == "__main__":
    main()
