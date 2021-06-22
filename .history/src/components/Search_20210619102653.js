import React, { useState } from "react";
import data from "../data/data.json";
import "../styles/Search.css";

const Search = () => {
  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => handleSearch(e)}
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
