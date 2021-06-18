import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";

const App = () => {
  return (
    <div className="App">
      <h1>Movies app</h1>
      <Movies />
    </div>
  );
};

export default App;
