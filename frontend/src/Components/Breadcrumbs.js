// src/components/Breadcrumbs.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import "../styles/Breadcrumbs.css"; // Import CSS file

const Breadcrumbs = () => {
  const location = useLocation();
  const [names, setNames] = useState({});
  const pathnames = location.pathname.split("/").filter((x) => x);

  useEffect(() => {
    // Fetch names for IDs here
    const fetchNames = async () => {
      const response = await fetch("/api/getNames"); // Replace with your API
      const data = await response.json();
      setNames(data);
    };

    fetchNames();
  }, []);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/Home">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Get the name from state if it exists
          const name = names[value] || value;

          return last ? (
            <li className="breadcrumb-item active" aria-current="page" key={to}>
              {name}
            </li>
          ) : (
            <li className="breadcrumb-item" key={to}>
              <Link to={to}>{name}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
