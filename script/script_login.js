// Seleccionar el logo por su ID
const logo = document.getElementById('home-logo');

// Agregar un evento de clic al logo
logo.addEventListener('click', () => {
    // Redirigir a ../index.html
    window.location.href = '../index.html';
});
