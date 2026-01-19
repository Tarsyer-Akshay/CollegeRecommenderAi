"""
Service for managing chat sessions and counseling state.
Uses in-memory storage for MVP (dictionaries).
"""

import uuid
from typing import Dict, Optional, List
from datetime import datetime
from app.schemas.session import ChatSession, ChatMessage, Role, SessionState, SessionCreate
from app.schemas.response import RecommendationResponse

class SessionService:
    """
    Manages user sessions, chat history, and counseling state.
    """
    
    # In-memory store: session_id -> ChatSession
    _sessions: Dict[str, ChatSession] = {}
    
    def create_session(self, initial_data: SessionCreate) -> ChatSession:
        """Create a new counseling session."""
        session_id = str(uuid.uuid4())
        
        session = ChatSession(
            session_id=session_id,
            rank=initial_data.rank,
            category=initial_data.category,
            year=initial_data.year,
            state=SessionState.INITIAL,
            history=[],
            recommendations=None
        )
        
        self._sessions[session_id] = session
        return session
    
    def get_session(self, session_id: str) -> Optional[ChatSession]:
        """Retrieve a session by ID."""
        return self._sessions.get(session_id)
    
    def add_message(self, session_id: str, role: Role, content: str) -> Optional[ChatMessage]:
        """Add a message to the session history."""
        session = self.get_session(session_id)
        if not session:
            return None
            
        message = ChatMessage(role=role, content=content)
        session.history.append(message)
        
        # Keep history manageable (last 20 messages)
        # We might need more context, but 20 is a good start
        if len(session.history) > 20:
             session.history = session.history[-20:]
             
        return message
        
    def update_state(self, session_id: str, new_state: SessionState) -> bool:
        """Update the counseling state of a session."""
        session = self.get_session(session_id)
        if not session:
            return False
            
        session.state = new_state
        return True
        
    def set_recommendations(self, session_id: str, data: RecommendationResponse) -> bool:
        """Store generated recommendations in the session."""
        session = self.get_session(session_id)
        if not session:
            return False
            
        session.recommendations = data
        return True

    def get_formatted_history(self, session_id: str) -> str:
        """Get history formatted for LLM context."""
        session = self.get_session(session_id)
        if not session:
            return ""
            
        formatted = ""
        for msg in session.history:
            role_label = "Student" if msg.role == Role.USER else "Counselor"
            formatted += f"{role_label}: {msg.content}\n"
        return formatted
