// Styles
import "./App.scss";

// Libraries
import axios from "axios";
import { useEffect, useState } from "react";

// misc
import headerimg from "./assets/AF_Logo-1-Line-Transparent.png";

// Variables
const API_KEY = process.env.REACT_APP_TMDB_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  const loadPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?videos=true&api_key=${API_KEY}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <div className="App">
      <div className="pageheader">
        <img
          src={headerimg}
          alt="Awesome Friday!"
          className="pageheader__logo"
        />
        <h1 className="pageheader__heading">Movie Trailers</h1>
      </div>
      {movies &&
        movies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>;
        })}
    </div>
  );
}

export default App;
