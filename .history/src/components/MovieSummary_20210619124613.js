import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieSummary.css";

const MovieSummary = (props) => {
  const [students, setStudents] = useState([]);
  const handleClick = () => {
    // create an array
    setStudents((students) => [...students, <Input />]);
    console.log("dddd", students);
  };
  const { Title, Poster } = props;

  return (
    <div className="Movie-summary">
      <div className="Movie-summary_title">{Title}</div>
      {/* <div className="Movie-summary_year">{Year}</div> */}

      <Link type="button" onClick={handleClick}>
        <img className="Movie-summary_Poster" src={Poster} alt="img-poster" />
      </Link>
    </div>
  );
};

export default MovieSummary;
