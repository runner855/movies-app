import axios from "axios";

const getMovies = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`./movies.json/search?q=${query}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getMovies;
