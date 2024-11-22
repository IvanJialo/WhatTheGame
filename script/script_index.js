// URLs de los diferentes GIFs
const backgrounds = [
    "../img/background1.gif",
    "../img/background2.gif",
    "../img/background3.gif"
];

// Selecciona el main
const main = document.querySelector("main");

// Seleccionar los botones de Log In y Sign Up por sus IDs
const loginButton = document.getElementById('login-btn');
const signupButton = document.getElementById('signup-btn');

// Redirección al hacer clic en los botones
loginButton.addEventListener('click', () => {
    window.location.href = '/html/login.html';
});

signupButton.addEventListener('click', () => {
    window.location.href = '/html/signup.html';
});

// Cambia el fondo al azar cada vez que se carga la página
function setRandomBackground() {
    // Selecciona un índice aleatorio del array
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    
    // Establece el fondo del main
    main.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

// Ejecuta la función cuando se carga la página
window.addEventListener("load", setRandomBackground);

const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keydown', (event) => {
    console.log("Tecla presionada: ", event.key);  // Para depuración
    if (event.key === 'Enter') {  // Detectar si se presiona Enter
        const query = searchInput.value.trim();  // Obtener el texto ingresado y eliminar espacios
        if (query) {  // Si no está vacío
            window.location.href = `/html/game.html?title=${encodeURIComponent(query)}`;
        }
    }
});
