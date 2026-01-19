"""
Pydantic schemas for session-based chat management.
"""

from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from enum import Enum
from app.schemas.response import RecommendationResponse, RecommendationItem
from datetime import datetime

class Role(str, Enum):
    """Chat message role."""
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"

class SessionState(str, Enum):
    """Current state of the counseling session."""
    INITIAL = "initial"
    SUMMARY_SHOWN = "summary_shown"
    RECOMMENDATIONS_SHOWN = "recommendations_shown"
    REPORT_SHOWN = "report_shown"
    FOLLOW_UP = "follow_up"

class ChatMessage(BaseModel):
    """A single message in the chat history."""
    role: Role
    content: str
    timestamp: datetime = Field(default_factory=datetime.now)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class SessionCreate(BaseModel):
    """Request to create a new session."""
    rank: int = Field(..., ge=1, description="JEE Advanced rank")
    category: str = Field(..., description="Category: GEN, OBC, SC, ST, or EWS")
    year: int = Field(default=2024, ge=2020, le=2025)
    query: Optional[str] = None

class ChatRequest(BaseModel):
    """Request to send a message to the chat."""
    message: str

class ChatSession(BaseModel):
    """Full session object stored in memory/DB."""
    session_id: str
    rank: int
    category: str
    year: int
    created_at: datetime = Field(default_factory=datetime.now)
    state: SessionState = SessionState.INITIAL
    history: List[ChatMessage] = []
    
    # Store the generated recommendations to avoid re-calculating
    # and to provide context to LLM
    recommendations: Optional[RecommendationResponse] = None

class ChatResponse(BaseModel):
    """Response to a chat message."""
    session_id: str
    state: SessionState
    message: str
    # Optional fields populated based on state transitions
    data: Optional[Dict[str, Any]] = None 
