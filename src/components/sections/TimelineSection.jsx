'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';

const defaultJourneyItems = [
  {
    year: "2023 - PRESENT",
    title: "Undergraduate Studies & Professional Growth",
    description: "Pursuing a Bachelor's degree in Informatics Engineering at Universitas Pamulang while actively working as a freelance Front-End Developer on various projects. Currently leading a learning community to foster collaborative growth in tech.",
    tags: ["University", "Front-End Dev", "Leadership"],
  },
  {
    year: "2023",
    title: "Certified Competence",
    description: "Earned the National Certificate of Competence (LSP P1) in Programming, validating industry-standard skills upon graduating from vocational high school.",
    tags: ["Certification", "Achievement", "Milestone"],
  },
  {
    year: "2020 - 2023",
    title: "Vocational Foundation in Software Engineering",
    description: "Started the coding journey at SMK YP IPPI Petojo, specializing in Software Engineering (RPL). Built a strong foundation in web development and programming fundamentals.",
    tags: ["High School", "RPL", "Coding Roots"],
  }
];

const defaultSectionProps = {
  subheading: "My Journey",
  heading: "Experience",
  description: "A curated timeline of my professional growth, highlighting key milestones and high-impact solutions delivered in web engineering."
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TimelineSection = ({ 
  items = defaultJourneyItems, 
  sectionProps = defaultSectionProps 
}) => {
  return (
    <section 
      className="relative w-full bg-bg-base overflow-hidden"
      aria-label="Professional journey timeline"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] z-0" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
        
        {/* Section Header */}
        <SectionHeader
          variant="projects"
          number="03"
          subheading={sectionProps.subheading || "MY JOURNEY"}
          heading={sectionProps.heading || "Experience"}
          description={sectionProps.description}
        />

        {/* Orchestrated Stagger Grid Journal Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 sm:mt-12 border-b border-border-highlight/10"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 sm:py-12 border-t border-border-highlight/10 transition-colors duration-300 hover:bg-white/[0.015] will-change-transform cursor-default"
            >
              
              {/* Left Column: Period & Archive Label (Col Span 4) */}
              <div className="lg:col-span-4 flex flex-col items-start justify-start">
                <span className="font-mono text-[0.68rem] sm:text-xs tracking-[0.2em] text-text-muted mb-1.5 uppercase">
                  // PERIOD ARCHIVE
                </span>
                <h3 className="font-poetsen text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-accent-glow uppercase leading-none group-hover:text-text-light transition-colors duration-300">
                  {item.year}
                </h3>
              </div>

              {/* Right Column: Title, Description & Tags (Col Span 8) */}
              <div className="lg:col-span-8 flex flex-col justify-start space-y-4">
                
                {/* Title */}
                <h4 className="font-poetsen text-xl sm:text-2xl font-bold tracking-tight text-text-light group-hover:text-accent-glow transition-colors duration-300">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="font-roboto text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {/* Modern Glassmorphism Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full border border-border-highlight/20 bg-bg-surface/10 px-3.5 py-1 text-xs font-mono font-medium text-text-muted transition-all duration-300 group-hover:border-accent-glow/30 group-hover:text-text-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Forward Indicator */}
        <motion.div
          className="mt-16 flex items-center gap-3 text-text-muted font-mono text-xs uppercase tracking-[0.15em]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow"></span>
          </span>
          <span>KEEP MOVING FORWARD // TO BE CONTINUED</span>
        </motion.div>

      </div>
    </section>
  );
};

export default TimelineSection;
