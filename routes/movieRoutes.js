const express = require("express");

// Import the movie controller functions
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// Create a router for movie-related endpoints
const router = express.Router();

// Search for movies by title
router.get("/search", searchMovies);

// Retrieve movie details by IMDb ID
router.get("/movies/:id", getMovieDetails);

// Export the router for use in server.js
module.exports = router;
