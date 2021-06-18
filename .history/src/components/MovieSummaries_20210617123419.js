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
        <div className="poster-container">
        <img src={movie.Poster} alt="img"></img>
        </div>
        
      ))}
    </div>
    </>
  );
};

export default MovieSummaries;

MovieSummaries.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.any,
      Year: PropTypes.number,
    })
  ),
};
