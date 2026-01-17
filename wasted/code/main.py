from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, text
import pandas as pd
import uuid

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

# === Session Memory Store ===
session_memory = {}

# === Input Schemas ===
class QueryRequest(BaseModel):
    session_id: str
    query: str

# === DB Setup ===
DATABASE_URL = "postgresql+psycopg2://postgres:Ak996085%40@localhost:5433/college_assist"
engine = create_engine(DATABASE_URL)

def run_sql(query: str) -> str:
    with engine.connect() as conn:
        df = pd.read_sql_query(text(query), conn)
    return df.to_string(index=False)

# === LLM Setup ===
GOOGLE_API_KEY = "AIzaSyCntaYRFWV0coloORLkgC-57lTqq1_eGfU"
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=GOOGLE_API_KEY,
    temperature=0.3
)

# === SQL Prompt Template ===
sql_prompt_template = PromptTemplate.from_template("""
You are an AI college advisor working with a PostgreSQL database.
There are  tables: 
- college_advance(institute,seat_type,gender,opening_rank,closing_rank,round_number,nirf_rank,program_name,duration,degree,average_package,highest_package)
- college_mains(institute,seat_type,gender,opening_rank,closing_rank,round_number,program_name,duration,degree,nirf_rank,average_package,highest_package)
- college_fees(institute, gen_obc_ews_gt_5l, gen_obc_ews_1to5l, gen_obc_ews_lt_1l, sc_st_pwd, notes, college_id)

Rules:
- Use ILIKE for partial matches
- Default seat_type = 'OPEN', gender = 'Gender-Neutral'
- Use 'college_advance' for JEE Advanced and 'college_mains' for JEE Mains
- Use SELECT * only, avoid joins or unions
- Limit results

User question:
{question}
""")

def generate_sql_tool_func(question: str) -> str:
    prompt = sql_prompt_template.format(question=question)
    result = llm.invoke(prompt)
    return result.content.strip("` ")

generate_sql_tool = Tool(
    name="GenerateSQL",
    func=generate_sql_tool_func,
    description="Generate SQL query from natural language"
)

run_sql_tool = Tool(
    name="RunSQL",
    func=run_sql,
    description="Execute SQL query and return result"
)

# === Summarizer Tool ===
def summarize_tool_func(question: str, result: str) -> str:
    prompt = PromptTemplate.from_template("""
You are an expert college advisor.

The user asked: {question}

Here is the database result:
{result}

Respond in clear and helpful language.
    """).format(question=question, result=result)
    
    response = llm.invoke(prompt)
    return response.content.strip()

def summarize_wrapper(input_text: str) -> str:
    try:
        question, result = input_text.split("|||")
        return summarize_tool_func(question, result)
    except Exception:
        return "Sorry, I couldn't summarize the results properly."

summarize_tool = Tool(
    name="SummarizeResult",
    func=summarize_wrapper,
    description="Summarize SQL result to plain language. Format: question|||result"
)

tools = [generate_sql_tool, run_sql_tool, summarize_tool]

# === Session Management ===
@app.post("/start-session")
def start_session():
    session_id = str(uuid.uuid4())
    session_memory[session_id] = ConversationBufferMemory(
        memory_key="chat_history",
        return_messages=True
    )
    return {"session_id": session_id}

def get_agent_for_session(session_id: str):
    if session_id not in session_memory:
        raise HTTPException(status_code=404, detail="Session ID not found")

    memory = session_memory[session_id]
    agent = initialize_agent(
        tools=tools,
        llm=llm,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        memory=memory,
        verbose=True
    )
    return agent

# === Query Routes ===
@app.post("/api/query")
async def handle_query(request: QueryRequest):
    try:
        agent = get_agent_for_session(request.session_id)
        response = agent.run(request.query)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/jee-mains")
async def handle_mains_query(request: QueryRequest):
    try:
        agent = get_agent_for_session(request.session_id)
        query = f"(JEE Mains) {request.query}"
        response = agent.run(query)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/jee-advanced")
async def handle_advanced_query(request: QueryRequest):
    try:
        agent = get_agent_for_session(request.session_id)
        query = f"(JEE Advanced) {request.query}"
        response = agent.run(query)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
