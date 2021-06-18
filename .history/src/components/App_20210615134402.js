import React from "react";
import "../styles/App.css";
import Search from "../components/Search";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <img
          className="app-logo"
          src="http://filmstarfacts.com/wp-content/uploads/2017/04/635909140777574051-183397971_the-movies-logo-11.gif"
          alt="logo"
        ></img>

        <h1>IS IT MOVIE NIGHT?</h1>
      </div>
      <Search />
    </div>
  );
};

export default App;
