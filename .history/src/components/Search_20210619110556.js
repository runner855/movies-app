import React, { useState, useEffect } from "react";
import "../styles/Search.css";
import data from "../data/data.json";

const Search = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  const handleChange = (event) => {
    setSearchMovie(event.target.value);
  };

  useEffect(() => {
    const results = data.filter((movie) =>
      movie.Poster.toLowerCase().includes(searchMovie)
    );
    setMovieResults(results);
  }, [searchMovie]);
  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          value={searchMovie}
          onChange={handleChange}
          className="search-input"
          type="text"
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
