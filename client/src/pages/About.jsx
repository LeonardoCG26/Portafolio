import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";


export default function About() {
  return (
    <section className="min-h-screen bg-black text-white pt-40 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            
            {/* Glow sutil detrás */}
            <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-3xl" />

            {/* Imagen */}
            <img
              src={profile}
              alt="Leonardo Cortés"
              className="relative w-96 h-[420px] object-cover object-top rounded-3xl grayscale hover:grayscale-0 transition duration-500"
            />

            {/* Borde sutil */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-10">
            About{" "}
            <span className="italic font-serif text-gray-400">
              Me.
            </span>
          </h1>

          <p className="text-2xl text-gray-200 leading-relaxed mb-6">
            I'm Leonardo — a Software Engineer with a strong foundation in backend development and structured problem solving.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-12">
            My experience ranges from corporate technical environments to mobile application development, 
            where I’ve worked on modular architectures, business logic implementation and requirement analysis.
            I'm currently focused on growing as a backend developer, building scalable systems and writing clean, maintainable code.
            </p>


          {/* BOTONES */}
          <div className="flex flex-wrap gap-6">
            <a
              href="/CV.pdf"
              download
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              Download CV
            </a>

            <a
              href="mailto:cortes.leonardo.1dv@gmail.com"
              className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition"
            >
              Let’s Work Together
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

