import React from "react";
import "../styles/Search.css";

const Search = (props) => {
  return (
    <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(event) => props.setSearchValue(event.target.value)}
          value={props.value}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
