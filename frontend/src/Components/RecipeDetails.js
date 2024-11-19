import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../styles/RecipeDetails.css";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      console.log("Fetching details for recipe ID:", id);

      try {
        const response = await axios.get(
          `http://localhost:8080/api/recipes/${id}`
        );
        console.log("Recipe details response:", response.data);
        setRecipe(response.data);
      } catch (error) {
        console.log("Error fetching recipe details:", error);
        setError("Error fetching recipe details");
      }
    };
    if (id) {
      fetchRecipeDetails();
    }
  }, [id]);

  if (error) return <div className="error-message">{error}</div>;

  if (!recipe) return <div className="loading-message">Loading...</div>;

  // Destructure recipe details
  const {
    image,
    profilePic,
    name: recipeName,
    description,
    rating,
    ingredients,
    instructions,
    tags,
    author,
  } = recipe;

  // Generate stars based on the rating value
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={i < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div>
      <Navbar />
      <div className="recipe-details-container">
        <div className="image-side">
          <img src={image} alt={recipeName} />
        </div>
        <div className="details-side">
          <div className="author-details">
            <img src={profilePic} alt="Author" className="author-image" />
            <div className="author-info">
              <h2 className="author-name">{author}</h2>
            </div>
          </div>
          <h1 className="recipe-name">{recipeName}</h1>
          <p className="recipe-description">{description}</p>
          <div className="rating">{renderStars()}</div>
          <div className="sharing-buttons">
            <div className="sharing-items">
              <div className="social-media">
                <i className="fa-solid fa-print"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="add-buttons">
                <button className="favourites">Add to Favourites</button>
                <button className="meal-plan">Add to Meal Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
