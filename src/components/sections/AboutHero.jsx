'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Smooth editorial parallax offsets
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  const transitionConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg-base pt-24 pb-16 lg:pt-32"
      aria-labelledby="about-heading"
    >
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Blur Ambient */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* LEFT - Typographic Canvas (Col Span 7) */}
          <motion.article
            className="flex flex-col justify-center lg:col-span-7 z-10"
            style={{ y: textY }}
          >
            <div className="space-y-6 sm:space-y-8">
              
              {/* Category Info */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transitionConfig}
                className="flex items-center gap-3 font-mono text-[0.7rem] sm:text-xs tracking-[0.25em] text-accent-glow uppercase"
              >
                <span>// IDENTITY ARCHIVE</span>
                <span className="h-px w-6 bg-accent-glow/30" />
                <span className="text-text-muted">6.2138° S, 106.8272° E</span>
              </motion.div>

              {/* Massive Editorial Header */}
              <div className="space-y-1">
                <motion.h1
                  id="about-heading"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitionConfig, delay: 0.1 }}
                  className="font-poetsen text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-[-0.05em] text-text-light uppercase"
                >
                  Mohamad <br />
                  Tohari <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-glow via-secondary to-primary">
                    Maolana
                  </span>
                </motion.h1>
              </div>

              {/* Tagline Paragraph with Newspaper Divider */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.2 }}
                className="border-t border-border-highlight/10 pt-6 max-w-lg"
              >
                <p className="font-roboto text-base sm:text-lg leading-relaxed text-text-muted">
                  A front-end engineer and community builder dedicated to turning design concepts into 
                  <span className="text-text-light font-medium"> premium digital interfaces</span> through robust clean code and visual excellence.
                </p>
              </motion.div>

              {/* Engineering Details (Coordinate Metadata Table) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex gap-8 text-[0.65rem] sm:text-[0.7rem] font-mono tracking-widest text-text-muted/60 uppercase"
              >
                <div>
                  <span className="block text-accent-glow/80">Role</span>
                  <span className="mt-0.5 block text-text-light/70 font-semibold">Frontend Dev</span>
                </div>
                <div>
                  <span className="block text-accent-glow/80">Community</span>
                  <span className="mt-0.5 block text-text-light/70 font-semibold">ISC Chair</span>
                </div>
                <div>
                  <span className="block text-accent-glow/80">Focus</span>
                  <span className="mt-0.5 block text-text-light/70 font-semibold">UI/UX & React</span>
                </div>
              </motion.div>

            </div>
          </motion.article>

          {/* RIGHT - Offset Brutalist Portrait Frame (Col Span 5) */}
          <motion.figure
            className="relative lg:col-span-5 flex items-center justify-center lg:justify-end z-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Absolute shifting outline backdrop for brutalist aesthetic */}
            <div className="relative group cursor-crosshair">
              
              {/* Outer shifting frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-accent-glow/30 bg-accent-glow/[0.02] group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0" />
              
              {/* Image box */}
              <div className="relative aspect-[4/5] w-[280px] sm:w-[340px] overflow-hidden rounded-2xl bg-bg-surface border border-border-highlight/30 z-10 shadow-2xl">
                <img
                  src="/images/profile.webp"
                  alt="Mohamad Tohari Maolana profile portrait"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle overlay shading */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/40 via-transparent to-transparent z-20" />
                
                {/* Internal inset border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 z-30" />
              </div>

              {/* Floating Monospace Tag */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-bg-base/90 border border-border-highlight/20 px-3.5 py-1.5 rounded-lg font-mono text-[0.6rem] sm:text-xs text-text-light/80 z-20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                LOC: <span className="text-accent-glow font-bold">UNPAM, ID</span>
              </div>
            </div>
          </motion.figure>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
