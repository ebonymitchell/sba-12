// Load environment variables from .env
require("dotenv").config();

// Import Express and the movie router
const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

// Create an Express application
const app = express();

// Enable JSON request body parsing
app.use(express.json());

// Mount the movie router under the /api prefix
app.use("/api", movieRoutes);

// Use the environment port or default to 3001
const PORT = process.env.PORT || 3001;

// Start the server and log its address
app.listen(PORT, () => {
    console.log(`Movie Finder API running on http://localhost:${PORT}`);
});
