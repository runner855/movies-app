import React, { useState } from "react";
import data from "../data/data.json";
import "../styles/Search.css";

const Search = ({ setMovieResults }) => {
  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>

      <div className="container">
        {data.map((item) => (
          <Card {...item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default Search;
