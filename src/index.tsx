import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "@atlaskit/css-reset";

require("./assets/baseStyles.css");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
