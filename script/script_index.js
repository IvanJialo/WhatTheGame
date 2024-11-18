// URLs de los diferentes GIFs
const backgrounds = [
    "../img/background1.gif",
    "../img/background2.gif",
    "../img/background3.gif"
];

// Selecciona el main
const main = document.querySelector("main");

// Cambia el fondo al azar cada vez que se carga la página
function setRandomBackground() {
    // Selecciona un índice aleatorio del array
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    
    // Establece el fondo del main
    main.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

// Ejecuta la función cuando se carga la página
window.addEventListener("load", setRandomBackground);

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

