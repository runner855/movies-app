import React, { useState } from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import Fuse from "../components/app-fuse";
import data from "../data/data.json";
import MovieSummaries from "./MovieSummaries";

const App = () => {
  const [movie, setMovie] = useState(data);

  const searchMovie = (pattern) => {
    if (!pattern) {
      setMovie(data);
      return;
    }

    const fuse = new Fuse(movie, {
      keys: ["title", "author"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setMovie([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setMovie(matches);
    }
  };
  return (
    <div className="Movie">
      <Header />
      <Search onChange={(e) => searchMovie(e.target.value)} />
      {data.map((item) => (
        <MovieSummaries {...item} key={item.title} data={data} />
      ))}
    </div>
  );
};

export default App;
