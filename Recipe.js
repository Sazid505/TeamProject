const mongoose = require('mongoose');

// Define the schema for a recipe
const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create the Recipe model and link it to the 'recipes' collection in MongoDB
const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes'); // Explicit collection name

module.exports = Recipe;