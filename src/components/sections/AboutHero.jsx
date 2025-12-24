'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg-base"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-2 md:gap-16 lg:px-12">
        
        {/* LEFT - Typography */}
        <motion.article
          className="flex flex-col justify-center"
          style={{ y: textY }}
        >
          <div className="space-y-8">
            
            {/* Label */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <span className="font-roboto text-xs font-medium uppercase tracking-wider text-text-muted">
                Web Developer & UI Designer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              id="about-heading"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="font-poetsen text-5xl font-black leading-[1.1] tracking-tight text-text-light md:text-6xl lg:text-7xl"
            >
              MOHAMAD TOHARI MAOLANA
            </motion.h1>

            {/* Tagline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="max-w-lg font-roboto text-lg leading-relaxed text-text-muted md:text-xl"
            >
              Transforming ideas into{' '}
              <span className="text-text-light">pixel-perfect digital experiences</span>{' '}
              through clean code and thoughtful design.
            </motion.p>

            {/* Line */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="h-px w-24 bg-gradient-to-r from-accent-glow to-transparent"
            />

          </div>
        </motion.article>

        {/* RIGHT - Image */}
        <motion.figure
          className="relative flex items-center justify-center"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-bg-surface">
            <img
              src="/images/profile.webp"
              alt="Mohamad Tohari Maolana - Web Developer and UI Designer"
              className="h-full w-full object-cover"
              loading="eager"
            />
            
            {/* Subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/20 via-transparent to-transparent" />
            
            {/* Border accent */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-border-highlight/20" />
          </div>
        </motion.figure>

      </div>
    </section>
  );
};

export default AboutHero;
