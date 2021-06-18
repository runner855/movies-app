import React from "react";
import "../styles/Movies.css";
import data from "../data/data.json";

const Movies = () => {
  return (
    <>
      
        {data.map((movieDetails, index) => {
          return (
            <div className="stock-container">
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
