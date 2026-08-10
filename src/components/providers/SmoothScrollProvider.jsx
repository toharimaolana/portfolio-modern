import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * SmoothScrollProvider Component
 * Initializes 60-120fps Lenis inertial smooth scroll engine
 * and synchronizes GSAP ScrollTrigger & Framer Motion.
 */
export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with Vercel/Linear-grade smooth scroll physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false, // Maintain native touch feel on mobile
      touchMultiplier: 2,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger updates
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Request Animation Frame Loop for 60-120fps smooth scrolling
    let rafId;
    function updateLenisTime(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(updateLenisTime);
    }

    rafId = requestAnimationFrame(updateLenisTime);

    // Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
