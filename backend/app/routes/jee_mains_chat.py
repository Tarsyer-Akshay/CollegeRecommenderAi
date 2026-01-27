"""
API routes for JEE Mains session-based counseling chat.
Mirrors chat.py but uses JEE Mains data (NITs, IIITs, GFTIs).
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from pydantic import BaseModel
from app.core.database import get_db
from app.core.deps import get_current_user
from app.schemas.session import ChatResponse, ChatRequest, SessionState, ChatSession, Role
from app.services.session_service import SessionService
from app.services.jee_mains_rank_filter import JeeMainsRankFilterService
from app.services.llm_service import LLMService

router = APIRouter(prefix="/jee-mains-chat", tags=["jee-mains-chat"])

session_service = SessionService()
rank_filter_service = JeeMainsRankFilterService()
llm_service = LLMService()

class JeeMainsSessionCreate(BaseModel):
    rank: int
    category: str
    year: int = 2024
    query: Optional[str] = None
    institute_types: Optional[List[str]] = ["NIT", "IIIT", "GFTI"]

@router.post("/start", response_model=ChatSession)
async def start_jee_mains_session(
    request: JeeMainsSessionCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """
    Start a new JEE Mains counseling session.
    Generates initial recommendations for NITs, IIITs, GFTIs.
    """
    user_id = current_user.get("sub")
    
    # Create session with source_type='jee_mains'
    from app.schemas.session import SessionCreate
    session_create = SessionCreate(
        rank=request.rank,
        category=request.category,
        year=request.year,
        query=request.query
    )
    session = session_service.create_session(db, session_create, user_id=user_id, source_type='jee_mains')
    
    try:
        # Get recommendations using JEE Mains filter service
        safe, moderate, ambitious = rank_filter_service.get_recommendations(
            db=db,
            rank=request.rank,
            category=request.category,
            year=request.year,
            institute_types=request.institute_types
        )
        
        session_service.update_state(db, session.session_id, SessionState.SUMMARY_SHOWN)
        
        # Generate summary
        summary = llm_service.generate_counselor_summary(
            rank=request.rank,
            category=request.category,
            query=request.query,
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        session_service.add_message(db, session.session_id, Role.ASSISTANT, summary)
        
        # Store recommendations
        from app.schemas.response import RecommendationResponse, FilteredComparisonItem
        
        def to_filtered(items, cat):
            return [FilteredComparisonItem(
                category=cat,
                iit=i.iit,  # Institute name mapped to 'iit' field
                branch=i.branch,
                closing_rank=i.closing_rank,
                admission_probability="High" if cat == "safe" else "Medium" if cat == "moderate" else "Low"
            ) for i in items[:5]]

        full_response = RecommendationResponse(
            counselor_summary=summary,
            filtered_comparison=to_filtered(safe, "safe") + to_filtered(moderate, "moderate") + to_filtered(ambitious, "ambitious"),
            full_report="",
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        session_service.set_recommendations(db, session.session_id, full_response)
        
        updated_session = session_service.get_session(db, session.session_id)
        return updated_session
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to start JEE Mains session: {str(e)}")


@router.post("/{session_id}/message", response_model=ChatResponse)
async def send_jee_mains_message(
    session_id: str,
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """Send a message to the JEE Mains counselor."""
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    # Verify ownership
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")

    session_service.add_message(db, session_id, Role.USER, request.message)
    
    # Check for full report request
    if "full report" in request.message.lower() and session.state != SessionState.REPORT_SHOWN:
        session_service.update_state(db, session_id, SessionState.REPORT_SHOWN)
        
        if not session.recommendations.full_report:
            report = llm_service.generate_full_report(
                rank=session.rank,
                category=session.category,
                query=None,
                safe=session.recommendations.safe,
                moderate=session.recommendations.moderate,
                ambitious=session.recommendations.ambitious
            )
            session.recommendations.full_report = report
            session_service.set_recommendations(db, session_id, session.recommendations)
        
        response_text = "I've prepared your full counseling report for NITs, IIITs, and GFTIs. You can view it now."
        session_service.add_message(db, session_id, Role.ASSISTANT, response_text)
        
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message=response_text,
            data={"full_report": session.recommendations.full_report}
        )
    
    # Standard chat
    history_str = session_service.get_formatted_history(db, session_id)
    
    response_text = llm_service.generate_chat_response(
        rank=session.rank,
        category=session.category,
        message=request.message,
        history_str=history_str,
        recommendations=session.recommendations
    )
    
    session_service.add_message(db, session_id, Role.ASSISTANT, response_text)
    
    return ChatResponse(
        session_id=session_id,
        state=session.state,
        message=response_text
    )


@router.post("/{session_id}/full-report", response_model=ChatResponse)
async def generate_jee_mains_full_report(
    session_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """Generate the full JEE Mains counseling report on demand."""
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    
    if session.recommendations.full_report:
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message="Report already generated.",
            data={"full_report": session.recommendations.full_report}
        )
    
    try:
        report = llm_service.generate_full_report(
            rank=session.rank,
            category=session.category,
            query=None,
            safe=session.recommendations.safe,
            moderate=session.recommendations.moderate,
            ambitious=session.recommendations.ambitious
        )
        
        session.recommendations.full_report = report
        session_service.set_recommendations(db, session_id, session.recommendations)
        session_service.update_state(db, session_id, SessionState.REPORT_SHOWN)
        
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message="Here is your detailed counseling report for JEE Mains colleges.",
            data={"full_report": report}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate report: {str(e)}")


@router.get("/{session_id}", response_model=ChatSession)
async def get_jee_mains_session_details(
    session_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """Get full JEE Mains session details."""
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
    
    return session
