// src/components/Cuisine.js
import React from "react";
import Navbar from "./Navbar";
import "../styles/Cuisine.css"; // Create and import your CSS file for styling

const Cuisine = () => {
  const cuisines = [
    { name: "Italian", imageUrl: "https://shorturl.at/9ub6P" },
    { name: "Chinese", imageUrl: "https://shorturl.at/HNpNw" },
    { name: "Indian", imageUrl: "https://shorturl.at/Vc7al" },
    { name: "Mexican", imageUrl: "https://shorturl.at/9MusC" },
    { name: "Japanese", imageUrl: "https://rb.gy/vvw0lr" },
  ];

  return (
    <div>
      <Navbar />
      <div className="cuisine-container">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine.name}
            className="cuisine-button"
            style={{ backgroundImage: `url(${cuisine.imageUrl})` }}
          >
            <span className="cuisine-text">{cuisine.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
