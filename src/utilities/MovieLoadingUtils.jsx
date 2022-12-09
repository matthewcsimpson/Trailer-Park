// Libraries
import axios from "axios";

// Variables
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const REACT_APP_TMDB_DISCOVER_MOVIE_URL =
  process.env.REACT_APP_TMDB_DISCOVER_MOVIE_URL;
// const REACT_APP_TMDB_DISCOVER_TV_URL =
//   process.env.REACT_APP_TMDB_DISCOVER_TV_URL;

const REACT_APP_TMDB_SEARCH_URL = process.env.REACT_APP_TMDB_SEARCH_URL;

const REACT_APP_TMDB_MOVIE_BY_ID = process.env.REACT_APP_TMDB_MOVIE_BY_ID;

/**
 * Function that loads the popular movies with a given monetization type.
 *
 * Possible monetization types:
 * - "flatrate" (subscription streaming services)
 * - "ads" (ad supported streaming services)
 * - "rent" (on demand, available to rent)
 * - "buy" (on demand, available to buy)
 *
 * @param {function} setFunc a setState function that sets an array of TMDB movie objects
 * @param {string} monetizeType a string that defines the monetization type.
 */
const loadPopularMovies = (setFunc, monetizeType) => {
  axios
    .all([
      axios.get(
        `${REACT_APP_TMDB_DISCOVER_MOVIE_URL}${monetizeType}&api_key=${API_KEY}&page=1`
      ),
      axios.get(
        `${REACT_APP_TMDB_DISCOVER_MOVIE_URL}${monetizeType}&api_key=${API_KEY}&page=2`
      ),
    ])
    .then(
      axios.spread((first, second) => {
        const firstRes = first.data.results;
        const secondRes = second.data.results;
        setFunc(firstRes.concat(secondRes));
      })
    )
    .catch((err) => console.error(err));
};

/**
 * Function to load movies based on a search query.
 * @param {function} setFunc a setState function for an array of TMDB movie objects
 * @param {string} query a string, the query to be passed into the search
 */
const loadSearchMovies = (setFunc, query) => {
  if (query) {
    axios
      .get(`${REACT_APP_TMDB_SEARCH_URL}${query}&api_key=${API_KEY}`)
      .then((res) => {
        setFunc(res.data.results);
      });
  } else {
    setFunc([]);
  }
};

const getMovieDetailsById = (id, setMovie, setCredits, setVideos) => {
  if (id) {
    axios
      .all([
        axios.get(`${REACT_APP_TMDB_MOVIE_BY_ID}${id}?api_key=${API_KEY}`),
        axios.get(
          `${REACT_APP_TMDB_MOVIE_BY_ID}${id}/credits?api_key=${API_KEY}`
        ),
        axios.get(
          `${REACT_APP_TMDB_MOVIE_BY_ID}${id}/videos?api_key=${API_KEY}`
        ),
      ])
      .then(
        axios.spread((movie, credits, videos) => {
          setMovie(movie.data);
          // console.log(videos.data.results);
          setCredits(credits.data);
          setVideos(videos.data.results);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  }
};

export { loadPopularMovies, loadSearchMovies, getMovieDetailsById };
