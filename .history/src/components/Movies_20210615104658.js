import React from "react";
import data from "../data/data.json";
import "../styles/App.css";

const Movies = () => {
  return (
    <>
      <div className="movies-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.Title + ", " + data.Year}
              <img src={data.Images} alt="movie-img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
