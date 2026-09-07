-- Execute no SQL Editor do projeto English Toolkit antes de publicar a mudança
-- de index.html e store.js. Guarda as respostas da Jornada por conta e atividade.

create table public.journey_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  state_type text not null check (state_type in ('choice', 'true_false', 'reveal', 'production')),
  item_id text not null,
  value jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, state_type, item_id)
);

alter table public.journey_state enable row level security;

revoke all on table public.journey_state from anon;
revoke all on table public.journey_state from authenticated;
grant select, insert, update on table public.journey_state to authenticated;

create policy "read own journey state"
  on public.journey_state
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "insert own journey state"
  on public.journey_state
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "update own journey state"
  on public.journey_state
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- Não existe policy de DELETE: o aluno não pode apagar linhas pelo cliente.
