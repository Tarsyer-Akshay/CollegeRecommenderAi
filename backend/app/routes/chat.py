"""
API routes for session-based counseling chat.
"""

from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.deps import get_current_user
from app.schemas.session import SessionCreate, ChatResponse, ChatRequest, SessionState, ChatSession, Role
from app.services.session_service import SessionService
from app.services.rank_filter import RankFilterService
from app.services.llm_service import LLMService

router = APIRouter(prefix="/chat", tags=["chat"])

session_service = SessionService()
rank_filter_service = RankFilterService()
llm_service = LLMService()

@router.post("/start", response_model=ChatSession)
async def start_session(
    request: SessionCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """
    Start a new counseling session.
    Generates initial recommendations and stores them in session state.
    """
    user_id = current_user.get("sub")
    
    # Create session linked to user
    session = session_service.create_session(db, request, user_id=user_id)
    
    # Generate initial recommendations
    try:
        safe, moderate, ambitious = rank_filter_service.get_recommendations(
            db=db,
            rank=request.rank,
            category=request.category,
            year=request.year
        )
        
        # Determine strict state transition
        # Default to summary shown initially
        session_service.update_state(db, session.session_id, SessionState.SUMMARY_SHOWN)
        
        # Generate initial summary using LLM
        summary = llm_service.generate_counselor_summary(
            rank=request.rank,
            category=request.category,
            query=request.query,
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        # Add system/assistant welcome message to history
        session_service.add_message(db, session.session_id, Role.ASSISTANT, summary)
        
        # Store recommendations in session for context
        from app.schemas.response import RecommendationResponse, FilteredComparisonItem
        
        # Helper to create filtered items (simplified for MVP)
        def to_filtered(items, cat):
             return [FilteredComparisonItem(
                 category=cat, 
                 iit=i.iit, 
                 branch=i.branch, 
                 closing_rank=i.closing_rank, 
                 admission_probability="High" if cat=="safe" else "Medium" if cat=="moderate" else "Low"
             ) for i in items[:5]]

        full_response = RecommendationResponse(
            counselor_summary=summary,
            filtered_comparison=to_filtered(safe, "safe") + to_filtered(moderate, "moderate") + to_filtered(ambitious, "ambitious"),
            full_report="", # Generated later on demand
            safe=safe,
            moderate=moderate,
            ambitious=ambitious
        )
        
        session_service.set_recommendations(db, session.session_id, full_response)
        
        # Refresh session to include updates
        updated_session = session_service.get_session(db, session.session_id)
        return updated_session
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to start session: {str(e)}")

@router.post("/{session_id}/message", response_model=ChatResponse)
async def send_message(
    session_id: str,
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """
    Send a message to the counselor.
    Returns the AI response and current session state.
    """
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
        
    # Verify ownership
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")

    # 1. Add user message to history
    session_service.add_message(db, session_id, Role.USER, request.message)
    
    # 2. Generate response based on state and context
    response_text = ""
    
    # If user explicitly asks for full report, upgrade state
    if "full report" in request.message.lower() and session.state != SessionState.REPORT_SHOWN:
        session_service.update_state(db, session_id, SessionState.REPORT_SHOWN)
        
        # Generate full report if not present
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
            
        response_text = "I've prepared your full counseling report. You can view it now. Do you have any specific questions about it?"
        session_service.add_message(db, session_id, Role.ASSISTANT, response_text)
        
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message=response_text,
            data={"full_report": session.recommendations.full_report}
        )
        
    # Standard Chat Flow (Follow-up)
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
async def generate_full_report_endpoint(
    session_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """
    Generate the full counseling report on demand.
    """
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    # Verify ownership
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
        
    # Check if already generated
    if session.recommendations.full_report:
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message="Report already generated.",
            data={"full_report": session.recommendations.full_report}
        )
        
    try:
        # Generate report
        report = llm_service.generate_full_report(
            rank=session.rank,
            category=session.category,
            query=None,
            safe=session.recommendations.safe,
            moderate=session.recommendations.moderate,
            ambitious=session.recommendations.ambitious
        )
        
        # Update session state and data
        session.recommendations.full_report = report
        session_service.set_recommendations(db, session_id, session.recommendations)
        session_service.update_state(db, session_id, SessionState.REPORT_SHOWN)
        
        return ChatResponse(
            session_id=session_id,
            state=SessionState.REPORT_SHOWN,
            message="Here is your detailed counseling report.",
            data={"full_report": report}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate report: {str(e)}")

@router.get("/{session_id}", response_model=ChatSession)
async def get_session_details(
    session_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    """Get full session details."""
    session = session_service.get_session(db, session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
        
    # Verify ownership
    from app.models.session import Session as SessionModel
    db_sess = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
    if str(db_sess.user_id) != current_user.get("sub"):
        raise HTTPException(status_code=403, detail="Not authorized")
        
    return session
