import "./main.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Lessons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8001/api/lessons");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">LECONS</h1>
        <div className="line"></div>
        <input placeholder="Cherche..." className="lecon-input"></input>
      </div>
      <div className="courses">
        {data.map((lesson) => {
          return (
            <a
              href={lesson.link}
              className="course"
              key={lesson._id}
              target="_blank"
              rel="noopener noreferrer"
            >
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
