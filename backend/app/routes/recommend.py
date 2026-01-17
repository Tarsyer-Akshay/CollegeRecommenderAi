"""
Recommendation API endpoint.
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.request import RecommendationRequest
from app.schemas.response import RecommendationResponse
from app.services.rank_filter import RankFilterService
from app.services.llm_service import LLMService

router = APIRouter(prefix="/recommend", tags=["recommendations"])

# Initialize services
rank_filter_service = RankFilterService()
llm_service = LLMService()


@router.post("", response_model=RecommendationResponse)
async def get_recommendations(
    request: RecommendationRequest,
    db: Session = Depends(get_db)
) -> RecommendationResponse:
    """
    Get IIT and branch recommendations based on JEE Advanced rank.
    
    This endpoint:
    1. Filters eligible options using deterministic logic (no LLM)
    2. Categorizes results into Safe / Moderate / Ambitious
    3. Optionally generates LLM counseling explanation
    """
    try:
        # Get categorized recommendations using deterministic filtering
        safe, moderate, ambitious = rank_filter_service.get_recommendations(
            db=db,
            rank=request.rank,
            category=request.category,
            year=request.year,
            round_number=request.round
        )
        
        # Generate LLM response (if Gemini is configured)
        llm_response = llm_service.generate_counseling_response(
            rank=request.rank,
            category=request.category,
            query=request.query,
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        # Return structured response
        return RecommendationResponse(
            safe=safe,
            moderate=moderate,
            ambitious=ambitious,
            llm_response=llm_response
        )
    
    except Exception as e:
        # Log error and return empty response with error message
        raise HTTPException(
            status_code=500,
            detail=f"Error processing recommendation request: {str(e)}"
        )
