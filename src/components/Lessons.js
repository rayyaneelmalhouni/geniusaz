import "./Exercices.css";
import { Link } from "react-router-dom";

function Lessons() {
  const lessons = [
    {
      name: "Théorème de Pythagore",
      link: "https://drive.google.com/file/d/1GXoCX75nRdv7rI0nltDbj2BJRjOakOkz/view?usp=sharing",
      level: "3 A.S.C.",
      images: {
        big: "/blesson.png",
        medium: "/mlesson.png",
        small: "/slesson.png",
      },
    },
  ];
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">LECONS</h1>
        <div className="line"></div>
        <input placeholder="Cherche..." className="lecon-input"></input>
      </div>
      <div className="courses">
        {lessons.map((lesson, id) => {
          return (
            <a href={lesson.link} className="course" key={id} target="_blank">
              <div className="course-info">
                <h3 className="course-title">{lesson.name}</h3>
                <h4 className="course-level">{lesson.level}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Lessons;
