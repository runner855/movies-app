import React from "react";
import "../styles/App.css";
import Header from "../components/header";
import Search from "../components/Search";
import MovieSummaries from "./MovieSummaries";

const App = ({ data }) => {
  return (
    <div className="Movie">
      <Header />
      <Search />
      {data.map((item) => (
        <MovieSummaries {...item} key={item.title} data={data} />
      ))}
    </div>
  );
};

export default App;
