// Libraries
import { useEffect, useState } from "react";

import {
  loadPopularMovies,
  loadSearchMovies,
} from "../../utilities/MovieLoadingUtils";

// Components
import PageHeader from "../../components/PageHeader/PageHeader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [streamingMovies, setStreamingMovies] = useState([]);
  const [adSupportedMovies, setAdSupportedMovies] = useState([]);
  const [rentableMovies, setRentableMovies] = useState([]);
  const [buyableMovies, setBuyableMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleSearchFieldChange = (e) => {
    e.preventDefault();
    loadSearchMovies(setSearchedMovies, e.target.value);
  };

  /**
   * useEffect to load the popular titles.
   */
  useEffect(() => {
    loadPopularMovies(setBuyableMovies, "buy");
    loadPopularMovies(setRentableMovies, "rent");
    loadPopularMovies(setStreamingMovies, "flatrate");
    loadPopularMovies(setAdSupportedMovies, "ads");
  }, []);

  return (
    <>
      <PageHeader />
      <div className="sitemenu"></div>
      <div className="movielists__container">
        <h2>Search for a title</h2>
        <form className="searchform" autoComplete="off">
          <input
            className="searchform__input"
            name="searchform"
            onChange={handleSearchFieldChange}
          ></input>
        </form>

        <h2 className="movielists__heading">Search results</h2>
        <MovieList movies={searchedMovies} />
        <h2 className="movielists__heading">Popular Purchaseable Movies</h2>
        <MovieList movies={buyableMovies} />
        <h2 className="movielists__heading">Popular Rentable Movies</h2>
        <MovieList movies={rentableMovies} />
        <h2 className="movielists__heading">Popular Streaming Movies</h2>
        <MovieList movies={streamingMovies} />
        <h2 className="movielist__heading">
          Popular Ad Supported Streaming Movies
        </h2>
        <MovieList movies={adSupportedMovies} />
      </div>
    </>
  );
};

export default HomePage;
