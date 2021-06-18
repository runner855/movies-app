import React from "react";
import "../styles/MoviesResults.css";
import data from "../data/data.json";
import getMovies from "../requests/getMovies";

const MoviesResults = () => {
  return (
    <>
      <p>Movies Results</p>
      <img className="card-img" src={data.Title} alt="poster-img" />
    </>
  );
};

export default MoviesResults;
