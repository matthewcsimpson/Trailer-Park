// Styles
import "./MoviePage.scss";

// Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import MoviePageHeader from "../../components/MoviePageHeader/MoviePageHeader";
import StreamingLinks from "../../components/StreamingLinks/StreamingLinks";
import MovieTrailers from "../../components/MovieTrailers/MovieTrailers";

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
          <>
            <img
              src={`${REACT_APP_TMDB_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="moviepage__poster"
            />
            <div className="moviepage__infocontainer">
              <p className="moviepage__text moviepage__text--title moviepage__text--bold">
                Starring:
              </p>
              <ul className="moviepage__castlist">
                {credits &&
                  credits.cast.slice(0, 10).map((person) => {
                    return (
                      <li key={person.id} className="moviepage__name">
                        {person.name}
                      </li>
                    );
                  })}
              </ul>
              <p className="moviepage__text moviepage__text--title moviepage__text--bold">
                Director:
              </p>
              <ul className="moviepage__castlist">
                {credits &&
                  credits.crew
                    .filter((person) => {
                      return person.job === "Director";
                    })
                    .map((person) => {
                      return (
                        <li key={person.id} className="moviepage__name">
                          {person.name}
                        </li>
                      );
                    })}
              </ul>
              <p className="moviepage__text moviepage__text--title moviepage__text--bold">
                Synopsis:
              </p>
              <ul className="moviepage__castlist">
                <li key={movie.id} className="moviepage__name">
                  {movie.overview}
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      {videos && (
        <div className="moviepage__titlecontainer">
          <h2 className="moviepage__title">Streaming Offers</h2>
        </div>
      )}

      {movie && <StreamingLinks imdb_id={movie.imdb_id} />}
      {videos && (
        <div className="moviepage__titlecontainer">
          <h2 className="moviepage__title">Videos</h2>
        </div>
      )}
      {videos && <MovieTrailers videos={videos} />}
    </div>
  );
};

export default MoviePage;
