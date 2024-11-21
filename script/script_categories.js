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

// Lee el archivo JSON
fetch('../JSON/games.json')
  .then(response => response.json())
  .then(data => {
    // Obtiene los elementos de la categoría
    const racingContainer = document.querySelector('.games-container[data-category="racing"]');
    const sportsContainer = document.querySelector('.games-container[data-category="sports"]');
    const openWorldContainer = document.querySelector('.games-container[data-category="open-world"]');
    const storyContainer = document.querySelector('.games-container[data-category="story"]');
    const shootersContainer = document.querySelector('.games-container[data-category="shooters"]');

    // Función para crear un elemento de carátula de videojuego
    function createGameCover(game) {
      const cover = document.createElement('img');
      cover.src = game.cover_image;
      cover.alt = game.name;
      return cover;
    }

    // Inserta las carátulas de los videojuegos en cada categoría
    data.games.forEach(game => {
      switch (game.category) {
        case 'Racing':
          racingContainer.appendChild(createGameCover(game));
          break;
        case 'Sports':
          sportsContainer.appendChild(createGameCover(game));
          break;
        case 'Open World':
          openWorldContainer.appendChild(createGameCover(game));
          break;
        case 'Story':
          storyContainer.appendChild(createGameCover(game));
          break;
        case 'Shooters':
          shootersContainer.appendChild(createGameCover(game));
          break;
      }
    });
  })
  .catch(error => console.error('Error al leer el archivo JSON:', error));