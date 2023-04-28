const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrir-nav");
const cerrarMenu = document.querySelector("#cerrar-nav");

abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
});


