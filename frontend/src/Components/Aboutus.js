import React from "react";
import "../styles/Aboutus.css";
import Navbar from "./Navbar";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-description">
          <p className="pmission">
            Lorem ipsum dolor sit amet consectetur. Vitae amet sed commodo
            bibendum. Netus sapien pellentesque libero vestibulum sociis. Dui
            condimentum faucibus felis magna varius varius viverra. Dictum nec
            tempus malesuada consectetur enim nunc faucibus nascetur
            pellentesque.
          </p>
          <div className="mission">
            <h2 className="hmission">Our Mission</h2>
            <p className="pmission">
              “Empower homecooks to discover, learn, experiment, and cook great
              food.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
