let reps = 1;

// Para pruebas: enviar notificación cada minuto
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

// Recibe datos desde index.html
self.addEventListener("message", e => {
  if (e.data.type === "CONFIG") {
    reps = e.data.reps;
  }
});

// Enviar notificación cada minuto (para probar)
setInterval(() => {
  self.registration.showNotification("🔥 Reto Lagartijas 💪", {
    body: `Hoy te tocan ${reps} lagartijas. ¡Vamos!`,
    tag: "lagartijas-diario",
    renotify: true
  });
}, 60000);
