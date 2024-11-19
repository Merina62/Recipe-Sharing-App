// models/Recipe.js
const mongoose = require("mongoose");

// Define the recipe schema
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  author: { type: String, required: true },
  prepTimeMinutes: { type: Number, required: true },
  cookTimeMinutes: { type: Number, required: true },
  servings: { type: Number, required: true },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  cuisine: { type: String, required: true },
  description: { type: String, required: true },
  caloriesPerServing: { type: Number, required: true },
  tags: [{ type: String }],
  image: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  mealType: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
