// import StreamingLinks from "../StreamingLinks/StreamingLinks";

function MovieDetails({ REACT_APP_TMDB_IMAGE_URL, movie, credits }) {
  return (
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
        {/* <p className="moviepage__castlist">Streaming Offers:</p> */}
        {/* <StreamingLinks imdb_id={movie.imdb_id} /> */}
      </div>
    </>
  );
}

export default MovieDetails;
