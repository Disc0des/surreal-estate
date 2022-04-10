import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  return (
    <div>
      <ul className="sidebar-links">
        <NavLink
          to={`/?query={"city": "Manchester"}`}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Manchester</li>
        </NavLink>
        <NavLink
          to={`/?query={"city": "Liverpool"}`}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Liverpool</li>
        </NavLink>
        <NavLink
          to={`/?query={"city": "Sheffield"}`}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Sheffield</li>
        </NavLink>
        <NavLink
          to={`/?query={"city": "Leeds"}`}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Leeds</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
