// Cliente Supabase do English Toolkit.
// A chave abaixo é publicável e segura para uso no navegador; o acesso aos dados
// é protegido pelas políticas de Row Level Security do projeto.
export const SUPABASE_URL = 'https://chlehxsehfwmjbhnmgsl.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_dnvuapoWXSfOyE9EEAMoOA_BS2GicoQ';

export const SUPABASE_CONFIGURED = true;

let _client = null;

export function getSupabaseClient() {
  if (typeof window === 'undefined' || !window.supabase) return null;
  if (!_client) {
    _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _client;
}

export function hasLikelyCachedSession() {
  try {
    return Object.keys(localStorage).some(
      (key) => key.startsWith('sb-') && key.endsWith('-auth-token')
    );
  } catch (_error) {
    return false;
  }
}
