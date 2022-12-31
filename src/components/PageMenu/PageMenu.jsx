// Styles
import "./PageMenu.scss";

// Libraries
import { NavLink } from "react-router-dom";

const PageMenu = () => {
  return (
    <>
      <div className="pagemenu">
        <ul className="pagemenu__list">
          <li className="pagemenu__item">
            <a className="pagemenu__link" href="https://awesomefriday.ca">
              Back to AwesomeFriday.ca
            </a>
          </li>
          <li className="pagemenu__item">
            <NavLink className="pagemenu__link" to="/">
              Trailers Page Home
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageMenu;
