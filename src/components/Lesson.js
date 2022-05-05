import "./Lesson.css";
import { useParams } from "react-router-dom";

function Lesson() {
  let { id } = useParams();
  const lessons = [
    {
      name: "Théorème de Pythagore",
      link: "theoremedepythagore",
      level: "3 A.S.C.",
      images: {
        big: "https://drive.google.com/file/d/1GXoCX75nRdv7rI0nltDbj2BJRjOakOkz/view?usp=sharing",
        medium:
          "https://lh3.googleusercontent.com/gfZXlBrSO8yPjESZ9qFuL9l18G9iTTNM5bJ7g-Yx65ZOE1PKnW1iOPJYz8SsvMaEZa_x7xPgJWVcskVjJxC0XUIoaqiq154QGHuOannpPLotWiohjG4Evn4opxrR7oKHulo5-T67yJptE-71V02ON6GeKQOzh1QrvnowwIS83prbtzbtO6IG4cmgibW7ck15VibozWoxgn0Q3WDYjlgh-xONOme8mB_DspdLROwMI8WEdHlmsewyrtzlxj-YDP25Oo9gfxikeAxv_3MGaBxXgHMeX5KVlD2Aii70YobF4N5NPXULkEZwqgfiQivXJMDyv-rN9iQiqhh0kzaXh1vf5Zq0JIZwMfESeFQx2cpAmgQjk73k8pRM3easSZt92GqHGv37LUGFpGegt_heJKVQQmZBD-1xpGBi5r-5M9sNwFSZmqS978BVeJUWEK2yaWMmb-ZS5LLwrMdzjB3vGvW2L0A_9UjZtmGmXtSoOElgdNHq3R6mUnxI64tNlMtydMUxqxXQZIfWu1NgOhjysCVJOxQ44uX4ax_9ShU9vZYEyp-B27b2RuVEY2TPCHEMdvuJoOxXKP1W-0mQA-4YHV91YgxBlKPVi5h_gz7Eu5daWPGQvWXOXZTLIt87JTMYnfPYzYlKD_039KKCaqBHBEV_lirPSLx5n54dDCrZy2awbK4IsPUoQXzT1rKaZDsoUBoL3TWvsKuOTfeicTWHu53-pmzgo-Bu4tt0zQuUei3e6KgyXVotE4L4bBUbYrLJcQqzroW0Pc4fBD9PrNXbftjXfLJBSJAzeIy8Jzg=w518-h657-no?authuser=0",
        small:
          "https://lh3.googleusercontent.com/gfZXlBrSO8yPjESZ9qFuL9l18G9iTTNM5bJ7g-Yx65ZOE1PKnW1iOPJYz8SsvMaEZa_x7xPgJWVcskVjJxC0XUIoaqiq154QGHuOannpPLotWiohjG4Evn4opxrR7oKHulo5-T67yJptE-71V02ON6GeKQOzh1QrvnowwIS83prbtzbtO6IG4cmgibW7ck15VibozWoxgn0Q3WDYjlgh-xONOme8mB_DspdLROwMI8WEdHlmsewyrtzlxj-YDP25Oo9gfxikeAxv_3MGaBxXgHMeX5KVlD2Aii70YobF4N5NPXULkEZwqgfiQivXJMDyv-rN9iQiqhh0kzaXh1vf5Zq0JIZwMfESeFQx2cpAmgQjk73k8pRM3easSZt92GqHGv37LUGFpGegt_heJKVQQmZBD-1xpGBi5r-5M9sNwFSZmqS978BVeJUWEK2yaWMmb-ZS5LLwrMdzjB3vGvW2L0A_9UjZtmGmXtSoOElgdNHq3R6mUnxI64tNlMtydMUxqxXQZIfWu1NgOhjysCVJOxQ44uX4ax_9ShU9vZYEyp-B27b2RuVEY2TPCHEMdvuJoOxXKP1W-0mQA-4YHV91YgxBlKPVi5h_gz7Eu5daWPGQvWXOXZTLIt87JTMYnfPYzYlKD_039KKCaqBHBEV_lirPSLx5n54dDCrZy2awbK4IsPUoQXzT1rKaZDsoUBoL3TWvsKuOTfeicTWHu53-pmzgo-Bu4tt0zQuUei3e6KgyXVotE4L4bBUbYrLJcQqzroW0Pc4fBD9PrNXbftjXfLJBSJAzeIy8Jzg=w518-h657-no?authuser=0",
      },
    },
  ];
  let lesson = lessons.find((lesson) => lesson.link === id);
  return (
    <div className="lesson">
      <img src={lesson.images["big"]} alt="leçon" className="lg" />
      <img src={lesson.images["medium"]} alt="leçon" className="me" />
      <img src={lesson.images["small"]} alt="leçon" className="mi" />
    </div>
  );
}

export default Lesson;
