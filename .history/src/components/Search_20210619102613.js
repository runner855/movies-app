import React, { useState } from "react";
import data from "../data/data.json";
import "../styles/Search.css";

const Search = () => {
  const [movieSearch, setMovieSearch] = useState({ search: null });

  const handleSearch = (event) => {
    let keyword = event.target.value;
    setMovieSearch({ search: keyword });
  };

  const movies = data.filter((data) => ());
    if (movieSearch.search == null) 
      return data;
     else if (
      data.Title.toLowerCase().includes(movieSearch.search.toLowerCase())
    ) {
      return data;
    }
  };

  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => handleSearch(e)}
        />
        {movies}
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>

      <div className="container"></div>
    </>
  );


export default Search;
