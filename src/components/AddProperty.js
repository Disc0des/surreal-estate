import React, { useState } from "react";
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
  },
};

function AddProperty() {
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
