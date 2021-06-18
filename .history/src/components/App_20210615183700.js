import React from "react";
import "../styles/App.css";
import { title } from "../data/data.json";

const App = () => {
  return (
    <div className="App">
      <App title={title} />
    </div>
  );
};

export default App;
