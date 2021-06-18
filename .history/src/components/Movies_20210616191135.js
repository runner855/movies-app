import React from "react";
import "../styles/Movies.css";
import data from "../data/data.json";

const Movies = () => {
  return (
    <div>
      <h2>is it working?</h2>
      {data.map((movieDetail, index) => {
        return;

        <h1>{data.Title}</h1>;
      })}
    </div>
  );
};

export default Movies;
