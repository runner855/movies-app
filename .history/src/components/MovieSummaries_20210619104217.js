import React from "react";
import "../styles/MovieSummaries.css";
import MovieSummary from "../components/MovieSummary";

const MovieSummaries = ({ movies }) => {
  return (
    <>
      <div className="MovieSummaries_container">
        {movies.map((movie, key) => {
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
