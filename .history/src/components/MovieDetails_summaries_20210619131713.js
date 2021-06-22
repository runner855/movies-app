import React from "react";
import data from "../data/data.json";
import MovieDetails from "../components/MovieSummary";

const MovieDetails_summaries = () => {
  return (
    <>
      <div className="MovieDetails_summaries_container">
        {data.map((data, key) => {
          return (
            <MovieDetails
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

export default MovieDetails_summaries;
