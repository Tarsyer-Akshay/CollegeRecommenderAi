"""
Recommendation API endpoint.
"""

import logging
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.core.database import get_db
from app.schemas.request import RecommendationRequest
from app.schemas.response import RecommendationResponse, FilteredComparisonItem
from app.services.rank_filter import RankFilterService
from app.services.llm_service import LLMService

logger = logging.getLogger(__name__)

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
        # Test database connection first
        try:
            db.execute(text("SELECT 1"))
        except Exception as db_error:
            logger.error(f"Database connection error: {db_error}")
            raise HTTPException(
                status_code=500,
                detail=f"Database connection failed: {str(db_error)}"
            )
        
        # Check if tables exist
        try:
            tables_check = db.execute(text("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name IN ('iits', 'branches', 'cutoffs')
            """))
            existing_tables = [row[0] for row in tables_check]
            if len(existing_tables) < 3:
                missing = set(['iits', 'branches', 'cutoffs']) - set(existing_tables)
                raise HTTPException(
                    status_code=500,
                    detail=f"Missing tables in database: {', '.join(missing)}. Please import data first."
                )
        except HTTPException:
            raise
        except Exception as table_error:
            logger.warning(f"Could not check tables: {table_error}")
            # Continue anyway - might be permission issue
        
        # Get categorized recommendations using deterministic filtering
        safe, moderate, ambitious = rank_filter_service.get_recommendations(
            db=db,
            rank=request.rank,
            category=request.category,
            year=request.year,
            round_number=5
        )
        
        # Generate Layer 1: Counselor Summary (brief)
        counselor_summary = llm_service.generate_counselor_summary(
            rank=request.rank,
            category=request.category,
            query=request.query,
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        # Generate appropriate response based on whether this is a follow-up query
        if request.query and len(request.query.strip()) > 0:
            # This is a follow-up question - generate contextual response
            full_report = llm_service.generate_followup_response(
                rank=request.rank,
                category=request.category,
                user_query=request.query,
                safe=safe,
                moderate=moderate,
                ambitious=ambitious
            )
        else:
            # This is initial recommendation - generate full report
            full_report = llm_service.generate_full_report(
                rank=request.rank,
                category=request.category,
                query=request.query,
                safe=safe,
                moderate=moderate,
                ambitious=ambitious
            )
        
        # Generate Layer 2: Filtered Comparison (top 3-5 per category)
        def get_admission_probability(confidence: str) -> str:
            """Map confidence to admission probability."""
            if confidence == "safe":
                return "High"
            elif confidence == "moderate":
                return "Medium"
            else:
                return "Low"
        
        filtered_comparison = []
        
        # Add top 3 safe options
        for item in safe[:3]:
            filtered_comparison.append(FilteredComparisonItem(
                category="safe",
                iit=item.iit,
                branch=item.branch,
                closing_rank=item.closing_rank,
                admission_probability=get_admission_probability(item.confidence),
                location=item.location
            ))
        
        # Add top 3 moderate options
        for item in moderate[:3]:
            filtered_comparison.append(FilteredComparisonItem(
                category="moderate",
                iit=item.iit,
                branch=item.branch,
                closing_rank=item.closing_rank,
                admission_probability=get_admission_probability(item.confidence),
                location=item.location
            ))
        
        # Add top 3 ambitious options
        for item in ambitious[:3]:
            filtered_comparison.append(FilteredComparisonItem(
                category="ambitious",
                iit=item.iit,
                branch=item.branch,
                closing_rank=item.closing_rank,
                admission_probability=get_admission_probability(item.confidence),
                location=item.location
            ))
        
        # Return structured layered response
        return RecommendationResponse(
            counselor_summary=counselor_summary,
            filtered_comparison=filtered_comparison,
            full_report=full_report,
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
    
    except HTTPException:
        # Re-raise HTTP exceptions as-is
        raise
    except Exception as e:
        # Log the full error for debugging
        import traceback
        error_trace = traceback.format_exc()
        logger.error(f"Error in get_recommendations: {str(e)}")
        logger.error(f"Full traceback:\n{error_trace}")
        
        # Return more detailed error for debugging
        raise HTTPException(
            status_code=500,
            detail=f"Error processing recommendation request: {str(e)}. Check server logs for details."
        )
