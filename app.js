const express = require('express');
const app = express();
app.use(express.json());

let animes = []; // Initialize empty array; we'll populate it from the fetch

// Function to fetch anime data from GitHub raw URL
async function loadAnimes() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/viveke22/anime-latest-name/main/adata.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    animes = await response.json(); // Parse and store the JSON
    console.log('Anime data loaded successfully');
  } catch (error) {
    console.error('Error fetching anime data:', error.message);
    throw error; // Rethrow to prevent server start if fetch fails
  }
}

// Load data and start the server only if successful
loadAnimes()
  .then(() => {
    // GET all animes
    app.get('/animes', (req, res) => {
      const html = animes.map(anime => `<h1>${anime.title}</h1>`).join('');
      res.send(html);
    });

    // GET random anime
    app.get('/random', (req, res) => {
      if (animes.length === 0) {
        return res.status(500).send('No anime data available');
      }
      const randomIndex = Math.floor(Math.random() * animes.length);
      const anime = animes[randomIndex];
      res.send(`<h1> anime title: ${anime.title}</h1> <p>genre: ${anime.genre}</p>`);
    });

    // Add more endpoints here...

    app.listen(3000, () => console.log('API running on port 3000'));
  })
  .catch((error) => {
    console.error('Server failed to start:', error.message);
  });
