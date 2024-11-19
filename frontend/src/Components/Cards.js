import React from "react";
import "../styles/Cards.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ id, image, recipeName, profilePic, rating }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("Card clicked, ID:", id);
    navigate(`/recipe/${id}`); // Navigate to the details page with the recipe ID
  };

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
    <div className="card" onClick={handleCardClick}>
      <div className="image-card">
        <img src={image} alt={recipeName} className="card-image" />
        <button className="love-button">
          <i className="fa-regular fa-heart"></i>
        </button>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="card-body">
        <h3>{recipeName}</h3>
      </div>
      <div className="card-footer">
        <div className="stars">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default Cards;
