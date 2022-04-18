import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/SideBar.css";
import qs from "qs";

function SideBar() {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
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
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
      </form>
      <ul className="city-filter-list">
        <h1>Filter by city</h1>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Manchester" })}
          activeClassName="selected-city"
          className="city-filter"
        >
          <li>Manchester</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Liverpool" })}
          activeClassName="selected-city"
          className="city-filter"
        >
          <li>Liverpool</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Sheffield" })}
          activeClassName="selected-city"
          className="city-filter"
        >
          <li>Sheffield</li>
        </NavLink>
        <NavLink
          exact
          to={buildQueryString("query", { city: "Leeds" })}
          activeClassName="selected-city"
          className="city-filter"
        >
          <li>Leeds</li>
        </NavLink>
      </ul>
      <ul className="price-filter-list">
        <h1>Sort by price</h1>
        <NavLink
          to={buildQueryString("sort", { price: 1 })}
          className="price-filter"
        >
          <li>Lowest First</li>
        </NavLink>
        <NavLink
          to={buildQueryString("sort", { price: -1 })}
          className="price-filter"
        >
          <li>Highest First</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
