// Styles
import "./MovieCard.scss";

// Libraries
import { useNavigate } from "react-router-dom";

// Variables
const REACT_APP_TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

function MovieCard({ movie }) {
  const nav = useNavigate();

  /**
   * Function to handle clicking on each movie card.
   * @param {event} e
   */
  const handleCardClick = (e) => {
    e.preventDefault();
    nav(`/m/${movie.id}`);
  };

  return (
    <div className="moviecard" onClick={handleCardClick}>
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
}

export default MovieCard;
