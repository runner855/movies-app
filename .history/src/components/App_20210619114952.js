import React from "react";
import data from "../data/data.json";
import "../styles/App.css";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];
function App() {
  const [searchTerm, setSearchTerm] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = data.filter((person) =>
      person.Title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <h1>IS IT MOVIE NIGHT?</h1>
      <form className="search-form">
        <input
          placeholder="search your movie"
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />

        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>

      <div className="container"></div>
      <ul>
        {searchResults.map((item) => (
          <li>
            <img src={item.Poster} alt="img"></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
