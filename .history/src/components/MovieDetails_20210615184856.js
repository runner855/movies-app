import React from "react";
import data from "../data/data.json";

const MovieDetails = (props) => {
  const { Title, Year } = props;
  return <h1>{`${data.Title}, ${data.Year}`}</h1>;
};

export default MovieDetails;
