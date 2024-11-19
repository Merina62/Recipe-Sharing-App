const Recipe = require("../models/Recipe");
require("../models/database");

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from the database
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Popular recipe sort
const getPopularRecipes = async (req, res) => {
  try {
    const popularRecipes = await Recipe.find().sort({ rating: -1 }).limit(10);
    res.json(popularRecipes);
  } catch (error) {
    console.error("Error fetching popular recipes:", error);
    res.status(500).json({ message: "Failed to fetch popular recipes" });
  }
};

//Get a singlw recipe by td
const getRecipeDetailsByID = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new Recipe
const addRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: "Error adding recipe", error });
  }
};

const getMealtype = async (req, res) => {
  const { mealType } = req.params;
  try {
    const recipes = await Recipe.find({ mealType }); // Assuming 'Recipe' is your model
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

const getCuisinetype = async (req, res) => {
  const { cuisine } = req.params;
  try {
    const recipes = await Recipe.find({ cuisine });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

const getIngredienttype = async (req, res) => {
  const { ingredient } = req.params;
  try {
    const recipes = await Recipe.find({ ingredients: { $in: [ingredient] } });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

module.exports = {
  getAllRecipes,
  getPopularRecipes,
  addRecipe,
  getRecipeDetailsByID,
  getMealtype,
  getCuisinetype,
  getIngredienttype,
};
