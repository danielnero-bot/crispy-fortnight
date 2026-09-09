create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  class_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  admission_no text unique,
  full_name text not null,
  class_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  class_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  student_name text not null,
  subject text not null,
  term text not null,
  session_year text not null,
  ca_score numeric not null default 0,
  exam_score numeric not null default 0,
  total numeric not null default 0,
  grade text not null,
  remark text,
  teacher_id uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.admissions (
  id uuid primary key default gen_random_uuid(),
  applicant_name text not null,
  application_id text not null unique,
  class_name text not null,
  category text,
  house text,
  assessment text,
  assessment_type text,
  status text not null default 'pending',
  sub_status text,
  created_at timestamptz not null default now()
);

create table if not exists public.boarding_houses (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  occupied integer not null default 0 check (occupied >= 0),
  capacity integer not null default 0 check (capacity >= 0),
  housemistress text,
  status text,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.academic_benchmarks (
  id uuid primary key default gen_random_uuid(),
  faculty text not null,
  class_name text not null,
  score numeric not null default 0,
  target numeric not null default 0,
  icon text,
  description text,
  highlight text,
  created_at timestamptz not null default now()
);

create table if not exists public.academic_diary (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  detail text not null,
  icon text default 'book',
  scheduled_for timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.security_audits (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  audit_status text,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_alerts (
  id uuid primary key default gen_random_uuid(),
  message text not null,
  severity text not null default 'info' check (severity in ('info', 'warning', 'critical')),
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_activity_log (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'activity',
  title text not null,
  description text,
  amount text,
  created_at timestamptz not null default now()
);

create table if not exists public.attendance_summaries (
  id uuid primary key default gen_random_uuid(),
  attendance_percent numeric not null default 0,
  ca_assessment_percent numeric not null default 0,
  recorded_on date not null default current_date,
  created_at timestamptz not null default now()
);

create table if not exists public.fee_payments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.students(id) on delete set null,
  amount numeric not null default 0,
  status text not null default 'pending' check (status in ('pending', 'paid', 'overdue')),
  due_date date,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_results_student_id on public.results(student_id);
create index if not exists idx_results_term on public.results(term);
create index if not exists idx_results_session on public.results(session_year);
create index if not exists idx_admissions_status on public.admissions(status);
create index if not exists idx_admin_alerts_resolved on public.admin_alerts(resolved);
create index if not exists idx_activity_created_at on public.admin_activity_log(created_at);

alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.results enable row level security;
alter table public.subjects enable row level security;
alter table public.admissions enable row level security;
alter table public.boarding_houses enable row level security;
alter table public.academic_benchmarks enable row level security;
alter table public.academic_diary enable row level security;
alter table public.security_audits enable row level security;
alter table public.admin_alerts enable row level security;
alter table public.admin_activity_log enable row level security;
alter table public.attendance_summaries enable row level security;
alter table public.fee_payments enable row level security;

create or replace function public.current_profile_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'admissions', 'boarding_houses', 'academic_benchmarks', 'academic_diary',
    'security_audits', 'admin_alerts', 'admin_activity_log',
    'attendance_summaries', 'fee_payments'
  ] loop
    execute format('drop policy if exists "Admins manage %1$s" on public.%1$s', table_name);
    execute format('create policy "Admins manage %1$s" on public.%1$s for all using (public.current_profile_role() = ''admin'') with check (public.current_profile_role() = ''admin'')', table_name);
  end loop;
end $$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'role', 'student')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

drop policy if exists "Profiles visible to owner or admin" on public.profiles;
create policy "Profiles visible to owner or admin"
on public.profiles
for select
using (
  auth.uid() = id
  or public.current_profile_role() = 'admin'
);

drop policy if exists "Profiles editable by owner" on public.profiles;
create policy "Profiles editable by owner"
on public.profiles
for update
using (auth.uid() = id);

drop policy if exists "Students viewable by owner, teacher, or admin" on public.students;
create policy "Students viewable by owner, teacher, or admin"
on public.students
for select
using (
  auth.uid() = user_id
  or public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Students insertable by teacher or admin" on public.students;
create policy "Students insertable by teacher or admin"
on public.students
for insert
with check (
  public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Students updatable by teacher or admin" on public.students;
create policy "Students updatable by teacher or admin"
on public.students
for update
using (
  public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Subjects viewable by all authenticated users" on public.subjects;
create policy "Subjects viewable by all authenticated users"
on public.subjects
for select
using (auth.role() = 'authenticated');

drop policy if exists "Subjects managed by teacher or admin" on public.subjects;
create policy "Subjects managed by teacher or admin"
on public.subjects
for all
using (
  public.current_profile_role() in ('teacher', 'admin')
)
with check (
  public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Results viewable by student or teacher/admin" on public.results;
create policy "Results viewable by student or teacher/admin"
on public.results
for select
using (
  auth.uid() = (
    select s.user_id
    from public.students s
    where s.id = public.results.student_id
  )
  or exists (
    select 1 where public.current_profile_role() in ('teacher', 'admin')
  )
);

drop policy if exists "Results insertable by teacher or admin" on public.results;
create policy "Results insertable by teacher or admin"
on public.results
for insert
with check (
  public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Results updatable by teacher or admin" on public.results;
create policy "Results updatable by teacher or admin"
on public.results
for update
using (
  public.current_profile_role() in ('teacher', 'admin')
);

drop policy if exists "Results deletable by admin" on public.results;
create policy "Results deletable by admin"
on public.results
for delete
using (
  public.current_profile_role() = 'admin'
);
