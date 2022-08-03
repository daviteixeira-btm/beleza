var myCacheName = 'comoserumamanicure-cache-v1';

//Adding `install` event listener
window.self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('myCacheName')
      .then((cache) => {
        return cache.addAll([
          './',
          './public/index.html',
          './public/favicon_io/',
          './src/imgages/',
          './src/sw.js',
          './src/App.css',
          './src/App.js',
          './src/index.js'
        ]);
      })
    );
  });

  window.self.addEventListener('activate', (event) => {
  const cacheWhiteList = ['pwa-task-manager'];
  event.waitUntil(caches.keys()
    .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
      if (cacheWhiteList.indexOf(cacheName) === -1) {
        return caches.delete(cacheName);
      }
      return null
    })))
  )
});

window.self.addEventListener('fetch', (event) => {
  event.respondWith(caches.open(myCacheName)
    .then((cache) => cache.match(event.request)
      .then((response) => response || fetch(event.request)
        .then((res) => {
          cache.put(event.request, res.clone());
          return res;
        })
      )
    )
  )
});