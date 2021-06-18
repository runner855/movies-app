import React from "react";
import "../styles/App.css";
import Movies from "../components/Movies";
import Header from "../components/header";
import Search from "../components/Search";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Movies />
    </div>
  );
};

export default App;
