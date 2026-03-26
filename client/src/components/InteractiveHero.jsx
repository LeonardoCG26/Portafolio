import { motion } from "framer-motion";

export default function InteractiveHero({ theme, content }) {
  const isDark = theme === "dark";

  const sectionClasses = isDark
    ? "text-white"
    : "text-slate-900 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(246,240,232,1)_60%)]";
  const glowClasses = isDark ? "bg-blue-500/10" : "bg-amber-300/30";
  const shellClasses = isDark
    ? "bg-black/40 border-white/10 shadow-2xl"
    : "bg-white/75 border-slate-900/10 shadow-[0_30px_80px_rgba(15,23,42,0.12)]";
  const accentClasses = isDark ? "text-slate-300" : "text-slate-600";
  const bodyClasses = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      className={`relative min-h-screen flex items-start sm:items-center justify-center px-4 sm:px-6 pt-44 sm:pt-28 pb-10 transition-colors duration-500 ${sectionClasses}`}
    >
      <div
        className={`absolute w-[800px] h-[800px] rounded-full blur-3xl transition-colors duration-500 ${glowClasses}`}
      />

      <div
        className={`relative backdrop-blur-xl rounded-2xl max-w-5xl w-full p-7 sm:p-12 border transition-colors duration-500 ${shellClasses}`}
      >
        <div className="flex gap-2 mb-8 sm:mb-10">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight"
        >
          {content.lineOne}
          <br />
          {content.lineTwo}{" "}
          <span className={`italic font-serif transition-colors duration-500 ${accentClasses}`}>
            {content.accent}
          </span>
        </motion.h1>

        <p
          className={`mt-6 sm:mt-8 text-base sm:text-lg max-w-2xl leading-relaxed transition-colors duration-500 ${bodyClasses}`}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}
