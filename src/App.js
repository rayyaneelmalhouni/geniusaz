import "./App.css";
import {
  Navbar,
  Lesson,
  Home,
  Lessons,
  About,
  Exercices,
  Exercice,
} from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecons" element={<Lessons />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/lecons/:id" element={<Lesson />} />
        <Route path="/exercices/:id" element={<Exercice />} />
      </Routes>
    </Router>
  );
}

export default App;
