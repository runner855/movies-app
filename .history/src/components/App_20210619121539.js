import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import MovieSummary from "../components/MovieSummary";
import "../styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = data.filter((person) =>
      person.Title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <h1>IS IT MOVIE NIGHT?</h1>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      <div className="container"></div>
      <div className="MovieSummaries_container">
        {searchResults.map((item, key) => (
          <MovieSummary
            key={key}
            Title={item.Title}
            Poster={item.Poster}
            Year={item.Year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
