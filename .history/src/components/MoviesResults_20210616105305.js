import React from "react";
import "../styles/MoviesResults.css";
import data from "../data/data.json";

const MoviesResults = ({ results }) => {
  if (!results) {
    return <p>Movies Results</p>;
  } else {
    return (
      <>
        <img src="mock-img" />
      </>
    );
  }
};

export default MoviesResults;
