import "./About.css";
import { Link } from "react-router-dom";

function Lessons() {
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">A PROPOS</h1>
        <div className="line"></div>
      </div>
      <div className="content">
        <p>
          Nous sommes une équipe qui va vous aidez à apprendre les mathématiques
          sans aucun problème, offrant des leçons gratuite pour tout public.
          Nous offrant aussi des séries d'éxercices qui peuvent vous aidez.Vous
          pouvez accédez à touts ses offres à partir du siteweb{" "}
          <Link to="/">GeniusAZ.com</Link> .
        </p>
      </div>
    </div>
  );
}

export default Lessons;
