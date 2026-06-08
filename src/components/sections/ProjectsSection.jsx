import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { projectService } from '../../services/projectService';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let active = true;
    const loadProjects = async () => {
      setLoading(true);
      const data = await projectService.getProjects();
      if (active) {
        setProjects(data);
        setLoading(false);
      }
    };
    loadProjects();
    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(() => {
    const allCategories = projects.map(project => project.category);
    return ['All', ...new Set(allCategories)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <section className="relative w-full bg-bg-base overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <SectionHeader
          subheading="My Portfolio"     
          heading="Recent Works"
          description="A curated selection of projects demonstrating my technical expertise in modern web development and user-centric UI/UX design."
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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-[400px] w-full rounded-3xl bg-white/5 animate-pulse border border-border-highlight/10 flex flex-col justify-end p-8 space-y-4"
              >
                <div className="h-6 w-24 bg-white/10 rounded-full" />
                <div className="h-8 w-2/3 bg-white/10 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
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
        )}

        {!loading && filteredProjects.length === 0 && (
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