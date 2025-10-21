import { Link } from "react-router-dom";
import git_icon from "../assets/git_icon.png";
import li_icon from "../assets/li_icon.png";
import urls from "../url";

function Home() {
  return (
    <div className="home">
      <section className="intro">Hello! I am</section>
      <section className="name">Komal Borhade</section>
      <section className="fly_links">
        <Link target="_blank" to={urls.github}>
          <img src={git_icon} alt="git" />
        </Link>

        <Link target="_blank" to={urls.linkedin}>
          <img src={li_icon} alt="li" />
        </Link>
      </section>
    </div>
  );
}

export default Home;
