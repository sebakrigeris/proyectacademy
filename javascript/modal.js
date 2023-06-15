
document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('button[data-modal]');
    const modals = document.querySelectorAll('dialog');

    spans.forEach((span) => {
    span.addEventListener('click', () => {
        const modalId = span.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.showModal();

        modal.addEventListener('show', () => {
        modal.scrollTop = 0;
        modal.querySelector('h2').focus();
        });
    });
    });

    modals.forEach((modal) => {
    const closeButton = modal.querySelector('.btn-cerrar');
    closeButton.addEventListener('click', () => {
        modal.close();
    });
    });
});





// const spans = document.querySelectorAll('button[data-modal]');
// const modals = document.querySelectorAll('dialog');

// spans.forEach((span) => {
//     span.addEventListener('click', () => {
//     const modalId = span.dataset.modal;
//     const modal = document.getElementById(modalId);
//     modal.showModal();
//     modal.scrollTop = 0;

//     modal.addEventListener('show', function() {
//         modal.querySelector('h2').focus();
//     });

//     });
// });

// modals.forEach((modal) => {
//     const closeButton = modal.querySelector('.btn-cerrar');
//     closeButton.addEventListener('click', () => {
//     modal.close();
//     });
// });
