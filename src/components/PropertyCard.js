import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/PropertyCard.css";
import house from "../2-kings.png";

function PropertyCard({
  title,
  type,
  bedrooms,
  bathrooms,
  city,
  price,
  email,
}) {
  const sendEmail = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className="property-card">
      <img src={house} alt="house" className="two-kings" />
      <div className="details-cont">
        <ul className="icon-cont">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-tag" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-map-pin" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bed" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bath" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-sterling-sign" />
          </li>
        </ul>
        <ul className="property-details">
          <li className="title-details">{title}</li>
          <li className="city-details">{city}</li>
          <li className="type-details">{type}</li>
          <li className="beds-details">{bedrooms}</li>
          <li className="bath-details">{bathrooms}</li>
          <li className="price-details">{price}</li>
        </ul>
      </div>
      <button className="email-button" type="button" onClick={sendEmail}>
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
      </button>
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
