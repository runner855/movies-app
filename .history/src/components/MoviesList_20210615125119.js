import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const MovieList = ({ results }) => {
  if (!results) {
    return <p>No Movie found</p>;
  } else {
    return <></>;
  }
};

export default MovieList;
