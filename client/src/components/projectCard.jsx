import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ title, description, tags, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con efecto parallax */}
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
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay de contenido */}
      <div className="p-5 sm:p-6">
        <motion.h3 
          className="text-xl sm:text-2xl font-bold text-white mb-2"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tags con efecto de aparición */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-600/30 text-blue-100 rounded-full text-xs sm:text-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

       

        {/* Botón con efecto de profundidad */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(59, 130, 246, 0.8)" 
          }}
          className="mt-6 w-full sm:w-auto px-6 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg font-medium shadow-lg"
        >
          Ver Proyecto
        </motion.button>
      </div>

      {/* Efecto de brillo al hacer hover */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"
        />
      )}
    </motion.div>
  );
}
