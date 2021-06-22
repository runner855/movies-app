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
        return movies
    else if(movies.Title.toLowerCase().includes(movieSearch.search.toLowerCase()) {
        return movies
    }
  }).map(movies => {
    return (
      <div className="MovieSummaries_container">
         <MovieSummary
              key={key}
              Title={movies.Title}
              Poster={movies.Poster}
              Year={movies.Year}
            />
                  </div>

          );
    
      );
    };
  })

  

export default App;
