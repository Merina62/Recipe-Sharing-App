// src/components/MealDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import Navbar from "./Navbar";
import "../styles/Mealdetails.css";
import breakfast from "../assets/Breakfast.png";

const Mealdetails = () => {
  const { mealType } = useParams(); // Get the meal type from the URL params
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    // Fetch recipes based on meal type
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/recipes/mealtype/${mealType}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data: ", data);
        setRecipes(data); // Update the state with fetched recipes
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [mealType]);

  // Calculate index ranges for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recipes.slice(indexOfFirstCard, indexOfLastCard);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(recipes.length / cardsPerPage);

  // Get the image and description for each meal type
  const getMealTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "breakfast":
        return {
          backgroundImage: breakfast,
          description:
            "Start your day with our delicious and healthy breakfast recipes. From classic scrambled eggs to nutritious smoothie bowls, we have something for everyone!",
        };
      case "lunch":
        return {
          backgroundImage: "/images/lunch.jpg", // Add your image path here
          description:
            "Enjoy a satisfying lunch with our collection of recipes, ranging from light salads to hearty sandwiches and everything in between.",
        };
      case "dinner":
        return {
          backgroundImage: "/images/dinner.jpg", // Add your image path here
          description:
            "End your day on a high note with our delicious dinner recipes. From comforting pasta dishes to flavorful curries, find the perfect meal for your evening.",
        };
      // Add more cases for different meal types
      default:
        return {
          backgroundImage: "/images/default.jpg", // Add a default image path here
          description: "Discover delicious recipes for every meal type.",
        };
    }
  };

  const mealDetails = getMealTypeDetails(mealType);

  return (
    <div>
      <Navbar />
      <div
        className="Mealtype-box"
        style={{
          backgroundImage: `url(${mealDetails.backgroundImage})`,
        }}
      >
        <h1>{mealType} Recipes</h1>
        <p>{mealDetails.description}</p>
      </div>
      <div className="recipe-list">
        {currentCards.map((recipe) => (
          <Cards
            key={recipe._id}
            id={recipe._id}
            image={recipe.image}
            recipeName={recipe.name}
            profilePic={recipe.profilePic}
            rating={recipe.rating}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mealdetails;
