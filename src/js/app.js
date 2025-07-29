// Declaración de variables globales
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;

// Funciones
const showPostModal = () => {
  MAIN.style.display = "none"; // Oculta el contenido principal
  MODAL_POST.style.display = "block"; // Muestra el modal
  setTimeout(() => {
    MODAL_POST.style.transform = "translateY(0)"; // Animación para mostrar el modal
  }, 1);
};

const closePostModal = () => {
  MAIN.style.display = "block";
  MODAL_POST.style.transform = "translateY(100vh)"; // Oculta el modal con animación
};

// Cuando se carga el DOM
window.addEventListener("load", () => {
  MAIN = document.querySelector("#main");
  MODAL_POST = document.querySelector("#modal-post-section");
  BTN_SHOW_POST = document.querySelector("#btn-upload-post");
  BTN_SHOW_POST.addEventListener("click", showPostModal); // Asigna el evento al botón de mostrar post
  BTN_CANCEL_POST = document.querySelector("#btn-post-cancel");
  BTN_CANCEL_POST.addEventListener("click", closePostModal); // Asigna el evento al botón de cerrar post
});
