import React from "react";
import PropTypes from "prop-types";
import house from "../2-kings.png";
import "../styles/PropertyCard.css";

function PropertyCard({
  title,
  type,
  bedrooms,
  bathrooms,
  city,
  price,
  email,
}) {
  return (
    <div className="property-card">
      <img src={house} alt="house" className="two-kings" />
      <ul className="property-details">
        <li className="card-title">{title}</li>
        <li className="card-city">{city}</li>
        <li className="card-type">{type}</li>
        <li className="card-beds">{bedrooms}</li>
        <li className="card-baths">{bathrooms}</li>
        <li className="card-price">{price}</li>
        <li className="card-email">{email}</li>
      </ul>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
