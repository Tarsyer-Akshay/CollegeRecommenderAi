"""
SQLAlchemy model for Branch table.
"""

from sqlalchemy import Column, Integer, String
from app.core.database import Base


class Branch(Base):
    """Branch model representing the branches table."""
    
    __tablename__ = "branches"
    
    id = Column(Integer, primary_key=True, index=True, name="branch_id")
    branch_name = Column(String, nullable=False, index=True)
    short_name = Column(String, nullable=True)
    degree_type = Column(String, nullable=True)
