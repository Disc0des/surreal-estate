import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faBath,
  faMapPin,
  faTag,
  faSterlingSign,
  faEnvelope,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import App from "./components/App";

library.add(
  faBed,
  faBath,
  faMapPin,
  faTag,
  faSterlingSign,
  faEnvelope,
  faMagnifyingGlass,
  faHouse
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
