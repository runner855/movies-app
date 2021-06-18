import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/MovieSummaries.css";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
  const searchHandler = () => {};
  return (
    <>
      {/* <div className="MovieSummaries_container">
        {data.map((data, key) => {
          console.log(data.Poster);
          return (
            <MovieSummary
              key={key}
              Title={data.Title}
              Poster={data.Poster}
              Year={data.Year}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default MovieSummaries;
