// Styles
import "./StreamingLinks.scss";

// Libraries
import { useEffect } from "react";

function StreamingLinks({ imdb_id }) {
  const REACT_APP_JW_KEY = process.env.REACT_APP_JW_KEY;

  useEffect(() => {
    if (imdb_id) {
      setTimeout(() => {
        const jwscript = document.createElement("script");
        jwscript.async = true;
        jwscript.src = "https://widget.justwatch.com/justwatch_widget.js";
        document.body.appendChild(jwscript);
      }, [5000]);
    }
  }, [imdb_id]);

  return (
    <>
      <div className="just-watch-widget-af">
        <div
          data-jw-widget
          data-api-key={REACT_APP_JW_KEY}
          data-object-type="movie"
          data-id={imdb_id}
          data-id-type="imdb"
          data-offer-label="price"
          data-theme="light"
          data-scale="1"
          className="data-jw-widget"
        ></div>
        <div className="just-watch-link-container">
          <a
            className="jw-link"
            data-original="https://www.justwatch.com/ca"
            href="https://www.justwatch.com"
          >
            Streaming offers, powered by
            <span className="jw-logo">JustWatch</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default StreamingLinks;
