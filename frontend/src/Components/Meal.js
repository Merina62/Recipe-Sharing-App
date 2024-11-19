import React from "react";
import Navbar from "./Navbar";
import "../styles/Meal.css";
import { useNavigate } from "react-router-dom";

const Meal = () => {
  const navigate = useNavigate();
  const mealTypes = [
    { name: "Breakfast", imageUrl: "https://shorturl.at/1zB1p" },
    { name: "Lunch", imageUrl: "https://shorturl.at/k3IY8" },
    { name: "Dinner", imageUrl: "https://shorturl.at/X9UBL" },
    { name: "Dessert", imageUrl: "https://shorturl.at/inrSl" },
    { name: "Snack", imageUrl: "https://shorturl.at/yXev1" },
  ];
  const handleButtonClick = (mealName) => {
    navigate(`/recipes/mealtype/${mealName}`);
  };

  return (
    <div>
      <Navbar />
      <div className="meal-container">
        {mealTypes.map((meal) => (
          <button
            key={meal.name}
            className="meal-button"
            style={{ backgroundImage: `url(${meal.imageUrl})` }}
            onClick={() => handleButtonClick(meal.name)}
          >
            <span className="meal-text">{meal.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Meal;
