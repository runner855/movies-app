import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import movies from "./data/movies.json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App movies={movies} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
