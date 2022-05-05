import "./main.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Lessons() {
  const [data, setData] = useState([]);
  const [globaldata, setGlobalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://geniusaz.herokuapp.com/api/lessons"
        );
        setGlobalData(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const search = (e) => {
    const value = e.target.value;
    const ndata = globaldata.filter((exercice) => {
      const name = exercice.name.toLowerCase();
      return name.startsWith(value.toLowerCase());
    });
    setData(ndata);
  };
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">LECONS</h1>
        <div className="line"></div>
        <input
          placeholder="Cherche..."
          className="lecon-input"
          onChange={search}
        ></input>
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
