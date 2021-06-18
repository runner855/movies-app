import React from "react";
import PropTypes from "prop-types";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ movies }) => {
  return (
    <div className="Movie-summaries">
      {movies.map((movie) => (
        <MovieSummary
          key={movie.Title}
          Poster={movie.Poster}
          Year={movie.Year}
        />
      ))}
    </div>
  );
};

export default MovieSummaries;
