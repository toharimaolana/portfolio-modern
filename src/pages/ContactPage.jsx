'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  };

  return (
    <main className="bg-bg-base text-text-light">
      <section
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pt-24 lg:flex-row lg:gap-16"
        aria-labelledby="contact-heading"
      >
        <motion.div
          className="flex w-full flex-col gap-10 lg:flex-row lg:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT: clean typography */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[46%] space-y-5"
          >
            <p className="font-roboto text-[0.72rem] uppercase tracking-[0.26em] text-text-muted">
              Contact
            </p>

            <h1
              id="contact-heading"
              className="
                font-poetsen
                text-[2.6rem] sm:text-[3rem] lg:text-[3.3rem]
                leading-tight tracking-tight
              "
            >
              Tell me about
              <span className="block">your next project.</span>
            </h1>

            <p className="max-w-md font-roboto text-sm sm:text-base leading-relaxed text-text-muted">
              A short brief is enough. Share your idea, goals, and timeline. If it&apos;s a good fit,
              we&apos;ll move to a focused conversation and concrete next steps.
            </p>

            <div className="pt-2 font-roboto text-xs text-text-muted/80">
              <p className="mb-1">Preferred topics</p>
              <ul className="space-y-1">
                <li>— Web app UI / frontend</li>
                <li>— Product or portfolio redesign</li>
                <li>— Long‑term frontend collaboration</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: glassmorphism form card ala pill awards */}
          <motion.div
            variants={itemVariants}
            className="
              w-full lg:w-[54%]
              rounded-3xl border border-border-highlight/40
              bg-bg-surface/20
              px-5 py-6 sm:px-7 sm:py-7
              backdrop-blur-xl
              shadow-[0_18px_60px_rgba(0,0,0,0.45)]
              will-change-transform will-change-opacity
            "
          >
            <form className="space-y-5 font-roboto" autoComplete="off">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      rounded-xl border border-border-highlight/40
    
                      px-3 py-2.5 text-sm text-text-light/90
                      outline-none ring-0
                      placeholder:text-text-muted/60
                      backdrop-blur-xl
                      transition-colors
                      focus:border-accent-glow focus:bg-bg-surface/50
                    "
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      rounded-xl border border-border-highlight/40
    
                      px-3 py-2.5 text-sm text-text-light/90
                      outline-none ring-0
                      placeholder:text-text-muted/60
                      backdrop-blur-xl
                      transition-colors
                      focus:border-accent-glow focus:bg-bg-surface/50
                    "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project, collaboration, or question"
                  className="
                    rounded-xl border border-border-highlight/40

                    px-3 py-2.5 text-sm text-text-light/90
                    outline-none ring-0
                    placeholder:text-text-muted/60
                    backdrop-blur-xl
                    transition-colors
                    focus:border-accent-glow focus:bg-bg-surface/50
                  "
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share context, goals, and any links that help me understand."
                  className="
                    rounded-xl border border-border-highlight/40

                    px-3 py-2.5 text-sm text-text-light/90
                    outline-none ring-0 resize-none
                    placeholder:text-text-muted/60
                    backdrop-blur-xl
                    transition-colors
                    focus:border-accent-glow focus:bg-bg-surface/50
                  "
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-muted">
                  Replies typically within 1–2 business days.
                </p>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.96 }}
                  className="
                    inline-flex items-center justify-center
                    rounded-full bg-text-light px-6 py-2.5
                    text-xs font-semibold uppercase tracking-[0.18em]
                    text-bg-base
                    transition-colors duration-200
                    hover:bg-accent-glow
                  "
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;
