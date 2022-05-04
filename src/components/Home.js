import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="main">
        <h1 className="title">GeniusAZ</h1>
        <h3 className="sub-title">Plateforme pédagogique de mathématiques</h3>

        <button className="start-btn">
          <Link to="/lecons" className="anchor">
            Commencez
          </Link>
        </button>
      </div>
      <p className="copyright">
        <small>&copy; Copyright 2022 GeniusAZ.All Rights Reserved.</small>
      </p>
    </div>
  );
}
export default Home;
