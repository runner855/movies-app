import React from "react";
import Link from "link-react";
import "../styles/MovieSummary.css";

const MovieSummary = (props) => {
  const { Poster } = props;

  return (
    <div className="Movie-summary">
      {/* <div className="Movie-summary_title">{Title}</div> */}
      <button></button>
      <Link>
        <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
      </Link>
    </div>
  );
};

export default MovieSummary;
