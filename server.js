// Load environment variables from .env
require("dotenv").config();

// Import Express.
const express = require("express");

// Create an Express application
const app = express();

// Enable JSON request body parsing
app.use(express.json());
