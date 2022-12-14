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
            <NavLink className="pagemenu__link" to="https://awesomefriday.ca">
              Back to AwesomeFriday.ca
            </NavLink>
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
