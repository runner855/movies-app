import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = ({ data }) => {
  return (
    <div className="Movie">
      <Header />
      <Search />
      <MovieSummaries data={data} />
    </div>
  );
};

export default App;
