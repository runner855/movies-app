import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [searchMovie, setSearchMovie] = useState();

  const handleChange = (event) => {
    setSearchMovie(event.target.value);
  };
  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
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
