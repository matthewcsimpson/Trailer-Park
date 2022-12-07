// Styles
import "./MovieList.scss";

// Components
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, REACT_APP_TMDB_IMAGE_URL }) => {
  return (
    <div className="movielist">
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              REACT_APP_TMDB_IMAGE_URL={REACT_APP_TMDB_IMAGE_URL}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
