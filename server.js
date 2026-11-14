// Load environment variables from .env
require("dotenv").config();

// Import Express.
const express = require("express");

// Create an Express application
const app = express();

// Enable JSON request body parsing
app.use(express.json());

// Use the environment port or default to 3001
const PORT = process.env.PORT || 3001;

// Start the server and log its address
app.listen(PORT, () => {
  console.log(`Movie Finder API running on http://localhost:${PORT}`);
});
