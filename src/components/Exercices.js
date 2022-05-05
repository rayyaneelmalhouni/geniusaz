import "./main.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Exercices() {
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://geniusaz.herokuapp.com/api/exercices"
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
    const ndata = globalData.filter((exercice) => {
      const name = exercice.name.toLowerCase();
      return name.startsWith(value.toLowerCase());
    });
    setData(ndata);
  };
  return (
    <div className="lessons">
      <div className="header">
        <h1 className="title">EXERCICES</h1>
        <div className="line"></div>
        <input
          placeholder="Cherche..."
          className="lecon-input"
          onChange={search}
        ></input>
      </div>
      <div className="courses">
        {data.map((exercice) => {
          return (
            <a
              href={exercice.link}
              className="course"
              key={exercice._id}
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default Exercices;
