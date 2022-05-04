import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.svg" className="logo" />
        <Link to="/" className="logo-text">GeniusAZ</Link>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        className="menu-icon"
        onClick={() => setShowLinks(!showLinks)}
      />
      <div className={"links" + (showLinks ? " show" : "")}>
        <Link to="/" className="link" onClick={() => setShowLinks(false)}>
          HOME
        </Link>
        <Link
          to="/apropos"
          className="link"
          onClick={() => setShowLinks(false)}
        >
          A PROPOS
        </Link>
        <Link to="/lecons" className="link" onClick={() => setShowLinks(false)}>
          LECONS
        </Link>
        <Link
          to="/exercices"
          className="link"
          onClick={() => setShowLinks(false)}
        >
          EXERCICES
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
