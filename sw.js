const CACHE='ikhe-ficha-viva-v03-github';
const ASSETS=['./', './index.html', './loader.js', './manifest.webmanifest', './assets/icon.svg', './bundle/chunk-01.js', './bundle/chunk-02.js', './bundle/chunk-03.js', './bundle/chunk-04.js', './bundle/chunk-05.js', './bundle/chunk-06.js', './bundle/chunk-07.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});
