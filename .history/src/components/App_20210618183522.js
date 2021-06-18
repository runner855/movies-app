import React, { useState } from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import Fuse from "../components/app-fuse";
import data from "../data/data.json";
import MovieSummaries from "./MovieSummaries";

const App = () => {};
return (
  <div className="Movie">
    <Header />
    <Search onChange={(e) => searchMovie(e.target.value)} />
    {data.map((item) => (
      <MovieSummaries {...item} key={item.title} data={data} />
    ))}
  </div>
);

export default App;
