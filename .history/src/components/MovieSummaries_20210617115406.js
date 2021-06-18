import React from "react";
import PropTypes from "prop-types";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ movies }) => {
  return (
    <div className="Movie-summaries">
      {movies.map((movie) => {
        <MovieSummary
          Title={movies.Title}
          Poster={movies.Poster}
          Year={movies.Year}
        />;
      })}
    </div>
  );
};

export default MovieSummaries;
