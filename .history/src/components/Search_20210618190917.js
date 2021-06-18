import React, { useState } from "react";
import data from "../data/data.json";
import "../styles/Search.css";

const Search = () => {
  const [movieSearch, setMovieSearch] = useState();

  const handleSearch = (event) => {
    let keyword = event.target.value;
    setMovieSearch({ search: keyword });
  };

  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>

      <div className="container"></div>
    </>
  );
};

export default Search;
