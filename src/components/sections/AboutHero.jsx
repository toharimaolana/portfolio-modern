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
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  const transitionConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg-base pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-16"
      aria-labelledby="about-heading"
    >
      {/* Deep Purple Atmospheric Wash */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[30%] -left-[15%] w-[70%] h-[80%] bg-primary/[0.04] rounded-[60%_40%_30%_70%] blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] bg-secondary/[0.03] rounded-[40%_60%_70%_30%] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-center">

          {/* LEFT - Typographic Canvas (Col Span 7) */}
          <motion.article
            className="flex flex-col justify-center lg:col-span-7 z-10"
            style={{ y: textY }}
          >
            <div className="space-y-5 sm:space-y-8">

              {/* Category Info */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transitionConfig}
                className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[0.68rem] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] text-text-muted uppercase"
              >
                <span className="text-accent-glow/80">// IDENTITY ARCHIVE</span>
                <span className="h-px w-4 sm:w-6 bg-secondary/30 hidden min-[360px]:inline-block" />
                <span className="text-text-muted/70">6.2138° S, 106.8272° E</span>
              </motion.div>

              {/* Massive Editorial Header */}
              <div className="space-y-1">
                <motion.h1
                  id="about-heading"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitionConfig, delay: 0.1 }}
                  className="font-poetsen text-4xl min-[380px]:text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.04em] text-text-light uppercase"
                >
                  Mohamad <br />
                  Tohari <br />
                  <span className="text-accent-glow/80">
                    Maolana
                  </span>
                </motion.h1>
              </div>

              {/* Tagline Paragraph with Newspaper Divider */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.2 }}
                className="border-t border-secondary/15 pt-5 sm:pt-6 max-w-lg"
              >
                <p className="font-roboto text-sm sm:text-lg leading-relaxed text-text-muted">
                  Front-end engineer who's led a 200-member tech community, placed Top 2 in a national design competition, and built multi-vendor platforms — translating Figma designs into
                  <span className="text-text-light font-medium"> production-ready React applications</span>.
                </p>
              </motion.div>

            </div>
          </motion.article>

          {/* RIGHT - Editorial Portrait Frame (Col Span 5) */}
          <motion.figure
            className="relative lg:col-span-5 flex items-center justify-center lg:justify-end z-0 pt-4 lg:pt-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group cursor-crosshair">

              {/* Outer stroke frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-secondary/[0.12] bg-primary/[0.02] group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500 z-0" />

              {/* Image box */}
              <div className="relative aspect-[4/5] w-[250px] min-[380px]:w-[280px] sm:w-[340px] overflow-hidden rounded-2xl bg-bg-surface border border-secondary/[0.15] z-10 shadow-2xl">
                <img
                  src="/images/profile.webp"
                  alt="Mohamad Tohari Maolana profile portrait"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle purple-tinted overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-base/70 via-primary/[0.06] to-transparent z-20" />

                {/* Internal inset border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06] z-30" />
              </div>

              {/* Floating Monospace Tag */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-bg-base/95 border border-secondary/[0.15] px-3 py-1.5 rounded-md font-mono text-[0.65rem] sm:text-xs text-text-muted z-20">
                LOC: <span className="text-accent-glow/80 font-semibold">UNPAM, ID</span>
              </div>
            </div>
          </motion.figure>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
