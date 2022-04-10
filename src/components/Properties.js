import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Sidebar from "./SideBar";
import Alert from "./Alert";
import "../styles/Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="properties-page">
      <Sidebar />
      <div className="property-card-cont">
        <Alert message={alert.message} success={false} />
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
}

export default Properties;
