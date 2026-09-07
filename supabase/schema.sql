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

create index if not exists idx_results_student_id on public.results(student_id);
create index if not exists idx_results_term on public.results(term);
create index if not exists idx_results_session on public.results(session_year);

alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.results enable row level security;
alter table public.subjects enable row level security;

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

create policy "Profiles visible to owner or admin"
on public.profiles
for select
using (
  auth.uid() = id
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

create policy "Profiles editable by owner"
on public.profiles
for update
using (auth.uid() = id);

create policy "Students viewable by owner, teacher, or admin"
on public.students
for select
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Students insertable by teacher or admin"
on public.students
for insert
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Students updatable by teacher or admin"
on public.students
for update
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Subjects viewable by all authenticated users"
on public.subjects
for select
using (auth.role() = 'authenticated');

create policy "Subjects managed by teacher or admin"
on public.subjects
for all
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

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
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Results insertable by teacher or admin"
on public.results
for insert
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Results updatable by teacher or admin"
on public.results
for update
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('teacher', 'admin')
  )
);

create policy "Results deletable by admin"
on public.results
for delete
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);
