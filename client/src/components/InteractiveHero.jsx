import { motion } from "framer-motion";

export default function InteractiveHero() {
  return (
    <section className="relative min-h-screen bg-black flex items-start sm:items-center justify-center px-4 sm:px-6 pt-32 sm:pt-24 pb-10 text-white">

      {/* Glow sutil */}
      <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />

      {/* Ventana estilo mac */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-5xl w-full p-7 sm:p-12">
        
        {/* Barra superior macOS */}
        <div className="flex gap-2 mb-8 sm:mb-10">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Texto */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight"
        >
          I build modern
          <br />
          systems &{" "}
          <span className="italic font-serif text-gray-300">
            experiences.
          </span>
        </motion.h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-400 max-w-2xl">
          Full Stack Developer focused on scalable architectures,
          React ecosystems and backend systems. Querétaro,Qro.
        </p>

      </div>
    </section>
  );
}

