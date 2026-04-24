'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const awards = [
  'Top 2 – National UI/UX Design Competition',
  'Youngest IT Expert',
  'IDCamp 2024 Graduate – React Developer',
  'Certified Competence- Computer Programming',
  'AWS Backend Academy Graduate – 2025',
  'Head of Informatics Study Club, Universitas Pamulang',
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

const RecognitionSection = () => {
  return (
    <section className="relative bg-bg-base py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          subheading="Recognition & Awards"
          heading="Highlights of My Journey"
          description="A snapshot of achievements and milestones that shaped my growth as a developer and designer."
          align="center"
        />

        <motion.div
          className="
            mt-8 sm:mt-10 lg:mt-12
            flex flex-wrap justify-center
            gap-2 sm:gap-3 lg:gap-4
            max-w-5xl mx-auto
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="
                inline-flex items-center gap-2
                rounded-full border border-border-highlight/40
                bg-bg-surface/20 
                px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3
                text-[0.65rem] xs:text-[0.7rem] sm:text-xs lg:text-sm
                font-roboto font-medium
                tracking-[0.08em] sm:tracking-[0.1em] lg:tracking-[0.12em]
                uppercase
                text-text-light/80
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
                hover:border-accent-glow/60 hover:bg-bg-surface/30
                hover:text-text-light
                transition-colors duration-300
                will-change-transform
              "
            >
              <span 
                className="
                  h-1.5 w-1.5 sm:h-2 sm:w-2 
                  rounded-full bg-accent-glow 
                  shadow-[0_0_12px_rgba(199,125,255,0.7)] sm:shadow-[0_0_18px_rgba(199,125,255,0.9)]
                  flex-shrink-0
                " 
              />
              <span className="whitespace-nowrap leading-tight">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionSection;
