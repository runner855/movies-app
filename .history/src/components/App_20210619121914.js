import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import MovieSummary from "../components/MovieSummary";
import "../styles/App.css";

function App() {
  const [searchMovie, setSearchMovie] = useState();
  const [movieResults, setMovieResults] = useState([]);
  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };
  useEffect(() => {
    const results = data.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchMovie) &&
        movie.Title.toUpperCase().includes(searchMovie)
    );
    setMovieResults(results);
  }, [searchMovie]);
  return (
    <div className="App">
      <h1>IS IT MOVIE NIGHT?</h1>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          value={searchMovie}
          onChange={handleChange}
        />
      </form>

      <div className="container"></div>
      <div className="MovieSummaries_container">
        {movieResults.map((item, key) => (
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
