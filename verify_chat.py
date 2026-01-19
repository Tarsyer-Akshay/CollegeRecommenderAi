import requests
import json
import time

BASE_URL = "http://127.0.0.1:8000/api/chat"

def run_verification():
    print("--- Verifying Session-Based Chat ---")
    
    # 1. Start Session
    print("\n1. Starting new session...")
    start_payload = {
        "rank": 4000,
        "category": "GEN",
        "year": 2024
    }
    
    try:
        resp = requests.post(f"{BASE_URL}/start", json=start_payload)
        if resp.status_code != 200:
            print(f"FAILED: Start session returned {resp.status_code}")
            print(resp.text)
            return
            
        session_data = resp.json()
        session_id = session_data["session_id"]
        safe_count = len(session_data["recommendations"]["safe"])
        print(f"SUCCESS: Session started. ID: {session_id}")
        print(f"Initial Safe Options: {safe_count}")
        print(f"Counselor Summary: {session_data['recommendations']['counselor_summary'][:100]}...")
        
    except Exception as e:
        print(f"ERROR: Could not connect to backend: {e}")
        return

    # 2. Update State (Simulate frontend flow)
    # The start endpoint already sets state to SUMMARY_SHOWN
    
    # 3. Send Follow-up Message
    print("\n2. Sending follow-up: 'Which of the safe options is best for CS?'")
    msg_payload = {"message": "Which of the safe options is best for CS?"}
    
    try:
        resp = requests.post(f"{BASE_URL}/{session_id}/message", json=msg_payload)
        if resp.status_code != 200:
            print(f"FAILED: Send message returned {resp.status_code}")
            return
            
        chat_resp = resp.json()
        print(f"SUCCESS: Received response.")
        print(f"Counselor Response: {chat_resp['message'][:200]}...")
        
        # Verify Context Awareness check
        # The response should ideally mention one of the safe colleges
        safe_colleges = [item['iit'] for item in session_data["recommendations"]["safe"]]
        print(f"\nVerifying context (Checking if response mentions known safe IITs)...")
        found_match = any(college in chat_resp['message'] for college in safe_colleges)
        
        if found_match:
            print("PASS: Response references specific recommended colleges.")
        else:
            print("WARNING: Response might be generic. Check content manually.")
            
    except Exception as e:
        print(f"ERROR: {e}")


if __name__ == "__main__":
    import sys
    # Redirect stdout to a file
    with open("verify_output.txt", "w", encoding="utf-8") as f:
        sys.stdout = f
        run_verification()
        sys.stdout = sys.__stdout__
