// Simple Service Worker for SolFart Presale
// Forces users to always get the latest version

const CACHE_NAME = 'solfart-presale-v1.0.0'
const STATIC_CACHE = 'solfart-static-v1.0.0'

// Files to cache for offline functionality (minimal set)
const CACHE_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/assets/svg/solana.svg'
]

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching essential files')
        return cache.addAll(CACHE_FILES)
      })
      .catch((error) => {
        console.error('[SW] Failed to cache files:', error)
      })
  )
  
  // Force the service worker to become active immediately
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches that don't match current version
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
  )
  
  // Claim all clients immediately
  return self.clients.claim()
})

// Fetch event - network-first strategy for always fresh content
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') return
  
  // Skip cross-origin requests
  if (url.origin !== self.location.origin) return
  
  // Network-first strategy for HTML, JS, CSS
  if (
    request.destination === 'document' ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.html')
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // If network request succeeds, update cache and return response
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone)
              })
              .catch((error) => {
                console.warn('[SW] Failed to cache response:', error)
              })
          }
          return response
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                console.log('[SW] Serving from cache (offline):', request.url)
                return cachedResponse
              }
              // If not in cache, return a basic offline message for HTML requests
              if (request.destination === 'document') {
                return new Response(
                  '<h1>Offline</h1><p>Please check your internet connection.</p>',
                  { headers: { 'Content-Type': 'text/html' } }
                )
              }
              throw new Error('Resource not available offline')
            })
        })
    )
  } else {
    // For other resources (images, fonts, etc.), try cache first, then network
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          return cachedResponse || fetch(request)
            .then((response) => {
              if (response.ok) {
                const responseClone = response.clone()
                caches.open(STATIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseClone)
                  })
              }
              return response
            })
        })
    )
  }
})

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING message')
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})

// Notify clients when a new version is available
self.addEventListener('controllerchange', () => {
  console.log('[SW] Controller changed - new version active')
  
  // Notify all clients about the update
  self.clients.matchAll()
    .then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'NEW_VERSION_AVAILABLE',
          version: CACHE_NAME
        })
      })
    })
})

console.log('[SW] Service Worker script loaded')
