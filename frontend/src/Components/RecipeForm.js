import React, { useState } from "react";
import "../styles/RecipeForm.css";
import Navbar from "./Navbar";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ title, description, image });
  };

  return (
    <div>
      <Navbar />

      <div className="recipe-form-container">
        <div className="progress-bar">
          <span className="step active">1</span>
          <span className="step">2</span>
          <span className="step">3</span>
        </div>
        <form onSubmit={handleSubmit} className="recipe-form">
          <label htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            placeholder="eg. Spicy Shrimp Tacos"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Recipe Description</label>
          <textarea
            id="description"
            placeholder="eg. These tacos pack a spicy, zesty punch! The mix of peppery shrimp"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="image-upload">Recipe Image</label>
          <input type="file" id="image-upload" onChange={handleImageUpload} />
          {image && (
            <img src={image} alt="Recipe Preview" className="preview-image" />
          )}

          <button type="submit" className="next-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
