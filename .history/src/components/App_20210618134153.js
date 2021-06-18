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
    fetch("data.json/s=avatar", {
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
        console.log(myJson);

        setMovie(myJson.data);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="Movie">
      <Header />
      <Search searchValue={setSearchValue} />
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
