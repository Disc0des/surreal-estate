import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() =>
        setAlert({
          message: "Server Error, please check connection",
        })
      );
  }, []);
  return (
    <div className="property-card-cont">
      <Alert message={alert.message} success={false} />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
}

export default Properties;
