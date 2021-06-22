import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = () => {
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
    <div className="Movie">
      <Header />
      <Search />
      <MovieSummaries data={data} />
    </div>
  );
};

export default App;