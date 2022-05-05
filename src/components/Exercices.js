import "./Exercices.css";
import { Link } from "react-router-dom";

function Lessons() {
  const exercices = [
    {
      name: "Théorème de Pythagore",
      link: "https://drive.google.com/file/d/1F1XXeMqJhY7Sf64NxteZ5sugGSApiBHN/view?usp=sharing",
      level: "3 A.S.C.",
      images: {
        big: "/bexercice.png",
        medium: "/mexercice.png",
        small: "/sexercice.png",
      },
    },
  ];
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">EXERCICES</h1>
        <div className="line"></div>
        <input placeholder="Cherche..." className="lecon-input"></input>
      </div>
      <div className="courses">
        {exercices.map((exercice, id) => {
          return (
            <a href={exercice.link} className="course" key={id} target="_blank">
              <div className="course-info">
                <h3 className="course-title">{exercice.name}</h3>
                <h4 className="course-level">{exercice.level}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Lessons;
