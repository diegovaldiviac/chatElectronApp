import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import ReactDOM from "react-dom";

// BOOTSTRAP
const container = document.getElementById("html-body-div") as HTMLElement;
ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>, container
);
