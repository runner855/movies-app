import React, { useState, useEffect } from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = ({ data }) => {
  return (
    <div className="Movie">
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieSummaries data={data} />
    </div>
  );
};

export default App;
