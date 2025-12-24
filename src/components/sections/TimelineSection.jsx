import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';

// Timeline data
const myJourneyItems = [
  {
    year: "2023 - Present",
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

const TimelineSection = () => {
  return (
    <section 
      className="relative mx-auto max-w-[1200px] overflow-hidden bg-bg-base"
      aria-label="Professional journey timeline"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          animate={{
            background: [
              'radial-gradient(circle, rgba(115, 56, 160, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(199, 125, 255, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(115, 56, 160, 0.3) 0%, transparent 70%)',
            ],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full px-6 py-24">
        {/* Section Header */}
        <SectionHeader
          subheading="My Journey"
          heading="Experience"
          description="A curated timeline of my professional growth, highlighting key milestones and high-impact solutions delivered in web engineering."
          align="left"
        />

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-border-highlight/5 via-border-highlight/30 to-border-highlight/5" />

          {/* Animated Glow on Line */}
          <motion.div
            className="absolute left-[-1px] top-0 h-32 w-1 bg-gradient-to-b from-accent-glow/80 via-accent-glow/40 to-transparent blur-sm"
            animate={{
              y: ['0%', '400%', '0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Timeline Items */}
          <ol className="space-y-12">
            {myJourneyItems.map((item, index) => (
              <motion.li
                key={index}
                className="group relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Dot Indicator with Ping Animation */}
                <div className="absolute left-[-5px] top-2 z-10 h-3 w-3 rounded-full bg-accent-glow">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-glow"
                    animate={{
                      scale: [1, 2.5],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                  />

                  {/* Inner Glow */}
                  <div 
                    className="absolute inset-0 rounded-full bg-accent-glow blur-sm"
                    style={{
                      boxShadow: '0 0 15px currentColor',
                    }}
                  />
                </div>

                {/* Connecting Line to Content */}
                <motion.div
                  className="absolute left-[7px] top-3 h-[2px] w-8 bg-gradient-to-r from-accent-glow/50 to-border-highlight/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />

                {/* Content Card - GLASSMORPHISM */}
                <motion.article
                  className="relative rounded-2xl border border-border-highlight/40 bg-bg-surface/20 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-300 will-change-transform group-hover:border-accent-glow/50"
                  whileHover={{ 
                    scale: 1.015,
                    boxShadow: '0 20px 80px rgba(199, 125, 255, 0.2)',
                  }}
                >
                  {/* Card Glow Effect on Hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-glow/0 via-accent-glow/0 to-accent-glow/0 transition-all duration-300 group-hover:from-accent-glow/5 group-hover:via-accent-glow/0 group-hover:to-accent-glow/5" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Year Badge - GLASSMORPHISM */}
                    <motion.time
                      dateTime={item.year}
                      className="inline-flex items-center gap-2 rounded-full border border-border-highlight/40 bg-bg-surface/20 px-3 py-1.5 text-xs font-roboto font-medium uppercase tracking-[0.18em] text-text-light/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] will-change-transform"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="h-4 w-4 text-accent-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-accent-glow">{item.year}</span>
                    </motion.time>

                    {/* Title */}
                    <h3 className="mt-3 font-poetsen text-2xl text-text-light transition-colors duration-300 sm:text-3xl group-hover:text-accent-glow">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl font-roboto text-base leading-relaxed text-text-muted">
                      {item.description}
                    </p>

                    {/* Tags - GLASSMORPHISM */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full border border-border-highlight/30 bg-bg-surface/15 px-3 py-1 text-xs font-roboto font-medium text-text-light/70 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Bottom Line */}
                    <motion.div
                      className="mt-4 h-1 rounded-full bg-gradient-to-r from-accent-glow/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    />
                  </div>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* End Marker */}
        <motion.div
          className="relative mt-12 pl-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute left-[-7px] top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-glow bg-bg-base">
            <motion.div
              className="h-2 w-2 rounded-full bg-accent-glow"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <p className="font-roboto text-sm italic text-text-muted">
            Keep moving forward...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
