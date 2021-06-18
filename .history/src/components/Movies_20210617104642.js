import React from "react";
import "../styles/Movies.css";
import data from "../data/data.json";

const Movies = () => {
  return (
    <>
      <div className="stock-container">
        {data.map((movieDetails, index) => {
          return (
            <div key={index}>
              <h1>{movieDetails.Title}</h1>
              <img src={movieDetails.Poster} alt="poster"></img>
              <h3>{movieDetails.Year}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
