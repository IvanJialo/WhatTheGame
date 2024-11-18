// Seleccionar el botón de Log In por su ID
const loginButton = document.getElementById('login-btn');
const singupButton = document.getElementById('signup-btn');

// Agregar un evento de clic al botón
loginButton.addEventListener('click', () => {
    // Redirigir a la ruta /html/login.html
    window.location.href = '/html/login.html';
});
singupButton.addEventListener('click', () => {
    // Redirigir a la ruta /html/signup.html
    window.location.href = '/html/signup.html';
});