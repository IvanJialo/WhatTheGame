// Obtener datos del juego desde localStorage
const game = JSON.parse(localStorage.getItem('selectedGame'));

// Validar si hay datos disponibles
if (!game) {
    alert('No game data found.');
    window.location.href = '../html/categories.html'; // Redirigir a categorías si no hay datos
} else {
    // Insertar datos en el DOM
    document.getElementById('game-cover').src = game.cover_image;
    document.getElementById('game-cover').alt = game.name;
    document.getElementById('game-title').textContent = game.name;
    document.getElementById('game-description').textContent = game.description;
    document.getElementById('game-developer').textContent = game.developer;
    document.getElementById('game-publisher').textContent = game.publisher;
    document.getElementById('game-release').textContent = game.release_date;
    document.getElementById('game-platforms').textContent = game.platforms.join(', ');
    document.getElementById('game-playtime').textContent = `${game.average_playtime} hours`;
    document.getElementById('opinion-ign').textContent = game.opinions.IGN;
    document.getElementById('opinion-vandal').textContent = game.opinions.Vandal;
    document.getElementById('opinion-metacritic').textContent = game.opinions.Metacritic;

    // Precios
    const pricesContainer = document.getElementById('game-prices');
    pricesContainer.innerHTML = '<h3>Prices:</h3>';
    for (const [store, price] of Object.entries(game.prices)) {
        const priceElement = document.createElement('p');
        priceElement.textContent = `${store}: $${price}`;
        pricesContainer.appendChild(priceElement);
    }
}

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
