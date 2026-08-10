'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import LiquidEther from '../ui/LiquidEther';

/* ─── animation variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ─── achievement data ─── */
const achievements = [
  {
    emoji: '🏆',
    title: 'National Winner',
    detail: 'Top 2 of 211 Teams',
  },
  {
    emoji: '👨‍💼',
    title: 'ISC Chairman',
    detail: '200+ Members',
  },
  {
    emoji: '🎤',
    title: 'Guest Speaker',
    detail: 'Informatics Seminars',
  },
];

/* ─── social links ─── */
const socials = [
  { label: 'GitHub', href: 'https://github.com/toharimaolana' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/toharimaolana' },
  { label: 'Email', href: 'mailto:toharimaolana@gmail.com' },
];

/* ═══════════════════════════════════════════════ */
/*  HERO SECTION — "The Split Authority"          */
/* ═══════════════════════════════════════════════ */
const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg-base"
      aria-label="Hero — Mohamad Tohari Maolana"
    >
      {/* ── Background: toned-down LiquidEther ── */}
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
            autoSpeed={0.4}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 bg-bg-base/75" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/85 via-bg-base/40 to-bg-base/90" />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-20 sm:py-24 lg:py-28 lg:flex-row lg:items-center lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* ═══ LEFT COLUMN (60%) — Identity & Copy ═══ */}
        <div className="flex w-full flex-col items-start lg:w-[58%]">

          {/* Status Pill */}
          <motion.div
            variants={fadeUp(0)}
            className="
              mb-6 sm:mb-8 inline-flex items-center gap-2.5 rounded-full
              border border-white/[0.08] bg-white/[0.03]
              px-4 py-1.5
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[0.68rem] sm:text-[0.7rem] font-medium uppercase tracking-wider text-text-muted">
              Available for work
            </span>
          </motion.div>

          {/* Name — Priority 1 */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="
              font-poetsen font-extrabold tracking-[-0.04em]
              leading-[0.9] text-text-light
              text-[2.6rem] min-[380px]:text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.4rem] xl:text-[6rem]
            "
          >
            <span className="block">TOHARI</span>
            <span className="block mt-1 text-accent-glow/80">
              MAOLANA
            </span>
          </motion.h1>

          {/* Role Label — Priority 2 */}
          <motion.p
            variants={fadeUp(0.16)}
            className="
              mt-4 sm:mt-5 font-roboto text-[0.75rem] sm:text-[0.85rem]
              font-medium uppercase tracking-[0.12em] sm:tracking-[0.14em] text-text-muted
            "
          >
            Frontend Engineer{' '}
            <span className="text-white/20 mx-1">·</span>{' '}
            Community Builder{' '}
            <span className="text-white/20 mx-1">·</span>{' '}
            Tech Enthusiast
          </motion.p>

          {/* Value Proposition — Priority 4 */}
          <motion.p
            variants={fadeUp(0.24)}
            className="
              mt-4 sm:mt-5 max-w-lg font-roboto text-sm sm:text-base
              leading-relaxed text-text-muted
            "
          >
            I ship production-grade <span className="font-medium text-text-light/90">React interfaces</span>, led a 200+ member tech community, and won National UI/UX recognition — turning complex concepts into robust, scalable web products.
          </motion.p>

          {/* CTAs — Priority 5 */}
          <motion.div
            variants={fadeUp(0.32)}
            className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <motion.a
              href="/projects"
              className="
                group relative inline-flex items-center justify-center overflow-hidden
                rounded-full bg-white px-7 py-3.5 sm:py-3 font-mono text-xs uppercase tracking-[0.12em]
                text-bg-base font-semibold hover:bg-text-light transition-all duration-300 shadow-md w-full sm:w-auto
              "
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>

            {/* Secondary CTA — Resume */}
            <motion.a
              href="/resume-tohari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full border border-white/[0.08] bg-white/[0.02]
                px-6 py-3.5 sm:py-3 font-mono text-xs uppercase tracking-[0.12em]
                text-text-muted transition-colors duration-300
                hover:border-white/20 hover:text-text-light w-full sm:w-auto
              "
              whileTap={{ scale: 0.97 }}
            >
              <svg className="h-3.5 w-3.5 text-accent-glow/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links Row — Priority 6 */}
          <motion.div
            variants={fadeUp(0.4)}
            className="mt-6 sm:mt-7 flex items-center gap-1 font-roboto text-[0.75rem] sm:text-[0.78rem] text-text-muted/70 flex-wrap"
          >
            {socials.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="mx-2 select-none text-white/20">·</span>}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative transition-colors duration-200 hover:text-text-light py-1
                    after:absolute after:bottom-0 after:left-0
                    after:h-px after:w-0 after:bg-accent-glow/50
                    after:transition-all after:duration-300 hover:after:w-full
                  "
                >
                  {s.label}
                </a>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ═══ RIGHT COLUMN (40%) — Portrait & Floating Badges (DESKTOP ONLY) ═══ */}
        <div className="hidden lg:flex relative w-full flex-col items-center justify-center lg:w-[42%]">

          {/* Decorative accent line */}
          <motion.div
            variants={fadeRight(0.1)}
            className="
              hidden lg:block absolute left-0 top-[10%] bottom-[10%]
              w-px bg-gradient-to-b from-transparent via-accent-glow/25 to-transparent
            "
          />

          {/* Photo */}
          <motion.div
            variants={fadeRight(0.15)}
            className="relative"
          >
            {/* Ambient glow */}
            <div
              className="absolute -inset-6 opacity-40 blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(199,125,255,0.35) 0%, rgba(82,39,255,0.15) 50%, transparent 70%)',
              }}
            />
            <img
              src="/images/profile.webp"
              alt="Mohamad Tohari Maolana"
              className="
                relative z-10 h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52
                rounded-full object-cover
                border border-white/[0.08]
                shadow-[0_24px_80px_rgba(0,0,0,0.6)]
              "
              loading="eager"
            />
          </motion.div>

          {/* Mobile Clean Badge Strip / Desktop Constellation */}
          <motion.div
            variants={fadeRight(0.3)}
            className="mt-6 sm:mt-0 lg:mt-0 flex flex-wrap sm:block justify-center gap-3 w-full sm:w-auto"
          >
            {/* Fragment 1: National Winner */}
            <div className="sm:absolute sm:top-[4%] sm:right-[2%] lg:top-[4%] lg:right-[-2%] text-center sm:text-right bg-white/[0.02] sm:bg-transparent border sm:border-0 border-white/[0.08] p-2.5 sm:p-0 rounded-xl">
              <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-accent-glow shadow-[0_0_12px_rgba(199,125,255,0.8)] mb-2 ml-auto" />
              <p className="font-mono text-[0.78rem] sm:text-[0.875rem] font-bold uppercase tracking-[0.08em] text-text-light/90">
                National Winner
              </p>
              <p className="font-mono text-[0.7rem] sm:text-[0.75rem] tracking-[0.04em] text-accent-glow/80 mt-0.5">
                Top 2 / 211 Teams
              </p>
            </div>

            {/* Fragment 2: ISC Chairman */}
            <div className="sm:absolute sm:bottom-[12%] sm:right-[4%] lg:bottom-[12%] lg:right-[0%] text-center sm:text-right bg-white/[0.02] sm:bg-transparent border sm:border-0 border-white/[0.08] p-2.5 sm:p-0 rounded-xl">
              <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(146,77,191,0.7)] mb-2 ml-auto" />
              <p className="font-mono text-[0.78rem] sm:text-[0.875rem] font-semibold uppercase tracking-[0.06em] text-text-light/80">
                ISC Chairman
              </p>
              <p className="font-mono text-[0.7rem] sm:text-[0.75rem] tracking-[0.04em] text-text-muted/60 mt-0.5">
                200+ Members
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
