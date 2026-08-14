'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial Typography System — SectionHeader
 * Redesigned to give each section category its own visual personality
 * inspired by Awwwards, UI8, and Behance.
 * Supports: 'projects', 'credentials', 'cta', and 'default' variants.
 */
const SectionHeader = ({ 
  variant = 'default',
  subheading = '', 
  heading = '',
  description = '',
  number = ''
}) => {

  // Variant: SELECTED PROJECTS (Brutalist Awwwards Split Layout)
  if (variant === 'projects') {
    return (
      <div className="relative w-full flex flex-col md:flex-row md:items-end md:justify-between border-b border-border-highlight/20 pb-8 mb-12">
        <div className="flex flex-col items-start max-w-xl">
          {/* Section Number & Category */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[0.7rem] sm:text-xs tracking-[0.2em] text-accent-glow uppercase"
          >
            <span>{number || '// 01'}</span>
            <span className="h-px w-8 bg-accent-glow/40" />
            <span>{subheading || 'PORTFOLIO'}</span>
          </motion.div>
          
          {/* Main Title - Massive, Tight tracking */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-poetsen text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] uppercase text-text-light mt-3 leading-none"
          >
            {heading || 'SELECTED PROJECTS'}
          </motion.h2>
        </div>

        {/* Supporting description - Right aligned on desktop */}
        {description && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-roboto text-sm text-text-muted max-w-sm mt-4 md:mt-0 md:text-right leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    );
  }

  // Variant: CREDENTIALS & PROOF (Newspaper Editorial Constellation Layout)
  if (variant === 'credentials') {
    return (
      <div className="relative w-full flex flex-col items-center text-center pb-10 mb-8">
        {/* Background Giant Watermark Number */}
        {number && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 select-none pointer-events-none z-0">
            <span className="font-poetsen text-[8rem] sm:text-[10rem] font-black text-text-light/[0.02] leading-none tracking-tighter">
              {number}
            </span>
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center">
          {/* Italicized/Stretched Tag */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.25em] uppercase text-secondary mb-3"
          >
            {subheading || 'CREDENTIALS & PROOF'}
          </motion.span>

          {/* Title - Clean, Bold, Underlined minimally */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poetsen text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] uppercase text-text-light leading-tight"
          >
            {heading}
          </motion.h2>

          {/* Description as a focused intro paragraph */}
          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto text-sm sm:text-base text-text-muted max-w-xl mt-4 leading-relaxed border-t border-border-highlight/10 pt-4"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    );
  }

  // Variant: TESTIMONIALS / ENDORSEMENTS
  if (variant === 'testimonials') {
    return (
      <div className="relative w-full flex flex-col items-center text-center pb-8 mb-6">
        {number && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 select-none pointer-events-none z-0">
            <span className="font-poetsen text-[8rem] sm:text-[10rem] font-black text-text-light/[0.02] leading-none tracking-tighter">
              {number}
            </span>
          </div>
        )}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 font-mono text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.25em] uppercase text-accent-glow mb-3"
          >
            <span>{subheading || 'LINKEDIN RECOMMENDATIONS'}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poetsen text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] uppercase text-text-light leading-tight"
          >
            {heading}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-roboto text-sm sm:text-base text-text-muted max-w-xl mt-3 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    );
  }

  // Variant: CTA / CONTACT (Full-width Awwwards Immersive Layout)
  if (variant === 'cta') {
    return (
      <div className="relative w-full flex flex-col items-center text-center py-6 mb-6">
        {/* Subtitle */}
        <motion.span 
          initial={{ opacity: 0, tracking: '0.1em' }}
          whileInView={{ opacity: 1, tracking: '0.3em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-accent-glow/95 mb-6"
        >
          {subheading || 'GET IN TOUCH'}
        </motion.span>

        {/* Large screen-wide typographic statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-poetsen text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.05em] uppercase text-text-light leading-[0.95] max-w-4xl"
        >
          {heading}
        </motion.h2>

        {/* Tiny description */}
        {description && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-sm sm:text-base text-text-light/80 max-w-lg mt-6 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    );
  }

  // Variant: DEFAULT
  return (
    <div className="relative w-full flex flex-col items-center text-center py-6">
      {subheading && (
        <span className="font-mono text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase text-text-muted mb-2">
          {subheading}
        </span>
      )}
      {heading && (
        <h2 className="font-poetsen text-3xl sm:text-4xl font-extrabold tracking-tighter uppercase text-text-light">
          {heading}
        </h2>
      )}
      {description && (
        <p className="font-roboto text-xs sm:text-sm text-text-muted max-w-md mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
