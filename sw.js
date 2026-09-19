// PWA online: deixe o navegador acessar a rede diretamente, inclusive o Supabase.
// Não intercepte requisições nem procure respostas de autenticação no cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
