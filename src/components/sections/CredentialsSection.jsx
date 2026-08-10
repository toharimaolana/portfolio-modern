'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

// Self-contained Animated Counter
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-10px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setCount(Math.round(latest));
        },
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const CredentialsSection = () => {
  const statsData = [
    {
      number: 3,
      suffix: '+',
      title: 'Years Learning',
      description: 'Building & growing in web development',
    },
    {
      number: 20,
      suffix: '+',
      title: 'Projects Built',
      description: 'Personal, academic & freelance projects shipped',
    },
    {
      number: 200,
      suffix: '+',
      title: 'Community Members',
      description: 'Led as Chairman of Informatics Study Club',
    },
  ];

  const recognitionItems = [
    { id: '01', title: 'Top 2 – Hackathon Competition at Universitas Pamulang' },
    { id: '02', title: 'Top 2 – National UI/UX Design Competition' },
    { id: '03', title: 'IDCamp 2024 Graduate – React Developer' },
    { id: '04', title: 'IDCamp 2025 Graduate – AI Engineer' },
    { id: '05', title: 'AWS Backend Academy Graduate – 2025' },
    { id: '06', title: 'Guest Speaker at Tech Communities' },
    { id: '07', title: 'Chairman of Informatics Study Club (ISC)' },
    { id: '08', title: 'Certified Competence - Computer Programming' },
  ];

  return (
    <section className="relative w-full bg-bg-base pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(146, 77, 191, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <SectionHeader
          variant="credentials"
          number="02"
          subheading="CREDENTIALS & PROOF"
          heading="Growth & Recognition"
          description="A track record of constant learning, community leadership, and verified achievements."
        />

        {/* Unified Editorial Journal Layout */}
        <div className="mt-8 sm:mt-12 border-b border-border-highlight/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 sm:py-10 border-t border-border-highlight/10">

            {/* Left Column (Statistical Metrics) — 4 Cols */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <span className="font-mono text-[0.68rem] sm:text-xs tracking-[0.2em] text-text-muted mb-4 uppercase">
                // STATISTICAL METRICS
              </span>

              <div className="divide-y divide-border-highlight/10 border-b border-border-highlight/10">
                {statsData.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="py-5 sm:py-6 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <h4 className="font-poetsen text-sm sm:text-base font-bold uppercase text-text-light group-hover:text-accent-glow transition-colors">
                        {stat.title}
                      </h4>
                      <p className="mt-0.5 font-roboto text-xs text-text-muted leading-relaxed max-w-[200px]">
                        {stat.description}
                      </p>
                    </div>
                    <div className="font-poetsen text-2xl sm:text-3xl lg:text-4xl font-black text-accent-glow group-hover:text-text-light transition-colors leading-none flex-shrink-0 tracking-tight">
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column (Recognition Archive) — 8 Cols */}
            <div className="lg:col-span-8 flex flex-col justify-start mt-4 lg:mt-0">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[0.68rem] sm:text-xs tracking-[0.2em] text-text-muted uppercase">
                  // RECOGNITION ARCHIVE
                </span>
                <span className="font-mono text-[0.65rem] text-text-muted/60 uppercase tracking-widest hidden sm:inline-block">
                  VERIFIED RECORDS
                </span>
              </div>

              <div className="divide-y divide-border-highlight/10 border-b border-border-highlight/10">
                {recognitionItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 hover:pl-2 cursor-default"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="font-mono text-xs text-accent-glow group-hover:text-text-light transition-colors font-bold flex-shrink-0">
                        {item.id}
                      </span>
                      <span className="font-poetsen text-xs sm:text-base text-text-light group-hover:text-accent-glow transition-colors leading-snug">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
