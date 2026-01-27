"""
FastAPI application entry point.
Main application setup and route registration.
"""

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.core.config import settings
from app.core.database import get_db
from app.routes import recommend, chat, jee_mains_chat

# Initialize FastAPI app
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="IIT Rank-Based College Recommendation System API"
)

# Configure CORS (allow frontend to access backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(recommend.router, prefix=settings.API_PREFIX)
app.include_router(chat.router, prefix=settings.API_PREFIX)
app.include_router(jee_mains_chat.router, prefix=settings.API_PREFIX)


@app.get("/")
async def root():
    """Root endpoint for health check."""
    return {
        "message": "IIT Rank-Based College Recommendation System API",
        "version": settings.VERSION,
        "status": "operational"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}


@app.get("/health/db")
async def health_check_db(db: Session = Depends(get_db)):
    """Database health check endpoint."""
    try:
        # Test database connection
        result = db.execute("SELECT 1").scalar()
        return {
            "status": "healthy",
            "database": "connected",
            "result": result
        }
    except Exception as e:
        return {
            "status": "error",
            "database": "disconnected",
            "error": str(e)
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
