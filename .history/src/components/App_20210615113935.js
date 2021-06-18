import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";

const App = () => {
  return (
    <div className="App">
      <img
        src="https://images.creativemarket.com/0.1.0/ps/7414066/600/400/m2/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=50e3d37c1ab493df98baf6eb75f2a430&fmt=webp"
        alt="logo"
      ></img>
      <Movies />
    </div>
  );
};

export default App;
