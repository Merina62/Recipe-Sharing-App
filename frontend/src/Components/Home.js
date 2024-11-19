import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "../styles/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  //Fetch recipes data from backend
  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/recipes/popular`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError(error.message);
      }
    };
    fetchPopularRecipes();
  }, []);

  // Calculate index ranges for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recipes.slice(indexOfFirstCard, indexOfLastCard);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(recipes.length / cardsPerPage);

  return (
    <div>
      <Navbar />
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="What are you craving today?"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
      <div className="popular-recipes-section">
        <h2 className="popular-recipes-title">Popular Recipes</h2>
        <div className="card-grid">
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
    </div>
  );
};

export default Home;
