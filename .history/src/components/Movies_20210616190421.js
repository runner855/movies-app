import React from "react";
import data from "../data/data.json";

const Movies = () => {
  return (
    <div>
      {data.map((Moviedetail, index) => {
        return <h1>{data.Title}</h1>;
      })}
    </div>
  );
};

export default Movies;
