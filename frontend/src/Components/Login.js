import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import photo from "../assets/Log-img.png";
import FlavorFlow from "../assets/FlavorFlow.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data) {
        alert("Login Sucessfull");
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };
  return (
    <div className="login-container">
      <div className="login-image-side">
        <img src={photo} alt="Login Background" className="login-image" />
      </div>
      <div className="login-details-side">
        <div className="logo-container">
          <img src={FlavorFlow} alt="Logo" className="logo" />
          <p className="slogan">Login to FlavorFlow</p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">
            Login
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
          <div className="login-section">
            <p>
              Already have an account?{" "}
              <Link to="/Signup" className="login-link">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
