import React from "react";
import "../styles/MoviesResults.css";
import data from "../data/data.json";
import getMovies from "../requests/getMovies";

const MoviesResults = () => {
  console.log(MoviesResults);
  return (
    <>
      <p>Movies Results</p>

      <img className="card-img" src={data.Poster} alt="poster-img"></img>
    </>
  );
};

export default MoviesResults;
