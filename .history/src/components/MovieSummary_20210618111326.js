import React from "react";
import "../styles/MovieSummary.css";

const MovieSummary = (props) => {
  const { Title, Poster, Year } = props;

  return (
    <div className="Movie-summary">
      {/* <div className="Movie-summary_title">{Title}</div> */}
      <button></button>
      <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
    </div>
  );
};

export default MovieSummary;
