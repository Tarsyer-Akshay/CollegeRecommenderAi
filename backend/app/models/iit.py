"""
SQLAlchemy model for IIT table.
"""

from sqlalchemy import Column, Integer, String
from app.core.database import Base


class IIT(Base):
    """IIT model representing the iits table."""
    
    __tablename__ = "iits"
    
    id = Column(Integer, primary_key=True, index=True, name="iit_id")
    name = Column(String, nullable=False, index=True)
    location = Column(String, nullable=True)
    nirf_rank = Column(Integer, nullable=True)
