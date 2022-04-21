import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import logo from "../estate-logo.png";
import "../styles/NavBar.css";

function NavBar() {
  const [userId, setUserId] = useState("");

  const onLogin = (response) => {
    setUserId(response.userID);
  };

  const onLogout = () => {
    window.FB.logout(setUserId(""));
  };

  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <img src={logo} alt="logo" className="logo" />
        </li>
        <NavLink
          exact
          to="/"
          activeClassName="selected-link"
          className="navbar-links-item"
        >
          <li>View Properties</li>
        </NavLink>
        <NavLink
          to="/add-property"
          activeClassName="selected-link"
          className="navbar-links-item"
        >
          <li>Add Property</li>
        </NavLink>
      </ul>
      {(userId && (
        <button type="submit" className="sign-out" onClick={onLogout}>
          Sign Out
        </button>
      )) || (
        <FacebookLogin
          appId="279855101021290"
          callback={onLogin}
          icon="fa-facebook"
          textButton="   Login"
        />
      )}
    </div>
  );
}

export default NavBar;
