import React from "react";

import { movies } from "../data/data.json";

export function MoviesTable() {
  function renderHead() {
    return (
      <thead>
        <tr>
          {movies.map((movie) => (
            <th key={movie.Title}>{movie.Title}</th>
          ))}
        </tr>
      </thead>
    );
  }

  function renderBody() {
    return (
      <tbody>
        <tr>
          {movies.map((movie) => (
            <td key={movie.Title}>{movie.Year}</td>
          ))}
        </tr>
        <tr>
          {movies.map((movie) => (
            <td key={movie.id}>{movie.language}</td>
          ))}
        </tr>
      </tbody>
    );
  }

  return (
    <div className="MoviesTable">
      <table>
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}
