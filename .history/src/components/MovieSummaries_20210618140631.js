import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/MovieSummaries.css";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
  const [searchMovie, setSearchMovie] = useState();

  const searchHandler = () => {};
  return (
    <>
      <div className="MovieSummaries_container">
        {data.map((data, key) => {
          console.log(data.Poster);
          return (
            <MovieSummary
              key={key}
              Title={data.Title}
              Poster={data.Poster}
              Year={data.Year}
              movie={searchMovie}
              searchKeyword={searchHandler}
            />
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
