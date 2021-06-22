import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieSummary.css";
import MovieDetails_summaries from "./MovieDetails_summaries";

const MovieSummary = (props) => {
  const { Title, Poster } = props;

  return (
    <div className="Movie-summary">
      <div className="Movie-summary_title">{Title}</div>
      {/* <div className="Movie-summary_year">{Year}</div> */}

      <Link type="button">
        <img
          className="Movie-summary_Poster"
          src={Poster}
          alt="img-poster"
          onClick={MovieDetails_summaries}
        />
      </Link>
    </div>
  );
};

export default MovieSummary;
