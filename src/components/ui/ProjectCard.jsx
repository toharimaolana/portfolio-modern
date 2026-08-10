import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const ProjectCard = React.memo(({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative w-full flex flex-col cursor-pointer"
    >
      <RouterLink
        to={`/projects/${project.id}`}
        className="block w-full group focus:outline-none focus-visible:ring-1 focus-visible:ring-text-light/50 rounded-2xl"
        aria-label={`View project details for ${project.title}`}
      >
        {/* Clean Image Container */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-bg-surface/20 border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 shadow-md">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-500"
          />

          {/* Minimal Top-Right Action Arrow */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-9 h-9 rounded-full bg-bg-base/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-text-muted group-hover:text-accent-glow group-hover:border-accent-glow/40 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Typographic Content Below Image */}
        <div className="pt-4 flex flex-col">
          {/* Category & Year */}
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-wider text-text-muted mb-1">
            <span>{project.category}</span>
            {project.year && <span>{project.year}</span>}
          </div>

          {/* Title */}
          <h3 className="font-poetsen text-xl sm:text-2xl font-bold uppercase text-text-light tracking-tight group-hover:text-accent-glow transition-colors duration-300 leading-snug">
            {project.title}
          </h3>

          {/* Minimal Tech Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2.5">
              {project.tags.slice(0, 3).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[0.68rem] bg-white/[0.03] border border-white/[0.08] px-2.5 py-0.5 rounded-full text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </RouterLink>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
