function MovieTrailers({ videos }) {
  return (
    <div className="moviepage__videoscontainer">
      {videos
        .filter((video) => {
          return (
            video.type.toLowerCase() === "trailer" ||
            video.type.toLowerCase() === "teaser"
          );
        })
        .map((video) => {
          return (
            <div key={video.key} className="moviepage__singlevideocontainer">
              <iframe
                width="560"
                height="315"
                frameBorder="0"
                className="moviepage__singlevideo"
                title={video.title}
                src={`https://www.youtube.com/embed/${video.key}`}
                type="video/mp4"
                allowFullScreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          );
        })}
    </div>
  );
}

export default MovieTrailers;
