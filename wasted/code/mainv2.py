from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, text
import pandas as pd
import os

from langchain.agents import Tool, initialize_agent
from langchain.agents.agent_types import AgentType
from langchain.memory import ConversationBufferMemory
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

# === FastAPI App ===
app = FastAPI()

# === CORS ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Input Schema ===
class QueryRequest(BaseModel):
    query: str

# === DB Setup ===
DATABASE_URL = "postgresql+psycopg2://postgres:Ak996085%40@localhost:5433/college_assist"
engine = create_engine(DATABASE_URL)

def run_sql(query: str) -> str:
    """Execute SQL query and return results as string"""
    try:
        with engine.connect() as conn:
            df = pd.read_sql_query(text(query), conn)
        
        if df.empty:
            return "No results found for your query."
        
        # Limit results to prevent overwhelming responses
        if len(df) > 20:
            return df.to_string(index=False) + "\n\n(Showing top 20 results)"
        
        return df.to_string(index=False)
    except Exception as e:
        return f"SQL Error: {str(e)}"

# === LLM Setup ===
GOOGLE_API_KEY = "AIzaSyCntaYRFWV0coloORLkgC-57lTqq1_eGfU"
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=GOOGLE_API_KEY,
    temperature=0.1
)

# New LLM for Intent Classification
intent_llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=GOOGLE_API_KEY,
    temperature=0.01  # Very low temperature for consistent classification
)

# New Intent Classification Function
def classify_intent(query: str) -> str:
    """Classify user query to determine if SQL is needed."""
    intent_prompt = PromptTemplate.from_template("""
        Classify the following user query. Respond with one of these keywords:
        - 'SQL_QUERY': if the query is asking for information from the college database.
        - 'GREETING': if the query is a greeting (e.g., 'hello', 'hi').
        - 'FAREWELL': if the query is a farewell (e.g., 'bye', 'thank you').
        - 'GENERAL_INFO': for any other non-database-specific query.
        - 'UNKNOWN': if the query is unclear.

        Query: {query}
        Classification:
    """)
    response = intent_llm.invoke(intent_prompt.format(query=query))
    return response.content.strip().replace("'", "")

# === Improved SQL Prompt ===
sql_prompt_template = PromptTemplate.from_template("""
You are an expert SQL generator for a college database with these tables:

1. college_advance: JEE Advanced colleges (IITs)
    Columns: institute, seat_type, gender, opening_rank, closing_rank, round_number, nirf_rank, program_name, duration, degree, average_package, highest_package

2. college_mains: JEE Mains colleges 
    Columns: institute, seat_type, gender, opening_rank, closing_rank, round_number, program_name, duration, degree, nirf_rank, average_package, highest_package

3. college_fees: Fee structure
    Columns: institute, gen_obc_ews_gt_5l, gen_obc_ews_1to5l, gen_obc_ews_lt_1l, sc_st_pwd, notes, college_id

IMPORTANT RULES:
- **For very general queries like 'Give me all colleges' or 'List colleges', generate a simple query like: 'SELECT DISTINCT institute FROM college_advance LIMIT 20'.**
- For rank-based queries: Use "opening_rank <= [rank] AND closing_rank >= [rank]" 
- Default values: seat_type = 'OPEN', gender = 'Gender-Neutral'
- Use ILIKE for partial text matching (case insensitive)
- Always add LIMIT (max 20 results)
- Use ORDER BY closing_rank ASC for best colleges first
- For JEE Advanced questions, use college_advance table
- For JEE Mains questions, use college_mains table
- If the user asks for unique colleges and also for sorting by rank, you must include the closing_rank in the SELECT list, e.g., 'SELECT DISTINCT institute, closing_rank FROM ... ORDER BY closing_rank'.
- When a user asks for a list of colleges, use SELECT DISTINCT institute to avoid duplicate results.
                                 

Generate ONLY the SQL query, no explanations or formatting.

Question: {question}
""")

def generate_sql_tool_func(question: str) -> str:
    """Generate SQL query from natural language question"""
    try:
        prompt = sql_prompt_template.format(question=question)
        result = llm.invoke(prompt)
        sql_query = result.content.strip().replace("```sql", "").replace("```", "").strip()
        print(sql_query)

        return sql_query
    except Exception as e:
        return f"Error generating SQL: {str(e)}"

# === Direct Query Processing Function ===
def process_college_query(question: str, exam_type: str = "auto") -> str:
    """Process college query directly with intent classification"""
    
    intent = classify_intent(question)
    
    if intent == 'GREETING':
        return "Hello! How can I help you with your college search?"
    elif intent == 'FAREWELL':
        return "You're welcome! Feel free to ask if you have more questions."
    elif intent == 'GENERAL_INFO':
        return "I can only provide information about colleges from my database. Please ask a specific question about colleges."
    elif intent == 'UNKNOWN':
        return "I'm sorry, I don't understand that request. Please try rephrasing your question."
        
    # Proceed with SQL generation for SQL_QUERY intent
    if exam_type == "advanced" or "jee advanced" in question.lower() or "iit" in question.lower():
        table_hint = "Use college_advance table for JEE Advanced/IIT colleges."
    elif exam_type == "mains" or "jee mains" in question.lower():
        table_hint = "Use college_mains table for JEE Mains colleges."
    else:
        table_hint = "Determine appropriate table based on context."
    
    enhanced_question = f"{question}. {table_hint}"
    
    try:
        # Step 1: Generate SQL
        sql_query = generate_sql_tool_func(enhanced_question)
        if sql_query.startswith("Error"):
            return sql_query
        
        # Step 2: Execute SQL
        sql_result = run_sql(sql_query)
        print(sql_result)
        if sql_result.startswith("SQL Error"):
            return sql_result
        
        # Step 3: Generate natural language response
        summary_prompt = PromptTemplate.from_template("""
You are a helpful college counselor. Answer the student's question based on the database results.

Student Question: {question}

Database Results:
{results}

Guidelines:
- Be specific and helpful
- Include college names, ranks, and relevant details
- If no results found, suggest alternatives
- Keep response concise but informative
- Don't make up information not in the results
- For rank-based queries, clearly state admission chances

Response:
""")
        
        prompt = summary_prompt.format(question=question, results=sql_result)
        response = llm.invoke(prompt)
        
        return response.content.strip()
        
    except Exception as e:
        return f"Error processing query: {str(e)}"

# === Simplified Tools (for fallback) ===
generate_sql_tool = Tool(
    name="GenerateSQL",
    func=generate_sql_tool_func,
    description="Converts natural language question into SQL query for college database."
)

run_sql_tool = Tool(
    name="RunSQL", 
    func=run_sql,
    description="Executes SQL query and returns formatted results."
)

# === Agent Setup (simplified) ===
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
tools = [generate_sql_tool, run_sql_tool]

agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    memory=memory,
    verbose=False,
    max_iterations=3,
    early_stopping_method="generate"
)

# === API Routes ===
@app.post("/api/query")
async def handle_query(request: QueryRequest):
    """Handle general college queries with direct processing"""
    try:
        response = process_college_query(request.query, "auto")
        print(response)
        return {"response": response}
    except Exception as e:
        try:
            response = agent.run(request.query)
            return {"response": response}
        except Exception as agent_error:
            raise HTTPException(status_code=500, detail=f"Query processing failed: {str(e)}")

@app.post("/api/jee-mains")
async def handle_mains_query(request: QueryRequest):
    """Handle JEE Mains specific queries"""
    try:
        response = process_college_query(request.query, "mains")
        print(response)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"JEE Mains query failed: {str(e)}")

@app.post("/api/jee-advanced") 
async def handle_advanced_query(request: QueryRequest):
    """Handle JEE Advanced specific queries"""
    try:
        response = process_college_query(request.query, "advanced")
        print(response)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"JEE Advanced query failed: {str(e)}")

# === Health Check ===
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    print("Health check requested")
    return {"status": "healthy", "message": "College Assistant API is running"}

# === Startup Event ===
@app.on_event("startup")
async def startup_event():
    print(f"\n{'='*60}")
    print("🚀 COLLEGE ASSISTANT API STARTING UP")
    print(f"{'='*60}")
    print(f"Database URL: {DATABASE_URL[:50]}...")
    print(f"LLM Model: gemini-2.5-flash")
    print(f"API Key: {GOOGLE_API_KEY[:20]}...")
    print("Available endpoints:")
    print("  - POST /api/query (General queries)")
    print("  - POST /api/jee-mains (JEE Mains specific)")
    print("  - POST /api/jee-advanced (JEE Advanced specific)")
    print("  - GET /health (Health check)")
    print(f"{'='*60}")
    print("✅ STARTUP COMPLETE - Ready to process requests!")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    import uvicorn
    print("Starting server with uvicorn...")
    uvicorn.run(app, host="0.0.0.0", port=8000)