// Libraries
import { useEffect, useState } from "react";

// Styles
import "./HomePage.scss";

import {
  loadPopularMovies,
  loadSearchMovies,
} from "../../utilities/MovieLoadingUtils";

// Components
import PageSearchForm from "../../components/PageSearchForm/PageSearchForm";
import MovieList from "../../components/MovieList/MovieList";
import PageSidebar from "../../components/PageSidebar/PageSidebar";

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
      "
      <div className="container">
        <div className="movielists__container">
          <PageSearchForm handleSearchFieldChange={handleSearchFieldChange} />

          {searchedMovies.length > 0 && (
            <h2 className="movielists__heading">Search results</h2>
          )}
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
        <PageSidebar />
      </div>
    </>
  );
};

export default HomePage;
