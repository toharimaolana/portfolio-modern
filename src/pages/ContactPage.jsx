'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../utils/supabaseClient';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setErrors({});

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from('messages').insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
        ]);
        if (error) throw error;
      } else {
        // Fallback: mailto link if Supabase is not configured
        const mailtoLink = `mailto:toharimaolana@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputBaseClass = `
    w-full rounded-xl border bg-transparent
    px-3 py-2.5 text-sm text-text-light/90
    outline-none ring-0
    placeholder:text-text-muted/60
    backdrop-blur-xl
    transition-colors
    focus:border-accent-glow focus:bg-bg-surface/50
  `;

  return (
    <main className="bg-bg-base text-text-light">
      <section
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pt-24 pb-24 lg:flex-row lg:gap-16"
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

          {/* RIGHT: glassmorphism form card */}
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
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-glow/20">
                    <svg className="h-8 w-8 text-accent-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-poetsen text-2xl text-text-light">Message Sent!</h3>
                  <p className="font-roboto text-sm text-text-muted max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you within 1–2 business days.
                  </p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-poetsen text-2xl text-text-light">Something went wrong</h3>
                  <p className="font-roboto text-sm text-text-muted max-w-xs">
                    Please try again later or reach out directly via email.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 font-roboto"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  noValidate
                >
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
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${errors.name ? 'border-red-400/60' : 'border-border-highlight/40'}`}
                      />
                      {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
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
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${errors.email ? 'border-red-400/60' : 'border-border-highlight/40'}`}
                      />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
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
                      name="subject"
                      type="text"
                      placeholder="Project, collaboration, or question"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputBaseClass} ${errors.subject ? 'border-red-400/60' : 'border-border-highlight/40'}`}
                    />
                    {errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
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
                      name="message"
                      rows={4}
                      placeholder="Share context, goals, and any links that help me understand."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputBaseClass} resize-none ${errors.message ? 'border-red-400/60' : 'border-border-highlight/40'}`}
                    />
                    {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-text-muted">
                      Replies typically within 1–2 business days.
                    </p>
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileTap={{ scale: 0.96 }}
                      className={`
                        inline-flex items-center justify-center gap-2
                        rounded-full px-6 py-2.5
                        text-xs font-semibold uppercase tracking-[0.18em]
                        transition-colors duration-200
                        ${status === 'sending'
                          ? 'bg-text-muted/50 text-bg-base cursor-not-allowed'
                          : 'bg-text-light text-bg-base hover:bg-accent-glow'
                        }
                      `}
                    >
                      {status === 'sending' && (
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      )}
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;
