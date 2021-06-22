import React from "react";
import data from "../data/data.json";
import MovieDetails from "../components/MovieDetails";

const MovieDetails_summaries = () => {
  return (
    <>
      <div className="MovieDetails_summaries_container">
        {data.map((data, key) => {
          return (
            <MovieDetails
              key={key}
              Title={data.Title}
              Year={data.Year}
              Poster={data.Poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieDetails_summaries;
