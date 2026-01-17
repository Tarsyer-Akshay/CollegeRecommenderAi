# IIT Rank-Based College Recommendation System - Backend

FastAPI backend for recommending IITs and branches based on JEE Advanced rank.

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Set `DATABASE_URL` with your PostgreSQL connection string
   - Optionally set `GEMINI_API_KEY` for LLM counseling features

3. **Run the application:**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

   Or:
   ```bash
   python -m app.main
   ```

## API Endpoints

### POST `/api/recommend`

Get IIT and branch recommendations based on rank.

**Request Body:**
```json
{
  "rank": 5000,
  "category": "GEN",
  "year": 2024,
  "query": "I prefer computer science and locations in South India",
  "round": 6
}
```

**Response:**
```json
{
  "safe": [
    {
      "iit_name": "Indian Institute of Technology Madras",
      "branch_name": "Computer Science and Engineering",
      "closing_rank": 4500,
      "confidence": "safe",
      "location": "Chennai, Tamil Nadu",
      "nirf_rank": 1
    }
  ],
  "moderate": [...],
  "ambitious": [...],
  "llm_response": "Based on your rank of 5000..."
}
```

## Architecture

- **Deterministic Filtering**: All eligibility decisions are made using SQL queries, not LLM
- **LLM Explanation**: Gemini only generates counseling text based on filtered results
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Structure**: Modular design with separation of concerns

## Notes

- LLM features are optional - if `GEMINI_API_KEY` is not set, `llm_response` will be empty
- All response keys (`safe`, `moderate`, `ambitious`, `llm_response`) are always present
- Filtering thresholds:
  - **Safe**: closing_rank >= rank * 1.15
  - **Moderate**: closing_rank >= rank * 0.95
  - **Ambitious**: closing_rank >= rank * 0.85
