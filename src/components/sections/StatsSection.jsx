'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

// Animated Counter Component - FIXED
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

// Magic Card with Cursor Glow Effect
const MagicCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border border-border-highlight/40 bg-bg-surface/20 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-border-highlight/60 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cursor Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(199, 125, 255, 0.2), transparent 40%)`,
          }}
        />
      )}

      {/* Border Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(199, 125, 255, 0.5), transparent 40%)`,
            maskImage: 'linear-gradient(transparent calc(100% - 1px), black calc(100% - 1px))',
            WebkitMaskImage: 'linear-gradient(transparent calc(100% - 1px), black calc(100% - 1px))',
          }}
        />
      )}

      {/* Glassmorphism Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Main Stats Section Component
const StatsSection = () => {
  const statsData = [
    {
      number: 3,
      suffix: '+',
      title: 'Years Experience',
      description: 'Building digital products',
      color: 'text-accent-glow',
    },
    {
      number: 25,
      suffix: '+',
      title: 'Projects Completed',
      description: 'Delivered with excellence',
      color: 'text-secondary',
    },
    {
      number: 15,
      suffix: '+',
      title: 'Happy Clients',
      description: 'Across various industries',
      color: 'text-primary',
    },
    {
      number: 100,
      suffix: '%',
      title: 'Clean Code',
      description: 'Maintainable & scalable',
      color: 'text-accent-glow',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-bg-base pb-24">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-1/4 top-1/3 h-[600px] w-[600px] rounded-full opacity-15 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(115, 56, 160, 0.5) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        
        {/* Bento Grid Layout - Non-Monoton */}
        <div className="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 - Large */}
          <MagicCard className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full min-h-[300px] flex-col justify-between p-8">
              <div className="space-y-4">
                <div className={`font-poetsen text-7xl font-black md:text-8xl ${statsData[0].color}`}>
                  <AnimatedCounter value={statsData[0].number} suffix={statsData[0].suffix} />
                </div>
                <h3 className="font-roboto text-2xl font-bold text-text-light">
                  {statsData[0].title}
                </h3>
                <p className="max-w-md font-roboto text-base leading-relaxed text-text-muted">
                  {statsData[0].description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent-glow shadow-[0_0_12px_rgba(199,125,255,0.8)]" />
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-accent-glow/50 to-transparent" />
              </div>
            </div>
          </MagicCard>

          {/* Card 2 - Medium */}
          <MagicCard className="lg:col-span-2">
            <div className="flex min-h-[150px] items-center justify-between p-8">
              <div className="space-y-3">
                <div className={`font-poetsen text-6xl font-black ${statsData[1].color}`}>
                  <AnimatedCounter value={statsData[1].number} suffix={statsData[1].suffix} />
                </div>
                <h3 className="font-roboto text-xl font-semibold text-text-light">
                  {statsData[1].title}
                </h3>
                <p className="font-roboto text-sm text-text-muted">
                  {statsData[1].description}
                </p>
              </div>
            </div>
          </MagicCard>

          {/* Card 3 - Small */}
          <MagicCard>
            <div className="min-h-[150px] space-y-4 p-6">
              <div className={`font-poetsen text-5xl font-black ${statsData[2].color}`}>
                <AnimatedCounter value={statsData[2].number} suffix={statsData[2].suffix} />
              </div>
              <h3 className="font-roboto text-lg font-semibold text-text-light">
                {statsData[2].title}
              </h3>
              <p className="font-roboto text-xs leading-relaxed text-text-muted">
                {statsData[2].description}
              </p>
            </div>
          </MagicCard>

          {/* Card 4 - Small */}
          <MagicCard>
            <div className="min-h-[150px] space-y-4 p-6">
              <div className={`font-poetsen text-5xl font-black ${statsData[3].color}`}>
                <AnimatedCounter value={statsData[3].number} suffix={statsData[3].suffix} />
              </div>
              <h3 className="font-roboto text-lg font-semibold text-text-light">
                {statsData[3].title}
              </h3>
              <p className="font-roboto text-xs leading-relaxed text-text-muted">
                {statsData[3].description}
              </p>
            </div>
          </MagicCard>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
