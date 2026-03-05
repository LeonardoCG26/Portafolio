import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import InteractiveHero from "./components/InteractiveHero";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<InteractiveHero />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
