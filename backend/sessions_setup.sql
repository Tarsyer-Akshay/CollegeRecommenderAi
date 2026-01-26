-- Create Sessions Table for Chat History Persistence

-- 1. Create table
create table if not exists public.sessions (
  session_id uuid not null primary key,
  user_id uuid references auth.users(id) on delete cascade,
  
  -- Core Fields
  rank integer,
  category text,
  year integer,
  state text, -- 'INITIAL', 'SUMMARY_SHOWN', 'REPORT_SHOWN'
  
  -- JSONB for rich data
  history jsonb default '[]'::jsonb,
  recommendations jsonb,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable RLS
alter table public.sessions enable row level security;

-- 3. Policies
-- Allow users to see only their own sessions
create policy "Users can view own sessions"
  on sessions for select
  using ( auth.uid() = user_id );

-- Allow users to insert own sessions
create policy "Users can create own sessions"
  on sessions for insert
  with check ( auth.uid() = user_id );

-- Allow users to update own sessions
create policy "Users can update own sessions"
  on sessions for update
  using ( auth.uid() = user_id );
