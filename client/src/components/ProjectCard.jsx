import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  theme,
  ctaLabel,
  placeholderLabel,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === "dark";

  const cardClasses = isDark
    ? "from-gray-900 to-gray-800"
    : "from-white to-[#efe5d5] border border-slate-900/10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]";
  const titleClasses = isDark ? "text-white" : "text-slate-900";
  const bodyClasses = isDark ? "text-slate-300" : "text-slate-600";
  const tagClasses = isDark
    ? "bg-blue-600/30 text-blue-100"
    : "bg-slate-900/8 text-slate-700";
  const buttonClasses = isDark
    ? "bg-blue-600 text-white"
    : "bg-slate-900 text-white";
  const placeholderClasses = isDark
    ? "bg-white/10 text-white/60"
    : "bg-slate-900/8 text-slate-500";
  const shineClasses = isDark
    ? "from-blue-500/10"
    : "from-amber-400/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className={`relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br transition-colors duration-500 ${cardClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="h-44 sm:h-48 overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="p-5 sm:p-6">
        <motion.h3
          className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-500 ${titleClasses}`}
          animate={{ x: isHovered ? 5 : 0 }}
        >
          {title}
        </motion.h3>

        <p
          className={`text-sm sm:text-base mb-4 leading-relaxed transition-colors duration-500 ${bodyClasses}`}
        >
          {description}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm transition-colors duration-500 ${tagClasses}`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {projectUrl ? (
          <motion.a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
            }}
            className={`mt-6 inline-flex w-full sm:w-auto items-center justify-center px-6 py-2 text-sm sm:text-base rounded-lg font-medium shadow-lg transition-colors duration-500 ${buttonClasses}`}
          >
            {ctaLabel}
          </motion.a>
        ) : (
          <span
            className={`mt-6 inline-flex w-full sm:w-auto items-center justify-center px-6 py-2 text-sm sm:text-base rounded-lg font-medium shadow-lg transition-colors duration-500 ${placeholderClasses}`}
          >
            {placeholderLabel}
          </span>
        )}
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 bg-gradient-to-tr ${shineClasses} to-transparent pointer-events-none`}
        />
      )}
    </motion.div>
  );
}
