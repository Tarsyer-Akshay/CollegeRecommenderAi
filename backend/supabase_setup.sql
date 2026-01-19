-- 0. Cleanup existing objects to avoid errors on re-run
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop table if exists public.profiles;

-- 1. Create a table for public profiles
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  updated_at timestamp with time zone,
  full_name text,
  phone text,
  email text,
  
  primary key (id)
);

-- 2. Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- 3. Create policies
-- Public profiles are viewable by everyone (or just the user, change as needed)
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

-- Users can insert their own profile.
create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

-- Users can update own profile.
create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- 4. Create a Trigger to auto-create profile on signup
-- This function runs every time a new user is created in auth.users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, phone, email)
  values (
    new.id, 
    new.raw_user_meta_data ->> 'full_name', 
    new.raw_user_meta_data ->> 'phone',
    new.email
  );
  return new;
end;
$$;

-- Trigger the function on new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
