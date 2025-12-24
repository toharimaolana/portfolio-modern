import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[400px] w-full rounded-3xl overflow-hidden bg-surface cursor-pointer"
    >
      <Link to={`/projects/${project.id}`} className="block h-full w-full relative">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 z-10">
          
          <motion.div
            initial={{ opacity: 0.8, y: 0 }}
            whileHover={{ y: -2 }}
            className="self-start mb-3"
          >
            <span className="inline-block px-3 py-1 text-xs font-roboto font-bold tracking-widest uppercase text-bg-base bg-accent-glow rounded-full">
              {project.category}
            </span>
          </motion.div>

          <h3 className="font-poetsen text-2xl sm:text-3xl text-text-light leading-tight mb-2 drop-shadow-md group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <div className="relative overflow-hidden max-h-0 group-hover:max-h-[100px] transition-all duration-500 ease-in-out">
             <p className="font-roboto text-text-muted text-sm sm:text-base leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {project.description}
            </p>
          </div>

          <motion.div 
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-text-light opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ rotate: 45, backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;