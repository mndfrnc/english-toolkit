// Service worker mínimo: só habilita "Adicionar à tela inicial" (PWA instalável).
// Sem cache agressivo — sempre busca a rede primeiro, para nunca servir uma versão
// desatualizada do conteúdo/lições.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
