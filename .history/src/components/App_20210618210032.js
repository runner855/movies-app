import React from "react";
import "../styles/App.css";
import movies from "../data/movies.json";



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
    
    });

    return (
      <>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          onChange={(e) => handleSearch(e)}
        />
        {movies}
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>

      <div className="container"></div>
      </>
   
  )
}
}
    
  

  

export default App;
