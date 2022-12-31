// Styles
import "./MoviePage.scss";

// Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MoviePageHeader from "../../components/MoviePageHeader/MoviePageHeader";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieTrailers from "../../components/MovieTrailers/MovieTrailers";
import PageSidebar from "../../components/PageSidebar/PageSidebar";

// Functions
import { getMovieDetailsById } from "../../utilities/MovieLoadingUtils";

const MoviePage = () => {
  // Params
  const { tmdb_id } = useParams();

  // TMDB base IMG URL
  const REACT_APP_TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  //State
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getMovieDetailsById(tmdb_id, setMovie, setCredits, setVideos);
  }, [tmdb_id]);

  return (
    <div className="mpcontainer">
      <div className="moviepage">
        {movie && (
          <MoviePageHeader
            REACT_APP_TMDB_IMAGE_URL={REACT_APP_TMDB_IMAGE_URL}
            backdrop={movie.backdrop_path}
            title={movie.title}
          />
        )}
        {movie && (
          <div className="moviepage__titlecontainer">
            <h1 className="moviepage__title">{movie.title}</h1>
          </div>
        )}
        <div className="moviepage__postercontainer">
          {movie && (
            <MovieDetails
              REACT_APP_TMDB_IMAGE_URL={REACT_APP_TMDB_IMAGE_URL}
              movie={movie}
              credits={credits}
            />
          )}
        </div>

        {videos && (
          <div className="moviepage__titlecontainer">
            <h2 className="moviepage__title">Videos</h2>
          </div>
        )}
        {videos && <MovieTrailers videos={videos} />}
      </div>
      <PageSidebar />
    </div>
  );
};

export default MoviePage;
