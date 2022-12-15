// Styles
import "./PageSearchForm.scss";

function PageSearchForm({ handleSearchFieldChange }) {
  return (
    <>
      <form className="searchform" autoComplete="off">
        <input
          placeholder="Search for a movie..."
          className="searchform__input"
          name="searchform"
          onChange={handleSearchFieldChange}
        ></input>
      </form>
    </>
  );
}

export default PageSearchForm;
