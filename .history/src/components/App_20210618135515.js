import React, { useState, useEffect } from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = ({ data }) => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const getMovie = () => {
    fetch(`data.json/?q=${searchValue}`, {
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        if (myJson.data.Title) {
          setMovie(myJson.data.Title);
        }
      });
  };

  useEffect(() => {
    getMovie();
  }, [searchValue]);

  return (
    <div className="Movie">
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieSummaries data={data} />
    </div>
  );
};

export default App;

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.any,
      Year: PropTypes.number,
    })
  ),
};
