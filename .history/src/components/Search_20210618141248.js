import React, { useState } from "react";
import "../styles/Search.css";

const Search = (props) => {
  const [value, setValue] = useState();
  return (
    <>
      <form className="search-form">
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
