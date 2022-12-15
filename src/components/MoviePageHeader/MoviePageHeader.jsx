function MoviePageHeader({ REACT_APP_TMDB_IMAGE_URL, backdrop, title }) {
  return (
    <div className="moviepage__header">
      <img
        src={`${REACT_APP_TMDB_IMAGE_URL}${backdrop}`}
        alt={title}
        className="moviepage__headerimg"
      />
    </div>
  );
}

export default MoviePageHeader;
