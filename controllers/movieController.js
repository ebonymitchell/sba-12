const axios = require("axios");

// Base URL for the OMDb API
const OMDB_URL = "https://www.omdbapi.com/";

// Controller for searching movies by title
const searchMovies = async (req, res) => {
    // Extract the title from the URL query parameters
    const { title } = req.query;

    // Reject requests that do not include a valid title
    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            error: "Title query parameter is required",
        });
    }

    try {
        // Request matching movies from the OMDb API
        const response = await axios.get(OMDB_URL, {
            params: {
                s: title.trim(),
                apikey: process.env.OMDB_API_KEY,
            },
        });

        // Return the movie search results as JSON
        return res.json(response.data);
    } catch (error) {
        // Log the failure without exposing the API key
        console.error("Movie search failed:", error.message);

        return res.status(500).json({
            error: "Failed to search movies",
        });
    }
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
