import React, { useState } from "react";
import "../styles/App.css";
import Movies from "../requests/Movies";
import Header from "../components/header";
import Search from "../components/Search";

const App = () => {
  const [moviesResults, setMoviesResults] = useState();
  return (
    <div className="App">
      <Header />
      <Search setMoviesResults={setMoviesResults} />
      <Movies />
    </div>
  );
};

export default App;
