import React, { useState } from "react";
import "../styles/Signup.css";
import photo from "../assets/Log-img.png";
import FlavorFlow from "../assets/FlavorFlow.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Form Submission
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      if (response.data) {
        alert("User registered successfully");
        //Clear input field after sucessful registration
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image-side">
        <img src={photo} alt="Signup Background" className="signup-image" />
      </div>
      <div className="signup-details-side">
        <div className="signup-logo-container">
          <img src={FlavorFlow} alt="Logo" className="logo" />
          <p className="slogan">
            Discover, Create, and Share Recipes with Ease!
          </p>
        </div>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <div className="or-section">
            <span className="line"></span>
            <span className="or-text">or</span>
            <span className="line"></span>
          </div>
          <div className="social-buttons">
            <button className="social-button google-button">
              <i className="fab fa-google"></i>
              Continue with Google
            </button>
            <button className="social-button facebook-button">
              <i className="fab fa-facebook-f"></i>
              Continue with Facebook
            </button>
          </div>
          <div className="signup-section">
            <p>
              Already have an account?{" "}
              <Link to="/" className="login-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
