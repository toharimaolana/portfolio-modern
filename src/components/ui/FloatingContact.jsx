'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * FloatingContact — persistent "Get in Touch" pill
 * Fixed to bottom-right corner. Appears after scrolling past the hero.
 * Keeps the contact CTA always reachable without cluttering the hero.
 */
const FloatingContact = () => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      // Show after scrolling ~40% of viewport height
      setVisible(y > window.innerHeight * 0.4);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"
        >
          <Link
            to="/contact"
            className="
              group inline-flex items-center gap-2.5
              rounded-full border border-accent-glow/30
              bg-bg-base/80 px-5 py-2.5
              font-roboto text-[0.75rem] font-semibold uppercase tracking-[0.12em]
              text-accent-glow
              backdrop-blur-2xl
              shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(199,125,255,0.15)]
              transition-all duration-300
              hover:border-accent-glow/60 hover:bg-accent-glow/10
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(199,125,255,0.25)]
            "
          >
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
              />
            </svg>
            Get in Touch
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
