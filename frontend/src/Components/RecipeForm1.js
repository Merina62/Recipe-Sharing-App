import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/RecipeFomr1.css";

const RecipeSteps = () => {
  const [ingredients, setIngredients] = useState([{ value: "" }]);
  const [steps, setSteps] = useState([{ value: "" }]);

  const handleIngredientChange = (index, event) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { value: event.target.value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const handleStepChange = (index, event) => {
    const newSteps = steps.map((step, i) => {
      if (i === index) {
        return { value: event.target.value };
      }
      return step;
    });
    setSteps(newSteps);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { value: "" }]);
  };

  const addStep = () => {
    setSteps([...steps, { value: "" }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ ingredients, steps });
  };

  return (
    <div>
      <Navbar />

      <div className="recipe-steps-container">
        <div className="progress-bar">
          <span className="step">1</span>
          <span className="step active">2</span>
          <span className="step">3</span>
        </div>
        <form onSubmit={handleSubmit} className="recipe-steps-form">
          {/* Ingredients Section */}
          <h3>Ingredients</h3>
          <p>
            Enter one ingredient per line. Include the quantity (i.e., cups,
            tablespoons) and any special preparation (i.e., sifted, softened,
            chopped).
          </p>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input">
              <input
                type="text"
                placeholder="eg. 1 Cup Sugar"
                value={ingredient.value}
                onChange={(event) => handleIngredientChange(index, event)}
              />
              <button type="button" onClick={() => removeIngredient(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" className="add-button" onClick={addIngredient}>
            + Add
          </button>

          {/* Steps Section */}
          <h3>Cook Steps</h3>
          <p>
            Explain how to make your recipe, including oven temperatures, baking
            or cooking times, and pan sizes.
          </p>
          {steps.map((step, index) => (
            <div key={index} className="step-input">
              <label>Step {index + 1}</label>
              <input
                type="text"
                placeholder={`eg. Preheat oven to 350 degrees F...`}
                value={step.value}
                onChange={(event) => handleStepChange(index, event)}
              />
              <button type="button" onClick={() => removeStep(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" className="add-button" onClick={addStep}>
            + Add
          </button>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button type="button" className="previous-button">
              Previous
            </button>
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeSteps;
