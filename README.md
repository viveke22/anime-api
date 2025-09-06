# Anime REST API

A simple RESTful API built with Node.js and Express.js that fetches and serves anime data from a remote JSON source. It provides endpoints to retrieve all animes, get a random anime, and more. This project is ideal for learning backend development, API design, and integrating external data sources.

## Features
- Fetches anime data dynamically from a GitHub raw JSON URL.
- Endpoints for listing all animes and getting a random recommendation.
- Returns data in HTML format for easy browser testing (can be extended to JSON).
- Lightweight and easy to deploy.

## Tech Stack
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for routing and middleware.
- **Native Fetch API**: For retrieving remote JSON data (Node.js v18+ compatible).
## Installation
1. Clone the repository:
```

git clone https://github.com/viveke22/anime-api.git
cd anime-api

```

2. Install dependencies:
```

npm install

```

3. (Optional) Ensure Node.js version is 18 or higher: `node -v`.

## Usage
1. Start the server:
```

node app.js

```
- The API will run on `http://localhost:3000`.

2. Test the endpoints in a browser or with tools like Postman:
- **GET /animes**: Lists all anime titles in HTML format.
- **GET /random**: Returns a random anime with title and genre in HTML format.

Example response for `/random`:
```

<h1> anime title: Example Anime</h1> <p>genre: Action</p>

```

3. Extend the API: Add more endpoints in `app.js` for features like search or CRUD operations.

## API Endpoints
| Method | Endpoint     | Description                  |
|--------|--------------|------------------------------|
| GET    | /animes     | Retrieve all animes         |
| GET    | /random     | Get a random anime          |

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for improvements, such as adding JSON responses, authentication, or database integration.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
