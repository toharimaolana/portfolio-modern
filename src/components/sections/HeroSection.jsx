import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import LiquidEther from '../ui/LiquidEther';

/* ─── Animation Variants ─── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const slideUp = (delay = 0) => ({
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ─── Data ─── */
const socials = [
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/toharimaolana' },
  { label: 'GITHUB', href: 'https://github.com/toharimaolana' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/sito.jsx' },
  { label: 'RESUME', href: '/resume-tohari.pdf' },
];

/* ═══════════════════════════════════════════════════════════ */
/*  HERO SECTION — Editorial Statement, Full-Width            */
/* ═══════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-5%' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-bg-base"
      aria-label="Hero — Frontend Engineer Portfolio"
    >
      {/* ── Ambient Background ── */}
      <div className="absolute inset-0 z-0">
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
          autoSpeed={0.3}
          autoIntensity={1.4}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div className="pointer-events-none absolute inset-0 bg-bg-base/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/60 via-transparent to-bg-base" />
      </div>

      {/* ── Main Content ── */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 pt-24 sm:pt-28"
        variants={stagger}
        initial="hidden"
        animate={controls}
      >
        {/* ── Greeting line ── */}
        {/* ── Eyebrow: Role + Status ── */}
        <motion.div variants={fadeIn(0)} className="mb-5 sm:mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.22em] text-accent-glow/60">
            Frontend Engineer
          </span>
          <span className="h-px w-5 bg-border-highlight/20" />
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.2em] text-text-muted/50">
              Open to Work
            </span>
          </div>
        </motion.div>

        {/* ── HEADLINE STATEMENT — The typographic centerpiece ── */}
        <div className="space-y-1 sm:space-y-2">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              variants={slideUp(0)}
              className="font-poetsen font-black uppercase leading-[0.92] tracking-[-0.03em] text-text-light"
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.8rem)' }}
            >
              Crafting{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C77DFF 0%, #924DBF 50%, #7338A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                pixel‑perfect
              </span>
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.h1
              variants={slideUp(0.06)}
              className="font-poetsen font-black uppercase leading-[0.92] tracking-[-0.03em] text-text-light"
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.8rem)' }}
              aria-hidden="true"
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #C77DFF 0%, #924DBF 50%, #7338A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                experiences
              </span>
              {' '}that
            </motion.h1>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden">
            <motion.h1
              variants={slideUp(0.12)}
              className="font-poetsen font-black uppercase leading-[0.92] tracking-[-0.03em] text-text-light"
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.8rem)' }}
              aria-hidden="true"
            >
              inspire & engage.
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom Bar: Divider + Social Links + Description + CTA ── */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-10 sm:pb-14"
        variants={stagger}
        initial="hidden"
        animate={controls}
      >
        {/* Horizontal divider */}
        <motion.div
          variants={fadeIn(0.4)}
          className="mb-6 sm:mb-8 h-px w-full bg-gradient-to-r from-border-highlight/20 via-border-highlight/10 to-transparent"
        />

        {/* Bottom row: 3-column split */}
        <motion.div
          variants={fadeIn(0.5)}
          className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between"
        >
          {/* Left — Social links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-1.5
                  font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.18em]
                  text-text-muted/40 transition-colors duration-300
                  hover:text-text-light
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-glow/50
                "
              >
                {s.label}
                <svg
                  className="h-2.5 w-2.5 -translate-y-px opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right — Description + CTA */}
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-8 md:max-w-lg">
            <p className="font-roboto text-[0.82rem] sm:text-sm leading-[1.7] text-text-muted/70 max-w-sm">
              Architecting high‑performance React applications, leading 200+ developers, and crafting award‑winning digital experiences built for scale.
            </p>

            {/* Primary CTA */}
            <motion.a
              href="/about"
              className="
                group relative inline-flex flex-shrink-0 items-center gap-2 overflow-hidden
                rounded-full border border-white/[0.1] bg-white/[0.02]
                px-6 py-3 sm:py-2.5
                font-mono text-[0.68rem] sm:text-xs uppercase tracking-[0.15em]
                text-text-muted transition-all duration-400
                hover:border-white/20 hover:bg-white hover:text-bg-base
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow/50
              "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 whitespace-nowrap">Know me better</span>
              <svg
                className="relative z-10 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>



      {/* ── Bottom gradient divider ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
