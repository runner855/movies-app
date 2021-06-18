import React, { useState } from "react";
import "../styles/Search.css";
import getMovies from "../requests/Movies";

const Search = ({ setMoviesResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(value);
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
