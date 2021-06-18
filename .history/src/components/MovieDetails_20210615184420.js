import React from "react";

const MovieDetails = (props) => {
  const { Title, Year } = props;
  return <h1>{`${Title}, ${Year}`}</h1>;
};

export default MovieDetails;
