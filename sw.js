/* 拾声 XianDial 的 Service Worker
   ──────────────────────────────────────────────────────
   只管一件事：把页面本体与图标缓存下来，好让「装到桌面」之后
   断网也能打开界面（收藏、自建台、拾藏都在本地，本来就不需要网）。

   两条铁律：
   ① 电台的流一律不碰 —— 只处理同源请求，跨域的直播流直接放过。
   ② 网络优先，不是缓存优先 —— 否则改完推上去，用户还一直看旧版。
   ────────────────────────────────────────────────────── */
var CACHE = 'xiandial-v1';
var ASSETS = [
  './index.html',
  './web/XianDial.html',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (a) {
        return c.add(a).catch(function () { });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var u;
  try { u = new URL(req.url); } catch (err) { return; }
  if (u.origin !== self.location.origin) return;   // 电台直播流：不缓存、不拦截

  e.respondWith(
    fetch(req).then(function (r) {
      if (r && r.ok && r.type === 'basic') {
        var cp = r.clone();
        caches.open(CACHE).then(function (c) { c.put(req, cp); });
      }
      return r;
    }).catch(function () {
      return caches.match(req).then(function (m) {
        return m || caches.match('./index.html');
      });
    })
  );
});
