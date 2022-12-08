// Styles
import "./PageMenu.scss";

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
            <a className="pagemenu__link" href="https://awesomefriday.ca">
              Trailers Page Home
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageMenu;
