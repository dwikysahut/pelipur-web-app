/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

/* eslint-disable no-restricted-globals */
const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Installing service worker...');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('activating service worker');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
