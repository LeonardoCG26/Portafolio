import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";

export default function ProjectsPage({ theme, content }) {
  const isDark = theme === "dark";
  const pageClasses = isDark
    ? "text-white"
    : "text-slate-900 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.92),_rgba(246,240,232,1)_58%)]";
  const accentClasses = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen pt-44 sm:pt-40 px-4 sm:px-6 pb-10 transition-colors duration-500 ${pageClasses}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-10 sm:mb-20"
        >
          {content.lead}{" "}
          <span className={`italic font-serif transition-colors duration-500 ${accentClasses}`}>
            {content.accent}
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {content.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <ProjectCard
                {...project}
                theme={theme}
                ctaLabel={content.ctaLabel}
                placeholderLabel={content.placeholderLabel}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
