import React from "react";
import PropTypes from "prop-types";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
  return (
    <>
      <div className="Movie-summaries">
        {data.map((movie, index) => (
          <MovieSummary Poster={data.Poster} Year={movie.Year} />
        ))}
      </div>
    </>
  );
};

export default MovieSummaries;

MovieSummaries.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.any.isRequired,
      Year: PropTypes.number.isRequired,
    })
  ),
};
