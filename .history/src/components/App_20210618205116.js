import React from "react";
import "../styles/App.css";
import movies from "../data/movies.json";

import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = () => {
  const [movieSearch, setMovieSearch] = useState({ search: null });

  const handleSearch = (event) => {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  const movieResults = movies.filter((data)=>{
    if(movieSearch.search == null)
        return data
    else if(movies.Title.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
        return data
    }

  return (
    
  );
};

export default App;
