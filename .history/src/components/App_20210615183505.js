import React from "react";
import "../styles/App.css";
import Movies from "../data/data.json";

const App = () => {
  return (
    <div className="App">
      <App Movies={Movies} />
    </div>
  );
};

export default App;
