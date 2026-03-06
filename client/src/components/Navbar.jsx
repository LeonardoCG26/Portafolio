import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: "Work", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white px-4 py-4 sm:px-6 md:px-8 md:py-6">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Link to="/" className="hover:opacity-80 transition min-w-0 justify-self-start">
          <div className="leading-tight">
            <h1 className="text-base sm:text-lg font-medium tracking-tight truncate">
              Leonardo Cortés García
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 italic font-serif tracking-wide">
              Software Engineer
            </p>
          </div>
        </Link>

        <div className="relative flex shrink-0 justify-self-center bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isHovered = hovered === index;

            return (
              <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 sm:px-7 py-2.5 text-xs sm:text-base tracking-wide"
              >
                {(isHovered || isActive) && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white/60 rounded-full blur-sm" />
                  </motion.div>
                )}

                <span className="relative z-10 text-white">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="justify-self-end w-0 sm:w-24 md:w-28" />
      </div>
    </nav>
  );
}
