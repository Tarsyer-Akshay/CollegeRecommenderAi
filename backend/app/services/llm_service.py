"""
Gemini LLM service for generating counseling explanations.
"""

from typing import List, Optional
import google.generativeai as genai
from app.schemas.response import RecommendationItem, RecommendationResponse
from app.core.config import settings
from app.services.fallback_report_generator import generate_fallback_report


class LLMService:
    """Service for generating LLM-based counseling explanations."""
    
    def __init__(self):
        """Initialize Gemini API client."""
        self.api_key = settings.GEMINI_API_KEY
        self.enabled = self.api_key is not None
        
        if self.enabled:
            try:
                genai.configure(api_key=self.api_key)
                # 'gemini-pro' was not found, using 'gemini-flash-latest' which is verified to work
                self.model = genai.GenerativeModel('gemini-flash-latest')
            except Exception as e:
                print(f"Warning: Failed to initialize Gemini API: {e}")
                self.enabled = False
        else:
            self.model = None
    
    def generate_counselor_summary(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """
        Generate Layer 1: Brief counselor summary (10-15 seconds read).
        
        Args:
            rank: User's JEE Advanced rank
            category: Category (GEN, OBC, SC, ST, EWS)
            query: Optional user query
            safe: List of safe recommendations
            moderate: List of moderate recommendations
            ambitious: List of ambitious recommendations
        
        Returns:
            Brief summary string (2-3 sentences)
        """
        if not self.enabled:
            print("LOG: LLM disabled. Using fallback summary.")
            return self._fallback_summary(safe, moderate, ambitious)
        
        try:
            print("LOG: Generating Counselor Summary...")
            prompt = self._build_summary_prompt(rank, category, query, safe, moderate, ambitious)
            print(f"LOG: Summary Prompt Length: {len(prompt)}")
            
            response = self.model.generate_content(prompt)
            
            if not response.text:
                print("LOG: LLM Empty Response for Summary")
                raise ValueError("Empty response")
                
            print(f"LOG: Summary Generated (Length: {len(response.text)})")
            return response.text.strip()
            
        except Exception as e:
            print(f"LOG: Error generating counselor summary: {e}")
            if hasattr(e, 'response'): 
                 print(f"LOG: Block Reason: {e.response.prompt_feedback}")
            return self._fallback_summary(safe, moderate, ambitious)
    
    def generate_followup_response(
        self,
        rank: int,
        category: str,
        user_query: str,
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """
        Generate contextual follow-up responses to user questions.

        Args:
            rank: User's JEE Advanced rank
            category: Category (GEN, OBC, SC, ST, EWS)
            user_query: User's follow-up question
            safe: List of safe recommendations
            moderate: List of moderate recommendations
            ambitious: List of ambitious recommendations

        Returns:
            Contextual response string
        """
        if not self.enabled:
            return "I understand your question. Based on your rank and category, I can help you explore your options further. Feel free to ask about branch preferences, risk assessment, or specific colleges."

        try:
            prompt = self._build_followup_prompt(rank, category, user_query, safe, moderate, ambitious)
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception as e:
            print(f"Error generating follow-up response: {e}")
            return "I understand you're asking about that aspect of your options. Based on your profile, I recommend focusing on your safe options while keeping moderate choices as realistic targets. Would you like me to elaborate on any specific area?"

    def generate_full_report(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """
        Generate Layer 3: Detailed counseling report with reasoning.
        
        Args:
            rank: User's JEE Advanced rank
            category: Category (GEN, OBC, SC, ST, EWS)
            query: Optional user query
            safe: List of safe recommendations
            moderate: List of moderate recommendations
            ambitious: List of ambitious recommendations
        
        Returns:
            Detailed counseling report string
        """
        if not self.enabled:
            print("LOG: LLM not enabled/configured. Using fallback report.")
            return self._fallback_full_report(rank, category, query, safe, moderate, ambitious)
        
        try:
            print(f"LOG: Attempting LLM generation for Rank {rank}...")
            prompt = self._build_full_report_prompt(rank, category, query, safe, moderate, ambitious)
            print(f"LOG: Full Report Prompt Length: {len(prompt)}")
            
            response = self.model.generate_content(prompt)
            
            # Check for safety blocking or empty response
            try:
                text = response.text.strip()
            except ValueError:
                # response.text raises ValueError if the response was blocked by safety filters
                print("LOG: LLM response blocked by safety filters. Using fallback.")
                if hasattr(response, 'prompt_feedback'):
                    print(f"LOG: Block Reason: {response.prompt_feedback}")
                return self._fallback_full_report(rank, category, query, safe, moderate, ambitious)
                
            if not text:
                print("LOG: LLM returned empty text. Using fallback.")
                return self._fallback_full_report(rank, category, query, safe, moderate, ambitious)
                
            print(f"LOG: Successfully generated report via LLM. Length: {len(text)}")
            return text
            
        except Exception as e:
            print(f"LOG: Error generating full report: {e}. Using fallback.")
            return self._fallback_full_report(rank, category, query, safe, moderate, ambitious)
    
    def _build_summary_prompt(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Build prompt for Layer 1: Counselor Summary (brief)."""

        safe_count = len(safe)
        moderate_count = len(moderate)
        ambitious_count = len(ambitious)

        user_query_context = ""
        if query:
            user_query_context = f"\nUser Query: {query}\n"

        prompt = f"""You are an experienced IIT admission counselor speaking directly to a student. Provide a brief, reassuring summary that reduces anxiety and builds confidence.

Student Profile:
- JEE Advanced Rank: {rank}
- Category: {category}
{user_query_context}
Available Options:
- SAFE: {safe_count} options
- MODERATE: {moderate_count} options
- AMBITIOUS: {ambitious_count} options

REQUIREMENTS:
1. Write in natural, human counselor language (not robotic or AI-sounding)
2. Provide 3-5 short sentences that flow conversationally
3. Start with immediate clarity about their position
4. Mention all three categories (SAFE/MODERATE/AMBITIOUS) with realistic expectations
5. End with confidence-building encouragement
6. Use conversational tone like a real counselor: "I'm confident you'll get a great result", "Let's walk through your options step by step"
7. Do NOT list specific colleges or branches
8. Do NOT use bullet points or lists - just flowing sentences
9. Keep it to 10-15 seconds read time

Perfect Example:
"Based on your rank and category, you are in a solid position to secure admission in several IITs. You have strong SAFE options to ensure you get into a good program, a few realistic MODERATE choices, and limited but possible AMBITIOUS opportunities. Let me walk you through them step by step so you can make the best decisions."

Provide your counselor summary:"""

        return prompt

    def _build_followup_prompt(
        self,
        rank: int,
        category: str,
        user_query: str,
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Build prompt for follow-up responses."""

        safe_count = len(safe)
        moderate_count = len(moderate)
        ambitious_count = len(ambitious)

        # Get top 3 from each category for context
        top_safe = safe[:3]
        top_moderate = moderate[:3]
        top_ambitious = ambitious[:3]

        context_options = []
        if top_safe:
            context_options.append(f"Top SAFE: {', '.join([f'{item.iit} ({item.branch})' for item in top_safe])}")
        if top_moderate:
            context_options.append(f"Top MODERATE: {', '.join([f'{item.iit} ({item.branch})' for item in top_moderate])}")
        if top_ambitious:
            context_options.append(f"Top AMBITIOUS: {', '.join([f'{item.iit} ({item.branch})' for item in top_ambitious])}")

        context_str = "\n".join(context_options)

        prompt = f"""You are an experienced IIT admission counselor responding to a follow-up question from a student.

Student Profile:
- JEE Advanced Rank: {rank}
- Category: {category}
- Total Options: {safe_count} safe, {moderate_count} moderate, {ambitious_count} ambitious

Available Options Summary:
{context_str}

User Question: {user_query}

INSTRUCTIONS:
1. Provide a direct, helpful answer based on their specific situation
2. Reference their actual options when relevant (don't make up colleges)
3. Keep responses conversational and counselor-like
4. Be encouraging and realistic
5. If they ask about risks, emphasize the importance of safe backups
6. If they ask about branches, help them weigh preferences vs prestige
7. Keep responses to 3-4 sentences unless they need detailed explanation
8. End with a question to continue the conversation if appropriate

Respond as an experienced counselor would speak:"""

        return prompt

    def _build_full_report_prompt(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Build prompt for Layer 3: Full Counseling Report (detailed)."""

        # Format recommendations into readable text
        def format_list(items: List[RecommendationItem], label: str) -> str:
            if not items:
                return f"{label}: None available\n"

            lines = [f"{label} ({len(items)} options):"]
            for item in items:
                lines.append(
                    f"  - {item.iit} ({item.branch}): "
                    f"Closing Rank {item.closing_rank}"
                )
            return "\n".join(lines) + "\n"

        safe_text = format_list(safe, "SAFE")
        moderate_text = format_list(moderate, "MODERATE")
        ambitious_text = format_list(ambitious, "AMBITIOUS")

        user_query_context = ""
        if query:
            user_query_context = f"- Student Query (if any): {query}\n"

        prompt = f"""You are an experienced IIT JEE Advanced admission counselor with many years of counseling experience.
Your task is to generate a professional, detailed, and trustworthy IIT counseling report using ONLY the provided cutoff-based recommendations.

This report will be read by both students and parents, so it must be clear, calm, realistic, and authoritative.

---

### INPUT CONTEXT (Provided to You)
- Student Rank: {rank}
- Category: {category}
- Counseling Year: 2024
{user_query_context}
- SAFE Recommendations: {safe_text}
- MODERATE Recommendations: {moderate_text}
- AMBITIOUS Recommendations: {ambitious_text}

All college and branch options come from historical cutoff data.
DO NOT invent, assume, or suggest colleges or branches outside this data.

---

## REPORT REQUIREMENTS

Generate a **Full Counseling Report** with the following structure and headings.

---

### 1. Report Title
- Clear, professional title
Example:
"Personalized IIT JEE Advanced Counseling Report"

---

### 2. Student Profile Summary
Include:
- JEE Advanced Rank
- Category
- Counseling Year
- Student's stated preference (if query provided)

Keep it concise and factual.

---

### 3. Overall Admission Outlook
Explain:
- The student's overall admission standing
- Strength of SAFE, MODERATE, and AMBITIOUS opportunities
- Honest, realistic evaluation (no false hope)

Tone:
- Reassuring but practical

---

### 4. Recommendation Summary
Provide a quick snapshot:
- SAFE options: High probability
- MODERATE options: Medium probability
- AMBITIOUS options: Low probability but possible

Do not list colleges here — only summarize.

---

### 5. Detailed College & Branch Recommendations

Organize into three sections:

#### SAFE OPTIONS
For each recommendation:
- IIT Name
- Branch Name
- Closing Rank
- Brief reason why it is considered safe

#### MODERATE OPTIONS
For each recommendation:
- IIT Name
- Branch Name
- Closing Rank
- Explanation of risk vs reward

#### AMBITIOUS OPTIONS
For each recommendation:
- IIT Name
- Branch Name
- Closing Rank
- Clear explanation of why chances are lower and why it may still be considered

Limit verbosity but ensure clarity.

---

### 6. Branch vs IIT Trade-off Analysis
Explain:
- When branch preference should dominate
- When IIT reputation may matter more
- How this applies specifically to this student's rank and category

---

### 7. Counseling Strategy & Preference Filling Guidance
Provide actionable advice:
- How to order preferences
- How many SAFE / MODERATE / AMBITIOUS options to include
- Risk management approach during counseling rounds

---

### 8. Common Mistakes to Avoid
List 3–5 common mistakes students make at similar ranks and categories.

This section must be practical and cautionary.

---

### 9. Next Steps for the Student
Explain:
- How to use this report during counseling
- What to review before each counseling round
- Encourage informed and calm decision-making

---

### 10. Disclaimer
Include a short disclaimer:
- Recommendations are based on historical cutoff data
- Final outcomes depend on counseling dynamics and seat availability

---

## STYLE & RULES

- Write like a senior human counselor, not an AI
- Avoid over-motivation or pessimism
- Be professional, structured, and readable
- Do NOT reference data sources or internal logic
- Do NOT hallucinate colleges or branches
- Do NOT exceed necessary detail — value over length

---

Deliver the report as a clean, well-formatted document using clear headings and short paragraphs."""

        return prompt
    
    def _fallback_summary(
        self,
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Generate a fallback summary when LLM is not available."""
        safe_count = len(safe)
        moderate_count = len(moderate)
        ambitious_count = len(ambitious)
        
        if safe_count > 0 and moderate_count > 0:
            return f"At your rank and category, you have {safe_count} strong SAFE options, {moderate_count} realistic MODERATE choices, and {ambitious_count} AMBITIOUS opportunities. Focus on balancing SAFE backups with MODERATE targets in your JOSAA choices."
        elif safe_count > 0:
            return f"You have {safe_count} SAFE options available. This gives you a solid foundation for your JOSAA counseling strategy."
        else:
            return f"You have {moderate_count} MODERATE and {ambitious_count} AMBITIOUS options. Consider a strategic approach with clear preferences."

    def _fallback_full_report(
        self,
        rank: int,
        category: str,
        query: Optional[str],
        safe: List[RecommendationItem],
        moderate: List[RecommendationItem],
        ambitious: List[RecommendationItem]
    ) -> str:
        """Call the deterministic fallback report generator."""
        return generate_fallback_report(rank, category, query, safe, moderate, ambitious)

    def generate_chat_response(
        self,
        rank: int,
        category: str,
        message: str,
        history_str: str,
        recommendations: RecommendationResponse
    ) -> str:
        """
        Generate a conversational response maintaining context.
        """
        print(f"LOG: Generating chat response for query: '{message}'")
        
        if not self.enabled:
            print("LOG: LLM disabled (no API Key). Using fallback.")
            return "I apologize, but my AI capabilities are currently unavailable. I can still help you review your safe, moderate, and ambitious options if you navigate back to the report."
            
        try:
            # summarize options for context
            safe_summary = ", ".join([f"{i.iit} {i.branch}" for i in recommendations.safe[:3]])
            mod_summary = ", ".join([f"{i.iit} {i.branch}" for i in recommendations.moderate[:3]])
            amb_summary = ", ".join([f"{i.iit} {i.branch}" for i in recommendations.ambitious[:3]])
            
            prompt = f"""You are an expert IIT JEE admission counselor having a continuous conversation with a student.
            
Student Profile:
- Rank: {rank}
- Category: {category}

Current Recommendations Context:
- Top Safe Options: {safe_summary}... ({len(recommendations.safe)} total)
- Top Moderate Options: {mod_summary}... ({len(recommendations.moderate)} total)
- Top Ambitious Options: {amb_summary}... ({len(recommendations.ambitious)} total)

Recent Conversation History:
{history_str}

User's New Message: {message}

INSTRUCTIONS:
1. Answer the user's question directly based on the context provided.
2. Refer back to the specific colleges mentioned in the recommendations if relevant.
3. Be professional, encouraging, and realistic.
4. If the user asks for a comparison, compare based on general reputation and the specific data provided.
5. Do NOT generate a new full report. Just answer the specific question.
6. Keep the tone conversational.

Response:"""
            
            print(f"LOG: Sending Prompt to LLM (Length: {len(prompt)})")
            response = self.model.generate_content(prompt)
            
            if not response.text:
                print("LOG: LLM returned empty text.")
                raise ValueError("Empty LLM response")
                
            print(f"LOG: LLM Response received (Length: {len(response.text)})")
            return response.text.strip()
            
        except Exception as e:
            print(f"LOG: Error generating chat response: {e}")
            if hasattr(e, 'response'): # Check for safety blocks
                print(f"LOG: Block Reason: {e.response.prompt_feedback}")
            
            # Simple rule-based fallback if LLM fails
            msg_lower = message.lower()
            if "safe" in msg_lower:
                top_safe = recommendations.safe[:3]
                names = ", ".join([i.iit for i in top_safe])
                return f"Regarding your safe options, {names} are strong choices based on previous years' cutoffs. They offer a high probability of admission."
            elif "moderate" in msg_lower:
                top_mod = recommendations.moderate[:3]
                names = ", ".join([i.iit for i in top_mod])
                return f"Your moderate options like {names} are good targets. You have a fair chance, but it depends on this year's demand."
            elif "ambitious" in msg_lower:
                return "Ambitious options are those where your rank is slightly below the cutoff. Put them at the top of your preference list just in case."
            elif "branch" in msg_lower:
                return "When choosing a branch, prioritize your interest. If you want a specific career path (like CS), value the branch. If you are undecided, a better IIT might offer more exposure."
            
            return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please refer to the detailed table in the Full Report for specific closing ranks."
