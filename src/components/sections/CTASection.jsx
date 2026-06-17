'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ======= NOISE OVERLAY COMPONENT ======= */

const Noise = ({
  patternRefreshInterval = 2,
  patternAlpha = 20
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 320;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    resize();
    loop();

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{
        imageRendering: 'pixelated',
        mixBlendMode: 'soft-light',
      }}
    />
  );
};

/* ======= CTA SECTION ======= */

const CTASection = () => {
  return (
    <section
      className="relative w-full bg-bg-base overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 pt-28 sm:pt-32 lg:pt-40 pb-24">
        
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative w-full rounded-[32px] overflow-hidden 
            border border-border-highlight/25 
            bg-gradient-to-br from-[#7338A0] via-[#924DBF] to-[#C77DFF]
            px-8 py-16 md:px-14 md:py-20 
            shadow-[0_24px_80px_rgba(115,56,160,0.35)] 
            group
          "
        >
          {/* Animated Grain Noise */}
          <Noise patternRefreshInterval={3} patternAlpha={28} />

          {/* Glowing Top Border Accent (Prism Effect) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-text-light/50 to-transparent" />

          {/* Soft Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[-30%] blur-3xl opacity-60"
            style={{
              background:
                'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.2) 0, transparent 50%), radial-gradient(circle at 90% 90%, rgba(10,10,15,0.75) 0, transparent 60%)',
            }}
          />

          {/* Asymmetric Split Columns Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Huge Sora Heading (Col Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <span className="font-mono text-[0.65rem] tracking-[0.25em] text-text-light/70 uppercase block mb-3">
                // INTERSECTING GATEWAY
              </span>
              <h2
                id="cta-heading"
                className="
                  font-poetsen
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-black tracking-[-0.05em] uppercase
                  leading-[0.9] text-text-light
                "
              >
                Have a project<br className="hidden sm:inline" /> in mind?<br /> Let&apos;s talk.
              </h2>
            </div>

            {/* Right Column: Description & Actions (Col Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-6 lg:items-end lg:text-right">
              
              <p className="font-roboto text-sm sm:text-base text-text-light/90 leading-relaxed max-w-sm">
                Open to collaborations, high-impact freelance projects, and modern frontend engineering roles.
              </p>

              {/* Redesigned Actions with Kinetic Underlines & Arrows */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:justify-end">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-between sm:justify-center gap-3 
                    rounded-full bg-text-light px-6 py-3.5 
                    font-roboto text-sm sm:text-base font-semibold text-bg-base 
                    shadow-[0_14px_35px_rgba(10,10,15,0.45)] 
                    transition-all duration-300 hover:bg-white hover:-translate-y-1 active:translate-y-0 
                    group/btn
                  "
                >
                  <span>Contact Me</span>
                  <svg 
                    className="h-4.5 w-4.5 text-bg-base transition-transform duration-300 group-hover/btn:rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>

                <a
                  href="/projects"
                  className="
                    inline-flex items-center justify-between sm:justify-center gap-2 
                    rounded-full border border-text-light/30 
                    px-6 py-3 
                    font-roboto text-sm sm:text-base font-medium text-text-light/95 
                    backdrop-blur-sm 
                    transition-all duration-300 hover:bg-text-light/10 hover:border-text-light/65 hover:-translate-y-1
                  "
                >
                  <span>View Projects</span>
                </a>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
