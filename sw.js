const cacheName = 'mastercode-pwa-v1';

// Installation : Mise en cache locale obligatoire
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

// Interception des requêtes : Stratégie Cache-First
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
