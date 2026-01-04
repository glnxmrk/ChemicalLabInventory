const CACHE_NAME = 'sjis-inventory-v1';
const assetsToCache = [
  './inventory.html',
  './manifest.json',
  './assets/beaker.png',
  './assets/microscope.png',
  './assets/warning.png',
  './assets/calendar.png',
  './assets/app-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
