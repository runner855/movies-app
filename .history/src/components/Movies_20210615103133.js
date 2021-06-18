import React from "react";
import movies_data from "../data/movies_data.json";
import "../styles/App.css";

const Movies = () => {
  return (
    <>
      <div className="movies-container">
        {movies_data.map((data, key) => {
          return <div key={key}>{data.title + ", " + data.year}</div>;
        })}
      </div>
    </>
  );
};

export default Movies;
