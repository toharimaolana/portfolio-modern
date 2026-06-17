'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';

// --- DATA ---
const socialLinks = {
  github: 'https://github.com/toharimaolana',
  linkedin: 'https://www.linkedin.com/in/mohamad-tohari-maolana/',
  instagram: 'https://www.instagram.com/toharimaolana',
  email: 'mailto:sitohari01@gmail.com',
};

const FooterSection = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // load likes from localStorage
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('portfolioLikes');
      if (stored) {
        const parsed = JSON.parse(stored);
        setLikes(parsed.count || 0);
        setHasLiked(!!parsed.hasLiked);
      }
    } catch {
      // ignore
    }
  }, []);

  // persist likes
  useEffect(() => {
    try {
      window.localStorage.setItem(
        'portfolioLikes',
        JSON.stringify({ count: likes, hasLiked })
      );
    } catch {
      // ignore
    }
  }, [likes, hasLiked]);

  // scroll button visibility
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <footer className="relative w-full bg-bg-base pt-20 pb-12 overflow-hidden border-t border-border-highlight/10">
      
      {/* Background Glow Accent */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-accent-glow/5 blur-[100px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        {/* Asymmetric Split Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* LEFT COLUMN: Let's Connect CTA (Col Span 7) */}
          <div className="md:col-span-7 space-y-4">
            <span className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] text-accent-glow uppercase block">
              // COLLABORATION INQUIRIES
            </span>
            <h3 className="font-poetsen text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.05em] uppercase text-text-light leading-none">
              Let&apos;s Connect
            </h3>
            <p className="font-roboto text-sm sm:text-base text-text-muted leading-relaxed max-w-md">
              Interested in collaborating on a future project or just want to say hi? 
              Feel free to reach out — always open to meaningful conversations and creative developer roles.
            </p>
          </div>

          {/* RIGHT COLUMN: Minimalism Monospace Socials & Dashboard Likes (Col Span 5) */}
          <div className="md:col-span-5 flex flex-col items-start md:items-end space-y-8">
            
            {/* Social Text links in JetBrains Mono */}
            <div className="flex flex-col md:items-end gap-3.5">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted uppercase">
                // CONNECT ABROAD
              </span>
              <div className="flex flex-wrap md:justify-end gap-x-5 gap-y-2">
                {[
                  { label: 'GITHUB', link: socialLinks.github },
                  { label: 'LINKEDIN', link: socialLinks.linkedin },
                  { label: 'INSTAGRAM', link: socialLinks.instagram },
                  { label: 'EMAIL', link: socialLinks.email },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-[0.15em] text-text-muted hover:text-accent-glow transition-colors duration-300 relative group"
                  >
                    {social.label}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-px bg-accent-glow transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Dashboard-Style Like Pill */}
            <div className="flex flex-col md:items-end gap-2.5 w-full sm:w-auto">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted uppercase">
                // SYSTEM FEEDBACK
              </span>
              <button
                type="button"
                onClick={handleLike}
                disabled={hasLiked}
                className="
                  flex items-center justify-between gap-4 border border-border-highlight/20 
                  bg-bg-surface/10 hover:bg-bg-surface/20 active:scale-98
                  rounded-xl px-5 py-3 text-xs font-mono tracking-widest text-text-light/85 
                  transition-all duration-300 shadow-2xl w-full sm:w-auto
                  disabled:cursor-not-allowed disabled:opacity-80 disabled:border-accent-glow/30
                "
              >
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${hasLiked ? 'animate-bounce' : ''}`}>
                    {hasLiked ? '❤️' : '🤍'}
                  </span>
                  <span>{hasLiked ? 'VOTE PERSISTED' : 'SUPPORT SYSTEM'}</span>
                </div>
                <span className="h-4 w-px bg-border-highlight/30" />
                <span className="text-accent-glow font-bold">{likes} LIKES</span>
              </button>
            </div>

          </div>

        </div>

        {/* Clean full-width horizontal divider line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-highlight/20 to-transparent" />

        {/* GIGANTIC BRAND SIGNATURE WATERMARK */}
        <div className="w-full text-center overflow-hidden py-10 pointer-events-none select-none">
          <h2 className="font-poetsen text-[7.5vw] font-black tracking-[-0.05em] leading-none uppercase text-text-light/[0.02] bg-gradient-to-b from-text-light/[0.03] to-transparent bg-clip-text text-transparent whitespace-nowrap">
            MOHAMAD TOHARI MAOLANA
          </h2>
        </div>

        {/* BOTTOM METADATA ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-[0.65rem] tracking-wider text-text-muted/60 uppercase">
          <div>
            © {new Date().getFullYear()} MOHAMAD TOHARI MAOLANA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH REACT & TAILWIND</span>
            <span className="text-accent-glow">•</span>
            <span>JAKARTA, ID</span>
          </div>
        </div>

      </div>

      {/* FIXED SCROLL TO TOP ACCENT */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="
              fixed bottom-8 right-8 z-50 rounded-full border border-border-highlight/30
              bg-bg-surface/80 p-3.5 text-accent-glow shadow-[0_4px_24px_rgba(0,0,0,0.5)]
              backdrop-blur-md group hover:border-accent-glow/50
            "
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.8 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <FiArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;
