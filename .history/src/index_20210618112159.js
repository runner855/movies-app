import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter, Link } from "react-router-dom";

import App from "./components/App";
import data from "./data/data.json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
