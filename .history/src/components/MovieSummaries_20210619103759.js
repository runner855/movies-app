import React from "react";
import "../styles/MovieSummaries.css";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ data }) => {
  return (
    <>
      <div className="MovieSummaries_container">
        {data.map((movie, key) => {
          console.log(movie.Poster);
          return (
            <MovieSummary
              key={key}
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieSummaries;
