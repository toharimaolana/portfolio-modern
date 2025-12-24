'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const awards = [
  'Top 2 – National UI/UX Design Competition',
  'Youngest IT Expert',
  'IDCamp 2024 Graduate – React Developer',
  'Certified Competence- Computer Programming',
  'Awas Backend Academy Graduate – 2025',
  'Chairperson – Informatics Study Club, Universitas Pamulang',
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const RecognitionSection = () => {
  return (
    <section className="relative bg-bg-base pb-16 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          subheading="Recognition & Awards"
          heading="Highlights of My Journey"
          description="A snapshot of achievements and milestones that shaped my growth as a developer and designer."
          align="center"
        />

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {awards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="
                inline-flex items-center gap-2
                rounded-full border border-border-highlight/40
                bg-bg-surface/20 px-5 py-2.5
                text-[0.72rem] sm:text-xs font-roboto font-medium
                tracking-[0.12em] uppercase
                text-text-light/80
                backdrop-blur-xl
                shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                will-change-transform will-change-opacity
              "
            >
              <span className="h-2 w-2 rounded-full bg-accent-glow shadow-[0_0_18px_rgba(199,125,255,0.9)]" />
              <span className="whitespace-nowrap">
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
