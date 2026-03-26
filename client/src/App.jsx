import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InteractiveHero from "./components/InteractiveHero";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import { siteContent } from "./content/siteContent";

const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem(THEME_KEY) || "dark";
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem(LANGUAGE_KEY) || "en";
  });

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
    document.body.style.backgroundColor = theme === "dark" ? "#05070d" : "#f6f0e8";
    document.body.style.color = theme === "dark" ? "#f8fafc" : "#0f172a";
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const content = siteContent[language];
  const appClasses =
    theme === "dark"
      ? "min-h-screen bg-[#05070d] text-white"
      : "min-h-screen bg-[#f6f0e8] text-slate-900";

  return (
    <div className={`${appClasses} transition-colors duration-500`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
        identity={content.identity}
        nav={content.nav}
      />
      <Routes>
        <Route
          path="/"
          element={<InteractiveHero theme={theme} content={content.hero} />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage theme={theme} content={content.projectsPage} />}
        />
        <Route
          path="/about"
          element={<About theme={theme} content={content.about} />}
        />
      </Routes>
    </div>
  );
}
