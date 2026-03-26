import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({
  theme,
  setTheme,
  language,
  setLanguage,
  identity,
  nav,
}) {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const isDark = theme === "dark";

  const navShellClasses = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-slate-900/10 shadow-lg shadow-amber-950/5";
  const navHighlightClasses = isDark ? "bg-white/10" : "bg-slate-900/10";
  const nameClasses = isDark ? "text-white" : "text-slate-900";
  const roleClasses = isDark ? "text-slate-400" : "text-slate-600";
  const controlShellClasses = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white/70 border-slate-900/10 shadow-lg shadow-amber-950/5";
  const inactiveTextClasses = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:px-8 md:py-6">
      <div className="mx-auto w-full max-w-6xl flex flex-col gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <Link to="/" className="hover:opacity-80 transition min-w-0">
          <div className="leading-tight">
            <h1 className={`text-base sm:text-lg font-medium tracking-tight ${nameClasses}`}>
              {identity.name}
            </h1>
            <p className={`text-xs sm:text-sm italic font-serif tracking-wide ${roleClasses}`}>
              {identity.role}
            </p>
          </div>
        </Link>

        <div className="flex items-center justify-between gap-2 lg:contents">
          <div className="flex justify-start lg:justify-center min-w-0">
            <div
              className={`relative flex shrink-0 rounded-full p-1 border backdrop-blur-md sm:p-1.5 ${navShellClasses}`}
            >
              {nav.items.map((item, index) => {
                const isActive = location.pathname === item.path;
                const isHovered = hovered === index;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative px-4 sm:px-7 py-2 text-xs sm:text-base tracking-wide ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {(isHovered || isActive) && (
                      <motion.div
                        layoutId="navHighlight"
                        className={`absolute inset-0 rounded-full ${navHighlightClasses}`}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      >
                        <div
                          className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full blur-sm ${
                            isDark ? "bg-white/60" : "bg-slate-900/30"
                          }`}
                        />
                      </motion.div>
                    )}

                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <div
              className={`inline-flex items-center rounded-full p-1 border backdrop-blur-md ${controlShellClasses}`}
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium transition ${
                  language === "en"
                    ? isDark
                      ? "bg-white text-slate-900"
                      : "bg-slate-900 text-white"
                    : inactiveTextClasses
                }`}
              >
                {nav.languageEn}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`rounded-full px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium transition ${
                  language === "es"
                    ? isDark
                      ? "bg-white text-slate-900"
                      : "bg-slate-900 text-white"
                    : inactiveTextClasses
                }`}
              >
                {nav.languageEs}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? nav.themeLight : nav.themeDark}
              className={`relative inline-flex h-10 sm:h-11 w-[6.9rem] sm:w-32 items-center rounded-full border p-1 transition ${
                controlShellClasses
              }`}
            >
              <span
                className={`absolute left-1 top-1 h-8 sm:h-8 w-[3.15rem] sm:w-[3.6rem] rounded-full transition-transform duration-300 ${
                  isDark
                    ? "translate-x-0 bg-white"
                    : "translate-x-[2.65rem] sm:translate-x-[3.9rem] bg-slate-900"
                }`}
              />
              <span className="relative z-10 flex w-full items-center justify-between px-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em]">
                <span className={isDark ? "text-slate-900" : inactiveTextClasses}>
                  {nav.themeDark}
                </span>
                <span className={!isDark ? "text-white" : inactiveTextClasses}>
                  {nav.themeLight}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
