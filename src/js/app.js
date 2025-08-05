// Declaración de variables globales
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;
let deferredPrompt;
let BTN_INSTALL_APP;

// Funciones
const showPostModal = () => {
  MAIN.style.display = "none";
  MODAL_POST.style.display = "block";
  setTimeout(() => {
    MODAL_POST.style.transform = "translateY(0)";
  }, 1);
};

const closePostModal = () => {
  MAIN.style.display = "block";
  MODAL_POST.style.transform = "translateY(100vh)";
};

// Evento para manejar la instalación de la PWA
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("Evento por defecto anulado");
  e.preventDefault();
  deferredPrompt = e;
});

// Cuando se carga el DOM (ahora como función async)
window.addEventListener("load", async () => {
  MAIN = document.querySelector("#main");
  MODAL_POST = document.querySelector("#modal-post-section");
  BTN_SHOW_POST = document.querySelector("#btn-upload-post");
  BTN_SHOW_POST.addEventListener("click", showPostModal);
  BTN_CANCEL_POST = document.querySelector("#btn-post-cancel");
  BTN_CANCEL_POST.addEventListener("click", closePostModal);

  // Registro del Service Worker
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registrado correctamente", reg);
    } catch (err) {
      console.error("Error al registrar Service Worker:", err);
    }
  }

  // Instalación de la app (botón personalizado)
  const bannerInstall = document.querySelector("#banner-install");
  if (bannerInstall) {
    bannerInstall.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const response = await deferredPrompt.userChoice;
        if (response.outcome === "accepted") {
          console.log("Usuario aceptó la instalación de la PWA");
        } else {
          console.log("Usuario rechazó la instalación de la PWA");
        }
        deferredPrompt = null;
      }
    });
  }
});
