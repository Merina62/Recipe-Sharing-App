// src/components/Ingredient.js
import React from "react";
import Navbar from "./Navbar";
import "../styles/Ingredient.css"; // Create and import your CSS file for styling

const Ingredient = () => {
  const ingredients = [
    { name: "Potatoes", imageUrl: "https://rb.gy/wz7lkm" },
    { name: "Mushrooms", imageUrl: "https://rb.gy/38wf6j" },
    { name: "Chicken", imageUrl: "https://rb.gy/1ydp87" },
    { name: "Rice", imageUrl: "https://t.ly/2ZohO" },
    { name: "Pork", imageUrl: "https://t.ly/rbB2s" },
  ];

  return (
    <div>
      <Navbar />
      <div className="ingredient-container">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient.name}
            className="ingredient-button"
            style={{ backgroundImage: `url(${ingredient.imageUrl})` }}
          >
            <span className="ingredient-text">{ingredient.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ingredient;
