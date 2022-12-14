// Styles
import "./PageHeader.scss";

// misc
import headerimg from "../../assets/AF_Logo-1-Line-Transparent.png";
import headerbg from "../../assets/AF_background.jpg";

const PageHeader = () => {
  return (
    <div className="pageheader">
      <img
        className="pageheader__headerbgimage"
        src={headerbg}
        alt="awesome friday plusses"
      />
      <img src={headerimg} alt="Awesome Friday!" className="pageheader__logo" />
    </div>
  );
};
export default PageHeader;
