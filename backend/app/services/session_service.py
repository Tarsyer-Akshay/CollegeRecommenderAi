
"""
Service for managing chat sessions and counseling state.
Uses PostgreSQL database storage.
"""

import uuid
from typing import Optional, List
from sqlalchemy.orm import Session
from app.schemas.session import ChatSession, ChatMessage, Role, SessionState, SessionCreate
from app.schemas.response import RecommendationResponse
from app.models.session import Session as SessionModel

class SessionService:
    """
    Manages user sessions, chat history, and counseling state using Database.
    """
    
    def create_session(self, db: Session, initial_data: SessionCreate, user_id: Optional[str] = None, source_type: str = 'jee_advanced') -> ChatSession:
        """Create a new counseling session in the database."""
        # Create DB model
        db_session = SessionModel(
            rank=initial_data.rank,
            category=initial_data.category,
            year=initial_data.year,
            source_type=source_type,
            state=SessionState.INITIAL.value,
            history=[],
            recommendations=None,
            user_id=uuid.UUID(user_id) if user_id else None
        )
        
        db.add(db_session)
        db.commit()
        db.refresh(db_session)
        
        return self._to_schema(db_session)
    
    def get_session(self, db: Session, session_id: str) -> Optional[ChatSession]:
        """Retrieve a session by ID."""
        try:
            db_session = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
            if not db_session:
                return None
            return self._to_schema(db_session)
        except Exception:
            return None
    
    def add_message(self, db: Session, session_id: str, role: Role, content: str) -> Optional[ChatMessage]:
        """Add a message to the session history."""
        db_session = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
        if not db_session:
            return None
            
        # Create message object
        message = {"role": role, "content": content}
        
        # Update history (SQLAlchemy with JSONB requires explicit reassignment or deep copy for mutation tracking)
        # We append to the list
        current_history = list(db_session.history) if db_session.history else []
        current_history.append(message)
        
        # Enforce history limit (last 20)
        if len(current_history) > 20:
            current_history = current_history[-20:]
            
        db_session.history = current_history
        db.commit()
        
        return ChatMessage(role=role, content=content)
        
    def update_state(self, db: Session, session_id: str, new_state: SessionState) -> bool:
        """Update the counseling state of a session."""
        db_session = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
        if not db_session:
            return False
            
        db_session.state = new_state.value
        db.commit()
        return True
        
    def set_recommendations(self, db: Session, session_id: str, data: RecommendationResponse) -> bool:
        """Store generated recommendations in the session."""
        db_session = db.query(SessionModel).filter(SessionModel.session_id == session_id).first()
        if not db_session:
            return False
            
        # Serialize Pydantic model to dict
        db_session.recommendations = data.model_dump()
        db.commit()
        return True

    def get_formatted_history(self, db: Session, session_id: str) -> str:
        """Get history formatted for LLM context."""
        session = self.get_session(db, session_id)
        if not session:
            return ""
            
        formatted = ""
        for msg in session.history:
            role_label = "Student" if msg.role == Role.USER else "Counselor"
            formatted += f"{role_label}: {msg.content}\n"
        return formatted

    def _to_schema(self, db_model: SessionModel) -> ChatSession:
        """Convert DB model to Pydantic schema."""
        return ChatSession(
            session_id=str(db_model.session_id),
            rank=db_model.rank,
            category=db_model.category,
            year=db_model.year,
            state=SessionState(db_model.state),
            history=[ChatMessage(**m) for m in (db_model.history or [])],
            recommendations=RecommendationResponse(**db_model.recommendations) if db_model.recommendations else None
        )
