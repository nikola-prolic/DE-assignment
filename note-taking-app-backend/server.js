// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://dbuser:1234@notes.oagetmz.mongodb.net/');

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:8080', // Allow requests from this origin
  // other options if needed
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
