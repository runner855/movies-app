import React from "react";
import "../styles/MoviesResults.css";
import data from "../data/data.json";

const MoviesResults = () => {
  return (
    <>
      <p>Movies Results</p>
      {data.map((data, key) => {
        return <img src={data.Poster} alt="poster-img"></img>;
      })}
    </>
  );
};

export default MoviesResults;
