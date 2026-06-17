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
    title: 'National UI/UX Winner',
    detail: 'Top 2 of 211 Teams · 560 Participants',
    featured: true,
  },
  {
    emoji: '👨‍💼',
    title: 'ISC Chairman',
    detail: '200+ Active Members',
    featured: false,
  },
  {
    emoji: '🎤',
    title: 'Guest Speaker',
    detail: '',
    featured: false,
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
        {/* heavier overlay — content is the star, not the background */}
        <div className="pointer-events-none absolute inset-0 bg-bg-base/75" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/85 via-bg-base/40 to-bg-base/90" />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-28 lg:flex-row lg:items-center lg:gap-16"
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
              mb-8 inline-flex items-center gap-2.5 rounded-full
              border border-border-highlight/30 bg-bg-surface/15
              px-4 py-2 backdrop-blur-xl
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="font-roboto text-[0.7rem] font-medium uppercase tracking-[0.16em] text-text-muted">
              Available for work
            </span>
          </motion.div>

          {/* Name — Priority 1 */}
          <motion.h1
            variants={fadeUp(0.08)}
            className="
              font-poetsen font-extrabold tracking-[-0.04em]
              leading-[0.88] text-text-light
              text-[3rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.2rem] xl:text-[6rem]
            "
          >
            <span className="block">TOHARI</span>
            <span className="block mt-1 bg-gradient-to-r from-text-light via-accent-glow/90 to-secondary bg-clip-text text-transparent">
              MAOLANA
            </span>
          </motion.h1>

          {/* Role Label — Priority 2 */}
          <motion.p
            variants={fadeUp(0.16)}
            className="
              mt-5 font-roboto text-[0.8rem] sm:text-[0.85rem]
              font-medium uppercase tracking-[0.14em] text-accent-glow
            "
          >
            Frontend Engineer{' '}
            <span className="text-border-highlight/60 mx-1">·</span>{' '}
            Community Builder{' '}
            <span className="text-border-highlight/60 mx-1">·</span>{' '}
            Tech Enthusiast
          </motion.p>

          {/* Value Proposition — Priority 4 */}
          <motion.p
            variants={fadeUp(0.24)}
            className="
              mt-5 max-w-lg font-roboto text-[0.95rem] sm:text-base
              leading-relaxed text-text-muted
            "
          >
            I build products that ship, lead teams that grow,
            and write code that scales — specializing in{' '}
            <span className="font-medium text-text-light/90">React</span>,{' '}
            <span className="font-medium text-text-light/90">modern UI</span>, and{' '}
            <span className="font-medium text-text-light/90">design systems</span>.
          </motion.p>

          {/* CTAs — Priority 5 */}
          <motion.div
            variants={fadeUp(0.32)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="/projects"
              className="
                group relative inline-flex items-center justify-center overflow-hidden
                rounded-full bg-gradient-to-r from-primary via-secondary to-accent-glow
                px-7 py-3 font-roboto text-[0.8rem] font-semibold uppercase tracking-[0.1em]
                text-text-light shadow-[0_12px_40px_rgba(82,39,255,0.3)]
                will-change-transform
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0-5 5m5-5H6" />
                </motion.svg>
              </span>
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40">
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
              </span>
            </motion.a>

            {/* Secondary CTA — Resume */}
            <motion.a
              href="/resume-tohari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full border border-border-highlight/40
                px-6 py-3 font-roboto text-[0.8rem] font-medium uppercase tracking-[0.1em]
                text-text-muted transition-colors duration-300
                hover:border-accent-glow/50 hover:text-text-light
                will-change-transform
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links Row — Priority 6 */}
          <motion.div
            variants={fadeUp(0.4)}
            className="mt-7 flex items-center gap-1 font-roboto text-[0.78rem] text-text-muted/60"
          >
            {socials.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="mx-2 select-none">·</span>}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative transition-colors duration-200 hover:text-text-light
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

        {/* ═══ RIGHT COLUMN (40%) — Editorial Constellation ═══ */}
        <div className="relative flex w-full items-center justify-center lg:w-[42%] lg:min-h-[520px]">

          {/* Decorative accent line — vertical thin stroke */}
          <motion.div
            variants={fadeRight(0.1)}
            className="
              hidden lg:block absolute left-0 top-[10%] bottom-[10%]
              w-px bg-gradient-to-b from-transparent via-accent-glow/25 to-transparent
            "
          />

          {/* Photo — slightly offset from center for asymmetry */}
          <motion.div
            variants={fadeRight(0.15)}
            className="relative lg:mr-6"
          >
            {/* Ambient glow — soft, not a ring */}
            <div
              className="absolute -inset-8 opacity-40 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(199,125,255,0.35) 0%, rgba(82,39,255,0.15) 50%, transparent 70%)',
              }}
            />
            <img
              src="/images/profile.webp"
              alt="Mohamad Tohari Maolana"
              className="
                relative z-10 h-40 w-40 sm:h-44 sm:w-44 lg:h-52 lg:w-52
                rounded-full object-cover
                border border-white/[0.06]
                shadow-[0_24px_80px_rgba(0,0,0,0.6)]
              "
              loading="eager"
            />
          </motion.div>

          {/* ── Achievement Fragments — scattered typographic elements ── */}

          {/* Fragment 1: National Winner — top-right, largest */}
          <motion.div
            variants={fadeRight(0.3)}
            animate={{ y: [0, -7, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            className="
              absolute top-[6%] right-[2%]
              sm:top-[8%] sm:right-[4%]
              lg:top-[4%] lg:right-[-2%]
              text-right
            "
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-glow shadow-[0_0_12px_rgba(199,125,255,0.8)] mb-2 ml-auto" />
            <p className="font-mono text-[0.875rem] font-bold uppercase tracking-[0.08em] text-text-light/90">
              National Winner
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.04em] text-accent-glow/70 mt-0.5">
              Top 2 / 211 Teams
            </p>
          </motion.div>

          {/* Fragment 2: ISC Chairman — bottom-right */}
          <motion.div
            variants={fadeRight(0.4)}
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } }}
            className="
              absolute bottom-[14%] right-[4%]
              sm:bottom-[16%] sm:right-[6%]
              lg:bottom-[12%] lg:right-[0%]
              text-right
            "
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(146,77,191,0.7)] mb-2 ml-auto" />
            <p className="font-mono text-[0.875rem] font-semibold uppercase tracking-[0.06em] text-text-light/75">
              ISC Chairman
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.04em] text-text-muted/50 mt-0.5">
              200+ Members
            </p>
          </motion.div>

          {/* Fragment 3: Guest Speaker — bottom-left, smallest, faintest */}
          <motion.div
            variants={fadeRight(0.5)}
            animate={{ y: [0, -4, 0] }}
            transition={{ y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
            className="
              absolute bottom-[6%] left-[6%]
              sm:bottom-[8%] sm:left-[8%]
              lg:bottom-[24%] lg:left-[2%]
            "
          >
            <span className="inline-block h-1 w-1 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(115,56,160,0.5)] mb-1.5" />
            <p className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.06em] text-text-light/50">
              Guest Speaker
            </p>
          </motion.div>

          {/* Fragment 4: Decorative number — large faded stat */}
          <motion.div
            variants={fadeRight(0.55)}
            className="
              absolute top-[2%] left-[8%]
              lg:top-[8%] lg:left-[4%]
              select-none pointer-events-none
            "
          >
            <span className="font-mono text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-black text-text-light/[0.03] leading-none tracking-tighter">
              02
            </span>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
