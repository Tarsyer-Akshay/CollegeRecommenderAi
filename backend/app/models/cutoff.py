"""
SQLAlchemy model for Cutoff table.
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base


class Cutoff(Base):
    """Cutoff model representing the cutoffs table."""
    
    __tablename__ = "cutoffs"
    
    id = Column(Integer, primary_key=True, index=True, name="cutoff_id")
    iit_id = Column(Integer, ForeignKey("iits.iit_id"), nullable=False, index=True)
    branch_id = Column(Integer, ForeignKey("branches.branch_id"), nullable=False, index=True)
    year = Column(Integer, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    closing_rank = Column(Integer, nullable=False)
    round = Column(Integer, nullable=False, index=True)
    
    # Relationships (optional, for easier querying)
    iit = relationship("IIT", backref="cutoffs")
    branch = relationship("Branch", backref="cutoffs")
