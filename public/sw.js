const CACHE_NAME = 'robo-ustoz-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png'
  // Agar darslaringiz PDF bo'lsa, ularni ham qo'shing, masalan:
  // '/1-qism.pdf', '/2-qism.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});