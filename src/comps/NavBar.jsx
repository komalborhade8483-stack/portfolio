import { Link } from "react-router-dom";
import urls from "../url";
import logo_img from "../assets/komal_logo.png";

function Navbar() {
  return (
    <header>
      <Link className="logo_img_wrapper" to={urls.home}>
        <img className="logo_img" src={logo_img} alt="main-logo" />
      </Link>

      <nav>
        <Link to={urls.home} className="nav_links">Home</Link>
        <Link to={urls.projects} className="nav_links">Projects</Link>
      </nav>

      <button className="resume_button">Resume</button>
    </header>
  );
}

export default Navbar;
