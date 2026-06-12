const cacheName = 'mastercode-pwa-v1';

// Événement d'installation : Mise en cache des ressources critiques
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

// Événement de récupération (Fetch) : Stratégie Cache-First avec repli réseau
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
