"""
Gemini LLM service for generating counseling explanations.
"""

from typing import List, Optional
import google.generativeai as genai
from app.schemas.response import RecommendationItem
from app.core.config import settings


class LLMService:
    """Service for generating LLM-based counseling explanations."""
    
    def __init__(self):
        """Initialize Gemini API client."""
        self.api_key = settings.GEMINI_API_KEY
        self.enabled = self.api_key is not None
        
        if self.enabled:
            try:
                genai.configure(api_key=self.api_key)
                self.model = genai.GenerativeModel('gemini-pro')
            except Exception as e:
                print(f"Warning: Failed to initialize Gemini API: {e}")
                self.enabled = False
        else:
            self.model = None
    
    def generate_counseling_response(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """
        Generate counseling response using Gemini LLM.
        
        Args:
            rank: User's JEE Advanced rank
            category: Category (GEN, OBC, SC, ST, EWS)
            query: Optional user query
            safe: List of safe recommendations
            moderate: List of moderate recommendations
            ambitious: List of ambitious recommendations
        
        Returns:
            LLM-generated counseling response string
        """
        if not self.enabled:
            return ""
        
        try:
            # Build prompt
            prompt = self._build_prompt(rank, category, query, safe, moderate, ambitious)
            
            # Generate response
            response = self.model.generate_content(prompt)
            
            return response.text.strip()
        
        except Exception as e:
            print(f"Error generating LLM response: {e}")
            return ""
    
    def _build_prompt(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Build the system prompt for Gemini."""
        
        # Format recommendations into readable text
        def format_list(items: List[RecommendationItem], label: str) -> str:
            if not items:
                return f"{label}: None available\n"
            
            lines = [f"{label} ({len(items)} options):"]
            for item in items[:10]:  # Limit to top 10 for each category
                lines.append(
                    f"  - {item.iit_name} ({item.branch_name}): "
                    f"Closing Rank {item.closing_rank}"
                )
            return "\n".join(lines) + "\n"
        
        safe_text = format_list(safe, "SAFE")
        moderate_text = format_list(moderate, "MODERATE")
        ambitious_text = format_list(ambitious, "AMBITIOUS")
        
        user_query_context = ""
        if query:
            user_query_context = f"\nUser Query: {query}\n"
        
        prompt = f"""You are an experienced IIT admission counselor. Provide helpful, professional guidance based on the following data.

Student Profile:
- JEE Advanced Rank: {rank}
- Category: {category}
{user_query_context}
Available Options:
{safe_text}
{moderate_text}
{ambitious_text}

Instructions:
1. Only reference colleges and branches from the data provided above
2. Do NOT suggest colleges or branches that are not in the list
3. Provide realistic, honest advice about admission chances
4. Consider the user's query if provided
5. Be encouraging but practical
6. Keep the response concise (200-300 words)
7. Focus on helping the student make an informed decision

Provide your counseling response:"""
        
        return prompt
