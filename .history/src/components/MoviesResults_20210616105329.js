import React from "react";
import "../styles/MoviesResults.css";

const MoviesResults = ({ results }) => {
  if (!results) {
    return <p>Movies Results</p>;
  } else {
    return (
      <>
        <img alt="fake-img" src="mock-img" />
      </>
    );
  }
};

export default MoviesResults;
