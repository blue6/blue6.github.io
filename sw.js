importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwatest",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2e23c3fca848e883036a.js",
    "revision": "4e39124ee0d379b315bbfd990030ab21"
  },
  {
    "url": "/_nuxt/layouts/default.95b734919effba774e92.js",
    "revision": "38fdf69f8375fb2f725c4a2c9fe9764d"
  },
  {
    "url": "/_nuxt/manifest.2da4f6ca7d283e7e5aca.js",
    "revision": "7eb7580b65490293750415390985d4e3"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/index.1b0d2fe74b013eb998ab.js",
    "revision": "24346ed0a3a81fb5028250a06b8d86f4"
  },
  {
    "url": "/_nuxt/vendor.a1c4c96b6b2d84e2b8bb.js",
    "revision": "c474236739d61d9ac778074f097d953a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

