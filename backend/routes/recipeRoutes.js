const express = require("express");
const router = express.Router();
const validateObjectId = require("../middlewares/validatedObjectId");

const {
  addRecipe,
  getAllRecipes,
  getPopularRecipes,
  getRecipeDetailsByID,
  getMealtype,
  getCuisinetype,
  getIngredienttype,
} = require("../controllers/recipeController");
// Define routes
router.post("/", addRecipe);

// Fetch all recipes
router.get("/", getAllRecipes);

router.get("/popular", getPopularRecipes);

router.get("/:id", getRecipeDetailsByID);
router.get("/mealtype/:mealType", getMealtype);
router.get("/cuisine/:cuisine", getCuisinetype);
router.get("/ingredient/:ingredient", getIngredienttype);

module.exports = router;
