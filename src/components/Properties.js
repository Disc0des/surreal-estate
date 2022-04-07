import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/Properties.css";

function Properties() {
  return (
    <div className="property-card-cont">
      <PropertyCard
        title="nice house"
        type="flat"
        bedrooms="2"
        bathrooms="2"
        city="Manchester"
        price="£100000"
        email="joe@surreal"
      />
    </div>
  );
}

export default Properties;
