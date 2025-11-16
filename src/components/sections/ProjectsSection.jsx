import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// PERBAIKAN JALUR IMPOR (RELATIF)
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = projects.map(project => project.category);
    return ['All', ...new Set(allCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="relative w-full py-24 bg-bg-base overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <SectionHeader
          subheading="My Portfolio"
          heading="Recent Works"
          description="Berikut adalah beberapa proyek pilihan yang menunjukkan keahlian saya dalam web development dan UI/UX design."
          align="center"
        />

        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-5 py-2 rounded-full font-roboto font-medium text-sm md:text-base transition-colors duration-300 z-10 ${
                selectedCategory === category
                  ? 'text-text-light'
                  : 'text-text-muted hover:text-text-light'
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategoryHighlight"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-muted font-roboto mt-8"
          >
            Tidak ada proyek ditemukan di kategori ini.
          </motion.p>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;