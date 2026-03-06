import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white pt-32 sm:pt-40 px-4 sm:px-6 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-fit">
            <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-3xl" />
            <img
              src={profile}
              alt="Leonardo Cortes"
              className="relative w-[300px] sm:w-96 h-[360px] sm:h-[420px] object-cover object-top rounded-3xl grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8 sm:mb-10">
            About <span className="italic font-serif text-gray-400">Me.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 leading-relaxed mb-5 sm:mb-6">
            I am Leonardo, a Software Engineer with a strong foundation in backend development and structured problem solving.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-12">
            My experience ranges from corporate technical environments to mobile application development, where I have worked on modular architectures, business logic implementation, and requirement analysis. I am currently focused on growing as a backend developer, building scalable systems, and writing clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="/CV.pdf"
              download
              className="px-6 sm:px-8 py-3 text-sm sm:text-base bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              Download CV
            </a>

            <a
              href="mailto:cortes.leonardo.1dv@gmail.com"
              className="px-6 sm:px-8 py-3 text-sm sm:text-base border border-white/20 rounded-full hover:bg-white/5 transition"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
