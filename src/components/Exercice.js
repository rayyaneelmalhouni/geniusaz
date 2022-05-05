import "./Lesson.css";
import { useParams } from "react-router-dom";

function Exercice() {
  let { id } = useParams();
  const exercices = [
    {
      name: "Théorème de Pythagore",
      link: "theoremedepythagore",
      level: "3 A.S.C.",
      images: {
        big: "https://live.staticflickr.com/65535/52051216020_ec44340028_z.jpg",
        medium:
          "https://live.staticflickr.com/65535/52050756273_8c20922488.jpg",
        small:
          "https://live.staticflickr.com/65535/52049668882_ae47fc4cf9_z.jpg",
      },
    },
  ];
  let exercice = exercices.find((exercice) => exercice.link === id);
  return (
    <div className="lesson">
      <img src={exercice.images["big"]} alt="exercice" className="lg" />
      <img src={exercice.images["medium"]} alt="exercice" className="me" />
      <img src={exercice.images["small"]} alt="exercice" className="mi" />
    </div>
  );
}

export default Exercice;
