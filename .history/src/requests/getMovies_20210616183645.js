import data from "../data/data.json";

const Movies = () => {
  return (
    <div>
      {data.map((movie) => (
        <h1 key={data.Poster}>{data.Title} </h1>
      ))}
    </div>
  );
};

export default Movies;
