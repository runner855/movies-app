import React from "react";
import "../styles/App.css";
import "../data/movies.json";

import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = () => {
  const [movieSearch, setMovieSearch] = useState({ search: null });

  const handleSearch = (event) => {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  return (
    
  );
};

export default App;
