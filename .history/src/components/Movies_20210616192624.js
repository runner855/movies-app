import React from "react";
import "../styles/Movies.css";
import data from "../data/data.json";

const Movies = () => {
  return (
    <>
      {data.map((movieDetails, index) => {
        return (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movieDetails.Poster} alt="movie"></img>
        </div>
      })}
    </>
  );
};

export default Movies;
