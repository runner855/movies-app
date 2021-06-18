import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const MoviesList = ({ results }) => {
  if (!results) {
    return <p>No Movie found</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img
            data-testid="movie-pic"
            className="card-img"
            src={image}
            alt="space-img"
          ></img>
        ))}
      </>
    );
  }
};

MoviesList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default MoviesList;
