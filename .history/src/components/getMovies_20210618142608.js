import axios from "axios";

const getMovies = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`data.json/search?q=${query}`)
      .then((response) => {
        const movieResults = response.data;
        const parsedMovies = movieResults.filter(
          (movieResult) => movieResult.data[0].Poster
        );
        const movies = parsedMovies.map((movie) => movie.Poster[0]);
        return movies;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getMovies;
