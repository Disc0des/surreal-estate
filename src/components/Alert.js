import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

function Alert({ message, success }) {
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

export default Alert;

Alert.defaultProps = {
  success: false,
};
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
