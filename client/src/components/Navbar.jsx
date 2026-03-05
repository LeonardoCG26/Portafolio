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
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-6 z-50 text-white">

      {/* Nombre */}
      <Link to="/" className="hover:opacity-80 transition">
        <div>
          <h1 className="text-lg font-medium tracking-tight">
            Leonardo Cortés García
          </h1>
          <p className="text-sm text-gray-400">
            Software Engineer
          </p>
        </div>
      </Link>

      {/* Botones */}
      <div className="relative flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">

        {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isHovered = hovered === index;

            return (
            <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-6 py-2 text-sm tracking-wide"
            >
                {(isHovered || isActive) && (
                <motion.div
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                >
                    {/* Línea luminosa superior */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white/60 rounded-full blur-sm" />
                </motion.div>
                )}

                <span className="relative z-10 text-white">
                {item.name}
                </span>
            </Link>
            );
        })}

        </div>


      <div className="w-[120px]" />
    </nav>
  );
}
