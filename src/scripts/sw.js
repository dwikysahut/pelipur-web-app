/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

import API_ENDPOINT from './globals/api-endpoint';
import CONFIG from './globals/config';

/* eslint-disable no-restricted-globals */
// const { assets } = global.serviceWorkerOption;

// self.addEventListener('install', (event) => {
//   self.skipWaiting();
//   console.log('Installing service worker...');
//   event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
// });

// self.addEventListener('activate', (event) => {
//   console.log('activating service worker');
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//   console.log(event.request);
//   // if (event.request.method === 'POST') {
//   //   event.respondWith(CacheHelper.deleteOldCache());
//   // }
//   event.respondWith(CacheHelper.revalidateCache(event.request));
// });

// /* eslint-disable no-undef */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

console.log('hello, from service worker');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

if (workbox) console.log('Yay! Workbox is loaded 🎉');
else console.log('Boo! Workbox didn\'t load');

workbox.core.setCacheNameDetails({
  prefix: 'Pelipur-PWA',
  precache: 'precache',
  runtime: 'runtime',
});

// eslint-disable-next-line no-restricted-globals
if (process.env.NODE_ENV === 'production') {
  precacheAndRoute(self.__WB_MANIFEST);
}

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp(`^${CONFIG.BASE_IMAGE_URL}`),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'pelipur-images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200, 404],
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  new RegExp(`^${CONFIG.BASE_URL}`),
  new workbox.strategies.NetworkFirst({
    cacheName: 'pelipur-data',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200, 404],
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  new RegExp(`^${CONFIG.BASE_URL}${API_ENDPOINT.GET_PARTNERS}`),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'pelipur-partner',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200, 404],
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  new RegExp(`^${CONFIG.BASE_URL}${API_ENDPOINT.GET_ALL_NEWS}`),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'pelipur-news',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200, 404],
      }),
    ],
  }),
);
// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Menyimpan cache dari font awesome
workbox.routing.registerRoute(
  /^https:\/\/kit\.fontawesome\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'font-awesome',
  }),
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.precaching.cleanupOutdatedCaches();
