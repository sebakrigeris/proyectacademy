const spans = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('dialog');

spans.forEach((span) => {
    span.addEventListener('click', () => {
    const modalId = span.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.showModal();
    modal.scrollTop = 0;
    });
});

modals.forEach((modal) => {
    const closeButton = modal.querySelector('.btn-cerrar');
    closeButton.addEventListener('click', () => {
    modal.close();
    });
});


modals.addEventListener('show', function() {
    modals.querySelector('h2').focus();
});