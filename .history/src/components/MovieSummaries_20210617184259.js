import React from "react";
import PropTypes from "prop-types";
import data from "../data/data.json";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = () => {
  return (
    <>
      <div className="MovieSummaries_container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.Title}
              {data.Poster}
              {data.Year}
            </div>
          );
        })}
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
