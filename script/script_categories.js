import data from '../JSON/games.json' with { type: 'json' }; // Importar el archivo JSON

// Seleccionar los contenedores por categoría
const racingContainer = document.getElementById('racing-container');
const sportsContainer = document.getElementById('sports-container');
const openWorldContainer = document.getElementById('openworld-container');
const storyContainer = document.getElementById('story-container');
const shootersContainer = document.getElementById('shooters-container');

// Función principal para cargar los juegos
data.categories.forEach(category => {
    const container = getContainerByCategory(category.category); // Obtener el contenedor adecuado
    category.games.slice(0, 5).forEach(game => { // Limitar a 5 juegos por categoría
        container.appendChild(createGameCard(game));
    });
});

// Función para obtener el contenedor adecuado
function getContainerByCategory(category) {
    switch (category) {
        case 'Racing': return racingContainer;
        case 'Sports': return sportsContainer;
        case 'Open World': return openWorldContainer;
        case 'Story Mode': return storyContainer;
        case 'Shooters': return shootersContainer;
        default: return null;
    }
}

// Función para crear una tarjeta de juego
function createGameCard(game) {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const img = document.createElement('img');
    img.src = game.cover_image;
    img.alt = game.name;
    img.classList.add('game-cover');

    const title = document.createElement('h3');
    title.textContent = game.name;

    // Hacer la tarjeta clickeable
    card.addEventListener('click', () => {
        localStorage.setItem('selectedGame', JSON.stringify(game)); // Guardar datos en localStorage
        window.location.href = '../html/game.html'; // Redirigir a game.html
    });

    card.appendChild(img);
    card.appendChild(title);
    return card;
}

// Seleccionar el botón de Log In por su ID
const loginButton = document.getElementById('login-btn');
const singupButton = document.getElementById('signup-btn');

// Agregar un evento de clic al botón
loginButton.addEventListener('click', () => {
    // Redirigir a la ruta /html/login.html
    window.location.href = 'login.html';
});
singupButton.addEventListener('click', () => {
    // Redirigir a la ruta /html/signup.html
    window.location.href = 'signup.html';
});