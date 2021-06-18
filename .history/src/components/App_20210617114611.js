import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";

import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <MovieSummaries />
    </div>
  );
};

export default App;

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
    })
  ),
};
