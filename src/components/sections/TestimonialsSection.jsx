import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    id: 'rec-1',
    name: 'Malika Shakila',
    role: 'Front End Engineer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rian',
    linkedinUrl: 'https://linkedin.com/in/toharimaolana',
    text: 'As Chairman of the Informatics Study Club, Tohari built a strong culture of collaborative learning. He mentored over 200 members, organized tech seminars, and motivated junior developers to build real-world web projects.',
  },
];

// Helper to extract 2-letter uppercase initials from name
const getInitials = (name) => {
  if (!name) return '??';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeTestimonial = testimonialsData[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative w-full bg-bg-base pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 overflow-hidden" aria-label="Testimonials">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full opacity-10 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(199, 125, 255, 0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        {/* Main Grid: Left Headline & CTA | Right Modern Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT COLUMN (5 Cols): Headline & LinkedIn CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-accent-glow mb-4">
                <svg className="h-3.5 w-3.5 text-accent-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>TESTIMONIALS</span>
              </div>

              {/* Headline */}
              <h2 className="font-poetsen text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-text-light leading-[1.05] tracking-tight">
                Endorsements <br /> & Trust
              </h2>

              {/* Description */}
              <p className="mt-5 font-roboto text-sm sm:text-base text-text-muted leading-relaxed max-w-sm">
                Real feedback from senior engineers, hackathon partners, and community members verified on LinkedIn.
              </p>
            </div>

            {/* Bottom Left: Check it out on LinkedIn Link */}
            <div className="mt-8 lg:mt-12 pt-6">
              <a
                href="https://linkedin.com/in/toharimaolana"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em]
                  text-text-light border-b border-text-light/30 pb-1
                  hover:border-accent-glow hover:text-accent-glow transition-all duration-300
                "
              >
                <span>Check it out on LinkedIn</span>
                <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN (7 Cols): Modern Carousel with Fixed Height Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Fixed Height Card Container */}
            <div className="relative h-[320px] sm:h-[300px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="
                    absolute inset-0 flex flex-col justify-between rounded-[2rem]
                    border border-white/[0.08] bg-white/[0.03] p-7 sm:p-9
                    backdrop-blur-xl shadow-2xl overflow-hidden
                  "
                >
                  {/* Author Header Row: Avatar Initials + Name + Role */}
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-full p-0.5 bg-gradient-to-tr from-accent-glow via-primary to-secondary flex-shrink-0 shadow-lg flex items-center justify-center">
                      <div className="h-full w-full rounded-full bg-bg-surface flex items-center justify-center font-mono font-bold text-accent-glow text-sm sm:text-base tracking-wider select-none">
                        {getInitials(activeTestimonial.name)}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-poetsen text-lg sm:text-xl font-bold text-text-light truncate">
                        {activeTestimonial.name}
                      </h3>
                      <p className="font-roboto text-xs text-text-muted/80 truncate mt-0.5">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Recommendation Quote Text with Line Clamp */}
                  <div className="flex-1 overflow-hidden flex flex-col justify-center">
                    <blockquote className="font-roboto text-sm sm:text-base text-text-muted leading-relaxed font-normal line-clamp-4 sm:line-clamp-4">
                      “{activeTestimonial.text}”
                    </blockquote>
                    <div className="mt-2">
                      <a
                        href={activeTestimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent-glow hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        <span>see more on LinkedIn</span>
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Bottom Controls: Arrow buttons & counter */}
            <div className="flex items-center justify-end gap-4 flex-shrink-0">
              <button
                onClick={handlePrev}
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/[0.03] text-text-light
                  hover:border-accent-glow hover:bg-accent-glow/10 hover:text-accent-glow
                  transition-all duration-300 active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow
                "
                aria-label="Previous recommendation"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="font-mono text-sm tracking-wider text-text-muted select-none">
                <span className="text-text-light font-bold">0{currentIndex + 1}</span>
                <span className="mx-1 text-text-muted/40">/</span>
                <span>0{testimonialsData.length}</span>
              </div>

              <button
                onClick={handleNext}
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/[0.03] text-text-light
                  hover:border-accent-glow hover:bg-accent-glow/10 hover:text-accent-glow
                  transition-all duration-300 active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow
                "
                aria-label="Next recommendation"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
