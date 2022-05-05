import "./App.css";
import {
  Navbar,
  Home,
  Lessons,
  About,
  Exercices,
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
      </Routes>
    </Router>
  );
}

export default App;
