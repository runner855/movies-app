import React from "react";
import "../styles/MovieSummaries.css";
import data from "../data/data.json";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
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
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieSummaries;
