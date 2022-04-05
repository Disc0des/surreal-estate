import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../estate-logo.png";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="navbar-links">
        <NavLink to="/" className="navbar-links-item">
          <li>View Properties</li>
        </NavLink>
        <NavLink to="/add-property" className="navbar-links-item">
          <li>Add Property</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
