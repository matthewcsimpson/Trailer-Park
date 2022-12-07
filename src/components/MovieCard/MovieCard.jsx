// Styles
import "./MovieCard.scss";

// Variables
const REACT_APP_TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

const MovieCard = ({ movie }) => {
  return (
    <div className="moviecard">
      <div className="moviecard__posterbox">
        <img
          className="moviecard__poster"
          src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="moviecard__text">
        <p className="movieCard__title">{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
