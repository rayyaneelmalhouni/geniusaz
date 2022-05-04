import "./Exercices.css";
import { Link } from "react-router-dom";

function Lessons() {
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">EXERCICES</h1>
        <div className="line"></div>
        <input placeholder="Cherche..." className="lecon-input"></input>
      </div>
      <div className="courses">
        <div className="course">
          <div className="course-info">
            <h3 className="course-title">Théorème de pythagore</h3>
            <h4 className="course-level">3 A.S.C.</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-info">
            <h3 className="course-title">Théorème de pythagore</h3>
            <h4 className="course-level">3 A.S.C.</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-info">
            <h3 className="course-title">Théorème de pythagore</h3>
            <h4 className="course-level">3 A.S.C.</h4>
          </div>
        </div>
        <div className="course">
          <div className="course-info">
            <h3 className="course-title">Théorème de pythagore</h3>
            <h4 className="course-level">3 A.S.C.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
