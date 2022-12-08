// Styles
import "./MovieList.scss";

// Components
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, REACT_APP_TMDB_IMAGE_URL }) => {
  return (
    <div className="movielist">
      {movies &&
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default MovieList;
