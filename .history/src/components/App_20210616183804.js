import React, { useState } from "react";
import "../styles/App.css";
import MoviesResults from "../components/MoviesResults";
import Header from "../components/header";
import Search from "../components/Search";
import Movies from "../requests/Movies";

const App = () => {
  const [moviesResults, setMoviesResults] = useState();
  return (
    <div className="App">
      <Header />
      <Search setMoviesResults={setMoviesResults} />
      <MoviesResults results={moviesResults} />
      <Movies />
    </div>
  );
};

export default App;
