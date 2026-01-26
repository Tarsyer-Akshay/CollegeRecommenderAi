from sqlalchemy import Column, String, Integer, JSON, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID, JSONB
from app.core.database import Base
import uuid

class Session(Base):
    __tablename__ = "sessions"

    session_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    # We remove ForeignKey("auth.users.id") from SQLAlchemy model to prevent
    # "NoReferencedTableError" since auth.users is in a different schema not reflected by default.
    # The actual FK constraint is enforced by the database (setup via SQL).
    user_id = Column(UUID(as_uuid=True), nullable=True)
    
    rank = Column(Integer)
    category = Column(String)
    year = Column(Integer)
    state = Column(String)
    
    history = Column(JSONB)
    recommendations = Column(JSONB)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
