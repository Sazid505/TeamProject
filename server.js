const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');  // Ensure this is the correct path to your routes file
const authRoutes = require('./routes/authRoutes'); // Import auth routes

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON

// MongoDB connection URI
const uri = process.env.MONGO_URI;  // Use your MongoDB URI here from the .env file

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use recipeRoutes for routes related to recipes
app.use('/api/recipes', recipeRoutes);  // All routes for recipes are prefixed with /api/recipes

// Add auth routes
app.use('/api/auth', authRoutes); // All routes for authentication are prefixed with /api/auth

// Server setup
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});