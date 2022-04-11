import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../styles/SideBar.css";
import qs from "qs";

function SideBar() {
  const [query, setQuery] = useState("");

  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar-cont">
      <form className="property-search" onSubmit={handleSearch}>
        <input
          className="property-search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Listings"
        />
        <button className="property-search-button" type="submit">
          search
        </button>
      </form>
      <ul className="sidebar-links">
        <NavLink
          exact
          to={buildQueryString("query", { city: "Manchester" })}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Manchester</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Liverpool" })}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Liverpool</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Sheffield" })}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Sheffield</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Leeds" })}
          activeClassName="selected-city"
          className="sidebar-link-item"
        >
          <li>Leeds</li>
        </NavLink>
      </ul>
      <ul className="price-filter-list">
        <NavLink
          to={buildQueryString("sort", { price: 1 })}
          className="price-query"
        >
          <li>Price Ascending</li>
        </NavLink>
        <NavLink
          to={buildQueryString("sort", { price: -1 })}
          className="price-query"
        >
          <li>Price Descending</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
