import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About({ theme, content }) {
  const isDark = theme === "dark";

  const sectionClasses = isDark
    ? "text-white"
    : "text-slate-900 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(246,240,232,1)_55%)]";
  const accentClasses = isDark ? "text-slate-400" : "text-slate-500";
  const introClasses = isDark ? "text-slate-200" : "text-slate-800";
  const bodyClasses = isDark ? "text-slate-400" : "text-slate-600";
  const frameGlowClasses = isDark ? "bg-blue-500/10" : "bg-amber-300/25";
  const frameRingClasses = isDark ? "ring-white/10" : "ring-slate-900/10";
  const primaryButtonClasses = isDark
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-slate-900 text-white hover:bg-slate-800";
  const secondaryButtonClasses = isDark
    ? "border-white/20 hover:bg-white/5"
    : "border-slate-900/15 hover:bg-slate-900/5";

  return (
    <section
      className={`min-h-screen pt-44 sm:pt-40 px-4 sm:px-6 pb-10 transition-colors duration-500 ${sectionClasses}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-fit">
            <div
              className={`absolute -inset-6 blur-3xl rounded-3xl transition-colors duration-500 ${frameGlowClasses}`}
            />
            <img
              src={profile}
              alt={content.profileAlt}
              className="relative w-[300px] sm:w-96 h-[360px] sm:h-[420px] object-cover object-top rounded-3xl grayscale hover:grayscale-0 transition duration-500"
            />
            <div
              className={`absolute inset-0 rounded-3xl ring-1 transition-colors duration-500 ${frameRingClasses}`}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8 sm:mb-10">
            {content.lead}{" "}
            <span className={`italic font-serif transition-colors duration-500 ${accentClasses}`}>
              {content.accent}
            </span>
          </h1>

          <p
            className={`text-lg sm:text-2xl leading-relaxed mb-5 sm:mb-6 transition-colors duration-500 ${introClasses}`}
          >
            {content.intro}
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 transition-colors duration-500 ${bodyClasses}`}
          >
            {content.body}
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href={content.cvHref}
              download={content.cvDownloadName}
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base rounded-full font-medium transition ${primaryButtonClasses}`}
            >
              {content.downloadLabel}
            </a>

            <a
              href="mailto:cortes.leonardo.1dv@gmail.com"
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base border rounded-full transition ${secondaryButtonClasses}`}
            >
              {content.contactLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
