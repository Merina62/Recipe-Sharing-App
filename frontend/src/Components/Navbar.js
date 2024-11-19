import React from "react";
import { Link } from "react-router-dom";
import FlavorFlowLogo from "../assets/FlavorFlow.png";
import "../styles/Navbar.css";
import "./Home.js";
import "./Aboutus.js";
import "./Meal.js";
import "./Cuisine.js";
const Navbar = () => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to="/Home">
            <img src={FlavorFlowLogo} alt="FlavorFlow Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recipes
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#" to="/Meal">
                      Meal
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/Cuisine">
                      Cuisine
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-divider"></Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/Ingredient">
                      Ingredients
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  Meal Plans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" to="/Aboutus">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="btn-container">
              <button className="btn btn-outline-success" type="submit">
                <i className="fas fa-search"></i>
              </button>
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button className="btn btn-outline-success" type="submit">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
