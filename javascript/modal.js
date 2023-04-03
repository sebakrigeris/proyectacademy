const spans = document.querySelectorAll('span[data-modal]');
const modals = document.querySelectorAll('dialog');

spans.forEach((span) => {
    span.addEventListener('click', () => {
    const modalId = span.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.showModal();
    });
});

modals.forEach((modal) => {
    const closeButton = modal.querySelector('.btn-cerrar');
    closeButton.addEventListener('click', () => {
    modal.close();
    });
});





// const btnAbrirModal = document.querySelector("#btn-abrir-modal");
// const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
// const modal = document.querySelector("#modal");

// btnAbrirModal.addEventListener("click", ()=> {
//     modal.showModal();
// });


// btnCerrarModal.addEventListener("click", () => {
//     modal.close();
// });