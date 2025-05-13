document.addEventListener('DOMContentLoaded', function() {
    const gestionButton = document.getElementById('gestion-button');
    const modal = document.getElementById('modal-confirmacion');
    const confirmarButton = document.getElementById('confirmar-button');
    const cancelarButton = document.getElementById('cancelar-button');
    const closeButton = document.querySelector('.close-button');

    gestionButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección inmediata
        modal.style.display = 'block';
    });

    confirmarButton.addEventListener('click', function() {
        window.location.href = 'https://accessgate.onrender.com/'; // Redirige si se confirma
    });

    cancelarButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Cierra el modal
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Cierra el modal al hacer clic en la 'x'
    });

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});