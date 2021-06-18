import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";

const App = () => {
  return (
    <div className="App">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreativemarket.com%2Fwonderkid%2F4365583-Logo-Design-for-Film-Studio&psig=AOvVaw37DhqE2Pr8LQxya8NuvbFS&ust=1623839776784000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCX6-i4mfECFQAAAAAdAAAAABAF"
        alt="logo"
      ></img>
      <Movies />
    </div>
  );
};

export default App;
