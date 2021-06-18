import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";

const App = () => {
  return (
    <div className="App">
      <img
        src="http://filmstarfacts.com/wp-content/uploads/2017/04/635909140777574051-183397971_the-movies-logo-11.gif"
        alt="logo"
      ></img>
      <Movies />
    </div>
  );
};

export default App;
