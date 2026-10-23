-- Starter data model only. Configure RLS policies and server-side admin role checks
-- before enabling any CMS write API.
create table if not exists public.school_content (
 id uuid primary key default gen_random_uuid(),
 category text not null,
 title text not null,
 body text not null default '',
 locale text not null default 'en',
 academic_year text,
 published boolean not null default false,
 created_at timestamptz not null default now()
);
alter table public.school_content enable row level security;
-- No policies are installed: all client access is denied by default.
create table if not exists public.admin_activity (
 id uuid primary key default gen_random_uuid(),
 actor_id uuid,
 action text not null,
 created_at timestamptz not null default now()
);
alter table public.admin_activity enable row level security;
