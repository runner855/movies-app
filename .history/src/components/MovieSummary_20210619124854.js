import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieSummary.css";

const MovieDetails = (props) => {
  const [students, setStudents] = useState([]);
  const handleClick = () => {
    // create an array
    setStudents((students) => [...students, <Input />]);
    console.log("dddd", students);
  };
  const { Title, Poster, Year } = props;

  return (
    <div className="Movie-details">
      <div className="Movie-summary_title">{Title}</div>
      <div className="Movie-summary_year">{Year}</div>

      <div className="Movie-summary_poster">{Poster}</div>

      <Link type="button" onClick={handleClick}>
        <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
      </Link>
    </div>
  );
};

export default MovieDetails;
