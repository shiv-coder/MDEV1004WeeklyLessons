// Import express
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs'); // Correctly importing fs
const path = require('path');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Initialize MongoDB connection
const InitiateMongoServer = require('./db');
InitiateMongoServer();

// Read data from Movies.json
let data;
try {
    data = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));
    console.log(data);
} catch (e) {
    console.error('Error reading or parsing movies.json:', e);
}

// Initialize the express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the first program of Node.js Express');
});

app.post('/submit', (req, res) => {
    res.send(`Received data: ${req.body.data}`);
});

// Serve static files (if needed)
// app.use(express.static(path.join(__dirname, 'public')));

// Set the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
