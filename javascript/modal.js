const spans = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('dialog');

spans.forEach((span) => {
    span.addEventListener('click', () => {
    const modalId = span.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.showModal();
    modal.scrollTop = 0;

    modal.addEventListener('show', function() {
        setTimeout(() => {
        modal.querySelector('h2').focus();
        }, 50);
        });
    });
});

modals.forEach((modal) => {
    const closeButton = modal.querySelector('.btn-cerrar');
    closeButton.addEventListener('click', () => {
    modal.close();
    });
});
