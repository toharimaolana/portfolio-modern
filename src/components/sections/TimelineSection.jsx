import React from 'react';
import { motion } from 'framer-motion';

// Import custom UI components
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

// Main Timeline Component
const TimelineSection = () => {
  return (
    <section className="bg-bg-base mx-auto max-w-[1200px] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          animate={{
            background: [
              'radial-gradient(circle, rgba(115, 56, 160, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(199, 125, 255, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(115, 56, 160, 0.3) 0%, transparent 70%)',
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="w-full mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subheading="My Journey"
          heading="Experience"
          description="Jejak langkah dan pencapaian penting dalam perjalanan karir profesional saya."
          align="left"
        />

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line with Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border-highlight/5 via-border-highlight/30 to-border-highlight/5" />
          
          {/* Animated Glow on Line */}
          <motion.div
            className="absolute left-[-1px] top-0 w-1 h-32 bg-gradient-to-b from-accent-glow/80 via-accent-glow/40 to-transparent blur-sm"
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
          <div className="space-y-12">
            {myJourneyItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12 group"
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
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-accent-glow z-10">
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
                  className="absolute left-[7px] top-3 w-8 h-[2px] bg-gradient-to-r from-accent-glow/50 to-border-highlight/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />

                {/* Content Card */}
                <motion.div
                  className="relative bg-bg-surface/20 backdrop-blur-sm border border-border-highlight/20 rounded-2xl p-6 group-hover:border-accent-glow/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(199, 125, 255, 0.15)',
                  }}
                >
                  {/* Card Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-glow/0 via-accent-glow/0 to-accent-glow/0 group-hover:from-accent-glow/5 group-hover:via-accent-glow/0 group-hover:to-accent-glow/5 transition-all duration-300 pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Year Badge */}
                    <motion.span
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-glow/10 border border-accent-glow/30 text-sm font-bold text-accent-glow font-roboto mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.year}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-poetsen text-text-light mt-2 mb-3 group-hover:text-accent-glow transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted font-roboto leading-relaxed max-w-2xl text-base">
                      {item.description}
                    </p>

                    {/* Decorative Bottom Line */}
                    <motion.div
                      className="mt-4 h-1 bg-gradient-to-r from-accent-glow/50 to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* End Marker */}
        <motion.div
          className="relative pl-12 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute left-[-7px] top-0 w-5 h-5 rounded-full border-2 border-accent-glow bg-bg-base flex items-center justify-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-accent-glow"
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
          
          <p className="text-text-muted font-roboto text-sm italic">
            Keep moving forward...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;