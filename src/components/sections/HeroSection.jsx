'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import LiquidEther from '../ui/LiquidEther';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-bg-base"
      aria-label="Hero section for a creative web developer and designer"
    >
      {/* Background: Liquid Ether */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-bg-base/60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/80 via-transparent to-bg-base/90" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Glassmorphism label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-border-highlight/40 bg-bg-surface/20 px-5 py-2.5 text-xs font-roboto font-medium uppercase tracking-[0.18em] text-text-light/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)] will-change-transform will-change-opacity"
        >
          <span className="h-2 w-2 rounded-full bg-accent-glow shadow-[0_0_18px_rgba(199,125,255,0.9)]" />
          <span>Hello, I'm Mohamad Tohari Maolana👋</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={itemVariants}
          className="mt-10 space-y-3"
        >
          <h1 className="font-poetsen font-black tracking-tighter leading-[0.85] text-text-light text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]">
            <span className="block text-text-light/90">
              CREATIVE
            </span>

            {/* Glassmorphism gradient span */}
            <span className="relative mt-1 inline-block">
              {/* glow behind */}
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-primary/40 via-secondary/35 to-accent-glow/40 blur-3xl opacity-70" />
              {/* glass layer */}
              <span className="inline-flex items-center rounded-3xl border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-xl shadow-[0_18px_90px_rgba(0,0,0,0.65)]">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent-glow bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </span>
            </span>

            <span className="mt-1 block text-text-light/80">
              &amp; DESIGNER
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl font-roboto text-sm sm:text-base md:text-lg leading-relaxed text-text-muted"
        >
          Crafting clean, high‑performance digital experiences with modern front‑end stacks.
          Specializing in{' '}
          <span className="text-accent-glow font-semibold">Web Development</span>,{' '}
          <span className="text-secondary font-semibold">UI/UX Design</span>, and{' '}
          <span className="text-primary font-semibold">Creative Interfaces</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <motion.a
            href="/projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent-glow px-8 py-3 font-roboto text-sm font-semibold text-text-light shadow-[0_18px_60px_rgba(0,0,0,0.6)] will-change-transform"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View my work"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </motion.svg>
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40">
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
            </span>
          </motion.a>

          {/* Secondary CTA (glass) */}
          <motion.a
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border-highlight/60 bg-bg-surface/30 px-8 py-3 font-roboto text-sm font-semibold text-text-light/90 backdrop-blur-xl will-change-transform"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Get in touch"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-secondary/0 to-accent-glow/0 transition-colors duration-300 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent-glow/10" />
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-accent-glow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                />
              </svg>
              Get in Touch
            </span>
          </motion.a>
        </motion.div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
