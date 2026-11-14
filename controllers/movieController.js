const axios = require("axios");

// Base URL for the OMDb API
const OMDB_URL = "https://www.omdbapi.com/";

// Controller for searching movies by title
const searchMovies = async (req, res) => {
    // Search functionality will be implemented next
    return res.status(501).json({
        error: "Movie search is not implemented yet",
    });
};

// Controller for retrieving movie details by IMDb ID
const getMovieDetails = async (req, res) => {
    // Movie details functionality will be implemented later
    return res.status(501).json({
        error: "Movie details are not implemented yet",
    });
};

// Export both controllers for use in movieRoutes.js
module.exports = {
    searchMovies,
    getMovieDetails,
};
