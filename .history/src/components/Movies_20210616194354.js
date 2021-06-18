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
              {movieDetails.Title + " , " + movieDetails.Year}
              <img src={movieDetails.Poster[2]} alt="poster"></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
