import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { data } from "./data/data.json";

ReactDOM.render(
  <React.StrictMode>
    <App Title={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
