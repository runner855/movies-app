import React from "react";
import PropTypes from "prop-types";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
  return (
    <>
      <div className="Movie-summaries">
        {data.map((movie) => (
          <MovieSummary
            key={movie.Title}
            Poster={movie.Poster}
            Year={movie.Year}
          />
        ))}
      </div>
    </>
  );
};

export default MovieSummaries;

MovieSummaries.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.any,
      Year: PropTypes.number,
    })
  ),
};
