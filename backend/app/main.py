"""
FastAPI application entry point.
Main application setup and route registration.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.routes import recommend

# Initialize FastAPI app
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="IIT Rank-Based College Recommendation System API"
)

# Configure CORS (allow frontend to access backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(recommend.router, prefix=settings.API_PREFIX)


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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
