const staticGalaxyTraveler = "galaxy-Traveler-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/IMAGES/Andromeda.jpg",
  "/IMAGES/Antennae.jpg",
  "/IMAGES/Blackeyegalaxy.jpg",
  "/IMAGES/Cartwheel.jpg",
  "/IMAGES/Circinus.png",
  "/IMAGES/Comet.jpg",
  "/IMAGES/CR7.jpg",
  "/IMAGES/LargeWeb.jpg",
  "/IMAGES/Messier.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGalaxyTraveler).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })