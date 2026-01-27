
from app.core.database import SessionLocal, engine
from sqlalchemy import text

def migrate_db():
    print("Running migration to add source_type column to sessions table...")
    try:
        with engine.connect() as connection:
            # Check if column exists
            result = connection.execute(text(
                "SELECT column_name FROM information_schema.columns WHERE table_name='sessions' AND column_name='source_type';"
            ))
            if result.fetchone():
                print("Column 'source_type' already exists.")
            else:
                print("Adding 'source_type' column...")
                connection.execute(text("ALTER TABLE sessions ADD COLUMN source_type VARCHAR DEFAULT 'jee_advanced';"))
                connection.commit()
                print("Migration successful: Added 'source_type' column.")
    except Exception as e:
        print(f"Migration failed: {e}")

if __name__ == "__main__":
    migrate_db()
