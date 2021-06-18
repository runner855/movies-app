import React, { useState } from "react";
import "../styles/Search.css";

const Search = (setMovieResults) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMovieResults(await getMovies(value));
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
