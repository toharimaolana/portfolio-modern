'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ======= NOISE OVERLAY COMPONENT ======= */

const Noise = ({
  patternRefreshInterval = 2,   // semakin kecil = animasi lebih sering
  patternAlpha = 20             // 0–255, semakin besar = noise lebih kuat
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 320; // cukup kecil, di-scale pakai CSS supaya ringan

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
        data[i] = value;       // R
        data[i + 1] = value;   // G
        data[i + 2] = value;   // B
        data[i + 3] = patternAlpha; // A
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
      className="relative flex items-center justify-center bg-bg-base py-16 px-4"
      aria-labelledby="cta-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          relative w-full max-w-5xl
          rounded-[32px]
          px-6 py-10 sm:px-10 sm:py-14
          overflow-hidden
        "
        style={{
          // palette: primary, secondary, accent-glow
          background:
            'linear-gradient(135deg, #7338A0 0%, #924DBF 45%, #C77DFF 100%)',
        }}
      >
        {/* animated grain noise */}
        <Noise patternRefreshInterval={3} patternAlpha={26} />

        {/* soft glow pakai palete */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-40%] blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(circle at 15% 0%, rgba(237,233,254,0.25) 0, transparent 55%), radial-gradient(circle at 85% 100%, rgba(10,10,15,0.9) 0, transparent 55%)',
          }}
        />

        {/* content */}
        <div className="relative flex flex-col items-center text-center gap-3 sm:gap-4">
          <h2
            id="cta-heading"
            className="
              font-poetsen
              text-[2.2rem] sm:text-[2.6rem] md:text-[3rem]
              leading-tight tracking-tight
              text-text-light
            "
          >
            Let&apos;s build something great
          </h2>

          <p
            className="
              max-w-xl
              font-roboto text-sm sm:text-base md:text-lg
              text-text-light/85
            "
          >
            Open to collaborations, freelance projects, and frontend UI/UX work.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:mohamad.tohari@example.com"
              className="
                inline-flex items-center justify-center
                rounded-full bg-text-light px-6 sm:px-8 py-2.5 sm:py-3
                font-roboto text-sm sm:text-base font-semibold text-bg-base
                shadow-[0_14px_35px_rgba(10,10,15,0.6)]
                transition-transform duration-200 ease-out
                hover:-translate-y-0.5 active:translate-y-0
              "
            >
              Contact Me
            </a>

            <a
              href="/projects"
              className="
                inline-flex items-center justify-center
                rounded-full border border-text-light/30
                px-6 sm:px-7 py-2.5
                font-roboto text-sm sm:text-base font-medium text-text-light/90
                backdrop-blur-sm
                transition-all duration-200 ease-out
                hover:bg-text-light/10 hover:border-text-light/60
              "
            >
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
