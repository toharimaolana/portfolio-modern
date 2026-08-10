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

  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach(p => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, [projects]);

  const categories = useMemo(() => {
    const allCategories = projects.map(project => project.category).filter(Boolean);
    return ['All', ...new Set(allCategories)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <section className="relative w-full bg-bg-base pt-28 sm:pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">

        <SectionHeader
          variant="projects"
          number="01"
          subheading="PORTFOLIO"
          heading="Selected Projects"
          description="A curated selection of projects demonstrating my technical expertise in modern web development and UI/UX design."
        />

        {/* Category Filter Pills — Responsive Horizontal Scroll on Mobile, Centered Flex on Desktop */}
        <div className="relative w-full mb-12 mt-8">
          <div
            className="flex items-center gap-2 overflow-x-auto no-scrollbar px-6 -mx-6 sm:px-0 sm:mx-0 sm:flex-wrap sm:justify-center"
            role="tablist"
            aria-label="Project Categories"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <motion.button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 z-10 border flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-text-light/50 ${isActive
                      ? 'text-accent-glow border-accent-glow/40 bg-accent-glow/10 shadow-lg shadow-accent-glow/5'
                      : 'text-text-muted border-white/10 bg-white/[0.02] hover:border-white/20 hover:text-text-light hover:bg-white/[0.04]'
                    }`}
                >
                  <span>{category}</span>
                  <span className={`text-[0.65rem] px-1.5 py-0.5 rounded-full font-semibold transition-colors ${
                    isActive 
                      ? 'bg-accent-glow/10 text-accent-glow' 
                      : 'bg-white/[0.04] text-text-muted/70'
                  }`}>
                    {categoryCounts[category] || 0}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-col w-full">
                <div className="w-full aspect-[16/10] rounded-2xl bg-bg-surface/30 border border-white/[0.08] animate-pulse" />
                <div className="h-3.5 w-1/3 bg-white/10 rounded mt-4 animate-pulse" />
                <div className="h-6 w-3/4 bg-white/10 rounded mt-2 animate-pulse" />
                <div className="h-4 w-full bg-white/5 rounded mt-2 animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.07,
                },
              }}
              exit={{
                opacity: 0,
                y: -12,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[280px]"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-16 px-6 rounded-3xl bg-bg-surface/10 border border-border-highlight/20 max-w-md mx-auto"
          >
            <p className="text-text-muted font-roboto text-base">
              Tidak ada proyek ditemukan di kategori ini.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;


