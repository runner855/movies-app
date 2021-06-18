import React from "react";

const MovieSummary = (props) => {
  const { Title, Poster, Year } = props;

  return (
    <div className="Movie-summary">
      <div className="Movie-summary_title">{Title}</div>
      <img className="Movie-summary_Poster">{Poster}</img>
      <div className="Movie-summary_year">{Year}</div>
    </div>
  );
};

export default MovieSummary;
