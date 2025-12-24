'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

// --- DATA ---
const socialLinks = {
  github: 'https://github.com/toharimaolana',
  linkedin: 'https://www.linkedin.com/in/mohamad-tohari-maolana/',
  twitter: 'https://twitter.com',
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
  }, [likes, hasLiked]); // [web:112][web:118]

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
    setLikes(prev => prev + 1);
    setHasLiked(true);
  };

  // motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 12 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-bg-base pt-12 pb-10">
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* top row */}
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-start md:text-left">
          {/* left: CTA */}
          <motion.div variants={itemVariants} className="max-w-md space-y-3">
            <h3 className="bg-gradient-to-r from-text-light via-accent-glow to-text-light bg-clip-text text-3xl md:text-4xl font-poetsen text-transparent">
              Let&apos;s Connect
            </h3>
            <p className="font-roboto text-base leading-relaxed text-text-muted">
              Interested in collaborating on a future project or just want to say hi?
              Feel free to reach out — always open to meaningful conversations.
            </p>
          </motion.div>

          {/* right: socials + like */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-5 md:items-end"
          >
            {/* social icons */}
            <div className="flex gap-3">
              {[
                { icon: FiGithub, link: socialLinks.github, label: 'GitHub' },
                { icon: FiLinkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter, link: socialLinks.twitter, label: 'Twitter' },
                { icon: FiMail, link: socialLinks.email, label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden rounded-full border border-border-highlight/20
                    bg-bg-surface/60 p-3 text-text-muted backdrop-blur-xl
                    transition-colors duration-300
                  "
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  title={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="relative z-10">
                    <social.icon size={20} />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* like button */}
            <motion.button
              type="button"
              onClick={handleLike}
              disabled={hasLiked}
              className="
                inline-flex items-center gap-2 rounded-full border border-border-highlight/40
                bg-bg-surface/30 px-4 py-2 text-xs font-roboto font-medium uppercase
                tracking-[0.18em] text-text-light/80 backdrop-blur-xl
                shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                disabled:cursor-not-allowed disabled:border-border-highlight/20
              "
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={
                  hasLiked
                    ? {
                        scale: [1, 1.4, 1],
                        rotate: [0, -10, 10, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.4 }}
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  hasLiked
                    ? 'bg-accent-glow text-bg-base'
                    : 'bg-bg-surface text-text-light'
                }`}
              >
                ❤️
              </motion.span>
              <span>{hasLiked ? 'Thanks for the love' : 'Like this portfolio'}</span>
              <span className="text-text-muted/70">• {likes}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* divider */}
        <motion.div
          className="my-8 h-px bg-gradient-to-r from-transparent via-border-highlight/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* bottom row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-2 text-center md:flex-row"
        >
          <p className="font-roboto text-sm text-text-muted">
            © {new Date().getFullYear()} Mohamad Tohari Maolana. All rights reserved.
          </p>
          <span className="hidden text-text-muted/30 md:inline mx-2">•</span>
          <p className="flex items-center gap-1.5 font-roboto text-sm text-text-muted">
            Built with
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                color: ['#A1A1AA', '#C77DFF', '#A1A1AA'],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❤️
            </motion.span>
            and React
          </p>
        </motion.div>
      </motion.div>

      {/* scroll to top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="
              fixed bottom-8 right-8 z-50 rounded-full border border-accent-glow/30
              bg-bg-surface/80 p-3.5 text-accent-glow shadow-[0_0_20px_rgba(199,125,255,0.3)]
              backdrop-blur-md group
            "
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Back to top
            </span>
            <FiArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;
