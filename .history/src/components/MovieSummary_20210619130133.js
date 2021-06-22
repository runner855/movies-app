import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import "../styles/MovieSummary.css";

const MovieSummary = (props) => {
  const { Title, Poster } = props;

  return (
    <div className="Movie-summary">
      <div className="Movie-summary_title">{Title}</div>
      {/* <div className="Movie-summary_year">{Year}</div> */}

      <Link type="button" onClick={MovieDetails}>
        <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
      </Link>
    </div>
  );
};

export default MovieSummary;
