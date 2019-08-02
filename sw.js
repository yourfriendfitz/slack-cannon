/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.png",
    "revision": "7b31166b85c05cadfd38f45ed9b1757a"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "82eac8ff5ddc783cc5a377363649e39b"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b86720827fde71c5f95251080deefe66"
  },
  {
    "url": "browserconfig.xml",
    "revision": "7783e67b77a1ba852a9ecc2220066ffd"
  },
  {
    "url": "cannon-white-logo.png",
    "revision": "e2e65c340823307c3cb45a741abac7d3"
  },
  {
    "url": "events.html",
    "revision": "3e081a6d37978b00a63d3160644208bb"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "db1c6d21f611fc83e0bc3ac723e535cc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b688fb56f3bede7a7a2519d22a002fa7"
  },
  {
    "url": "favicon.ico",
    "revision": "daa344fc162f0499515a22de03d64cca"
  },
  {
    "url": "firebaseui.css",
    "revision": "991265319c2f4f01027b6455deca441d"
  },
  {
    "url": "global.html",
    "revision": "6f2cb79d6e66f598365ec198ce202248"
  },
  {
    "url": "global.js",
    "revision": "98dcd8295246454a7f73fe6d0fe6081b"
  },
  {
    "url": "index.html",
    "revision": "7eeaaa99aa0f8f6343d129e7eb51e465"
  },
  {
    "url": "login.html",
    "revision": "2cc861d44acfb4b14e08d12422329bab"
  },
  {
    "url": "login.js",
    "revision": "b3813ada64df239088a41d7f9006f53b"
  },
  {
    "url": "loginSignUp.css",
    "revision": "ec52e13901c16a069a80f2ab1edb445d"
  },
  {
    "url": "loginSignUp.scss",
    "revision": "c6b3222de676aebefe1c71ad8a305a5f"
  },
  {
    "url": "map.html",
    "revision": "cdbb329a09a2897f2591ba6b9044fc19"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "d4fee4d7294480f9469f302099c514db"
  },
  {
    "url": "new-global.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "README.md",
    "revision": "657e3bb66540c170278f286ef8a14c8e"
  },
  {
    "url": "rulesForDatabase.md",
    "revision": "afc35d249eebeb941392a87b3b8316b6"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "48e313fd784cc4bd552e4131ab4c191e"
  },
  {
    "url": "scripts.js",
    "revision": "d1bf5986cc5cd833f32542b1cd613aa2"
  },
  {
    "url": "site.webmanifest",
    "revision": "5ade34f443073627e5f29ed5c1360ed7"
  },
  {
    "url": "slack-cannon-screen.png",
    "revision": "28dd72ca79052d084fe4e063b82863d1"
  },
  {
    "url": "styles.css",
    "revision": "3ec1ee72179c37bb7f4331bd47f19f3e"
  },
  {
    "url": "styles.scss",
    "revision": "0b24cc7c6b369de77cefecf904d57686"
  },
  {
    "url": "support.html",
    "revision": "3e081a6d37978b00a63d3160644208bb"
  },
  {
    "url": "ui-styles.css",
    "revision": "ce7fda3abf8a9686cba6405645757516"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
