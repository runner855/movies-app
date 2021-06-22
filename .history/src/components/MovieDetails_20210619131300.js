import React from "react";

const MovieSummary = (props) => {
  const {
    Title,
    Poster,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Images,
  } = props;

  return (
    <div className="Movie-details">
      <div className="Movie-details_title">{Title}</div>
      <div className="Movie-details_year">{Year}</div>
      <img className="Movie-details_Poster" src={Poster} alt="img-poster" />
      <div className="Movie-details_year">{Year}</div>
      <div className="Movie-details_rated">{Rated}</div>
      <div className="Movie-details_released">{Released}</div>
      <div className="Movie-details_runtime">{Runtime}</div>
      <div className="Movie-details_genre">{Genre}</div>
      <div className="Movie-details_director">{Director}</div>
      <div className="Movie-details_writer">{Writer}</div>
      <div className="Movie-details_actors">{Actors}</div>
      <div className="Movie-details_plot">{Plot}</div>
      <div className="Movie-details_language">{Language}</div>
      <div className="Movie-details_country">{Country}</div>
      <div className="Movie-details_awards">{Awards}</div>
      <img
        className="Movie-details_images"
        src={Images}
        alt="movie-images"
      ></img>
    </div>
  );
};

export default MovieSummary;
