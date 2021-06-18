import React, { useState } from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import fuse from "../components/app-fuse";
import MovieSummaries from "./MovieSummaries";

const App = () => {
  const [data, setData] = useState(data);

  const searchMovie = (pattern) => {
    if (!pattern) {
      setData(data);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "author"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
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
