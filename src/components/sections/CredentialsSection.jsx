'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

// Self-contained Animated Counter
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      description: 'Continuously building & growing in web development',
      color: 'text-accent-glow',
    },
    {
      number: 20,
      suffix: '+',
      title: 'Projects Built',
      description: 'Personal, academic & freelance projects shipped',
      color: 'text-secondary',
    },
    {
      number: 200,
      suffix: '+',
      title: 'Community Members',
      description: 'Led as Chairman of Informatics Study Club (ISC)',
      color: 'text-primary',
    },
  ];

  const recognitionItems = [
    'Top 2 – National UI/UX Design Competition',
    'IDCamp 2024 Graduate – React Developer',
    'IDCamp 2025 Graduate – AI Engineer',
    'AWS Backend Academy Graduate – 2025',
    'Guest Speaker at Tech Communities',
    'Chairman of Informatics Study Club (ISC)',
    'Certified Competence - Computer Programming',
  ];

  return (
    <section className="relative w-full bg-bg-base pt-28 sm:pt-32 lg:pt-40 pb-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
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

        {/* 2-Column Split Layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column (Stats) — 5 Cols */}
          <div className="space-y-8 lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-poetsen text-xl sm:text-2xl font-black tracking-tighter uppercase text-text-light/90 mb-2">
              By the Numbers
            </h3>
            
            <div className="space-y-8">
              {statsData.map((stat, idx) => (
                <div key={idx} className="flex gap-6 items-start border-l border-border-highlight/20 pl-6">
                  <div className={`font-mono text-4xl sm:text-5xl font-black ${stat.color} leading-none flex-shrink-0 min-w-[90px]`}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div>
                    <h4 className="font-roboto text-base font-semibold text-text-light">
                      {stat.title}
                    </h4>
                    <p className="mt-1 font-roboto text-sm text-text-muted leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Recognition Badge Pills) — 7 Cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-poetsen text-xl sm:text-2xl font-black tracking-tighter uppercase text-text-light/90 mb-6">
              Milestones & Certifications
            </h3>

            <div className="flex flex-wrap gap-3">
              {recognitionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="
                    inline-flex items-center gap-2.5
                    rounded-full border border-border-highlight/30
                    bg-bg-surface/20
                    px-4 py-2.5
                    text-[0.7rem] sm:text-xs
                    font-roboto font-medium
                    tracking-[0.1em]
                    uppercase
                    text-text-light/80
                    backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                    hover:border-accent-glow/50 hover:bg-bg-surface/30
                    hover:text-text-light
                    transition-all duration-300
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-glow shadow-[0_0_8px_rgba(199,125,255,0.8)] flex-shrink-0" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
