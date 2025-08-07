self.addEventListener("install", (event)=>{
  console.log("Almacenando archivos en caché... ESPE")
  const WU = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const addFiles = "";
        console.log("ESPE Service Worker installed");
        resolve();
      }, 1000);
      self.skipWaiting(); // Forzar la activación inmediata del SW
    } catch (error) {
      reject(error);
    }
  })
  event.waitUntil(WU);  
})

self.addEventListener("activate", (event)=>{
  console.log("Service Worker activado");
  event.waitUntil(clients.claim());
})

self.addEventListener("fetch", (event)=>{
  console.log("Service Worker recibiendo una solicitud");
  console.log(event.request.url);

})