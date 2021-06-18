import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieSummary.css";

const MovieSummary = (props) => {
  const { Title, Poster, Year } = props;

  return (
    <div className="Movie-summary">
      <div className="Movie-summary_title">{Title}</div>
      <Link type="button" onClick={() => console.log("Hello!")}>
        <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
        <div className="Movie-summary_year">{Year}</div>
      </Link>
    </div>
  );
};

export default MovieSummary;
