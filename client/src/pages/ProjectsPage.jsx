import { motion } from "framer-motion";
import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "TaskFlow App",
    description: "Sistema de gestión de tareas con autenticación JWT y MongoDB",
    tags: ["React", "Node.js", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "E-Commerce",
    description: "Tienda online con carrito de compras y pasarela de pago",
    tags: ["Next.js", "Stripe", "Firebase"],
    imageUrl:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Weather Dashboard",
    description: "Aplicación meteorológica con API en tiempo real",
    tags: ["React", "OpenWeather API", "Chart.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1470&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white pt-32 sm:pt-36 px-4 sm:px-6 pb-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Título estilo editorial */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-10 sm:mb-20"
        >
          Selected{" "}
          <span className="italic font-serif text-gray-400">
            Work.
          </span>
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.main>
  );
}
