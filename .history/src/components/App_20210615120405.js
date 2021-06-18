import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <img
          className="app-logo"
          src="http://filmstarfacts.com/wp-content/uploads/2017/04/635909140777574051-183397971_the-movies-logo-11.gif"
          alt="logo"
        ></img>

        <h1>Is is movie night?</h1>
      </div>
      <Movies />
    </div>
  );
};

export default App;
