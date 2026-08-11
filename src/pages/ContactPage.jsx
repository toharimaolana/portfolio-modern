'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Check, Copy, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { supabase, isSupabaseConfigured } from '../utils/supabaseClient';
import SEO from '../components/utils/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('toharimaolana@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
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
        const mailtoLink = `mailto:toharimaolana@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const underlineInputClass = `
    w-full bg-transparent border-0 border-b border-white/[0.12]
    px-0 py-3 text-sm text-text-light font-roboto
    outline-none ring-0 placeholder:text-text-muted/40
    transition-colors duration-300
    focus:border-accent-glow focus:ring-0
  `;

  return (
    <main className="bg-bg-base min-h-screen text-text-light relative overflow-hidden">
      <SEO
        title="Hubungi Mohamad Tohari Maolana (Tohari / Sito)"
        description="Mari berdiskusi dengan Mohamad Tohari Maolana (Tohari / Sito) mengenai pembuatan aplikasi web, proyek React.js, konsultasi UI/UX, atau tawaran kerja."
      />
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <section
        className="mx-auto w-full max-w-[1200px] px-6 pt-28 sm:pt-36 lg:pt-40 pb-24"
        aria-labelledby="contact-heading"
      >
        {/* Unified Section Header */}
        <SectionHeader
          variant="contact"
          number="04"
          subheading="LET'S CONNECT"
          heading="Start a Conversation"
          description="Have a project in mind, a technical inquiry, or a potential collaboration? Reach out directly using the form or preferred channels below."
        />

        {/* Journal Minimalist Grid Layout */}
        <motion.div
          className="mt-14 border-t border-b border-border-highlight/10 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-highlight/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* LEFT COLUMN: Clean Editorial Info (Col Span 5) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 p-8 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Minimalist Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-highlight/20 bg-bg-surface/10 font-mono text-[0.7rem] uppercase tracking-wider text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
                <span>AVAILABLE FOR FREELANCE & ROLES</span>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted block mb-1">
                    // DIRECT EMAIL
                  </span>
                  <div className="flex items-center gap-3">
                    <a href="mailto:toharimaolana@gmail.com" className="font-poetsen text-xl sm:text-2xl text-text-light hover:text-accent-glow transition-colors duration-300">
                      toharimaolana@gmail.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg border border-border-highlight/20 text-text-muted hover:text-text-light hover:border-white/20 transition-all duration-300"
                      title="Copy Email Address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-accent-glow" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted block mb-1">
                    // LOCATION & TIMEZONE
                  </span>
                  <p className="font-roboto text-sm text-text-light">
                    Jakarta, Indonesia <span className="text-text-muted">(UTC+7)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border-highlight/10 flex flex-wrap gap-2">
              {[
                { name: 'GitHub', url: 'https://github.com/toharimaolana' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamad-tohari-maolana/' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-border-highlight/20 bg-bg-surface/10 font-mono text-[0.7rem] uppercase tracking-wider text-text-muted hover:border-accent-glow/30 hover:text-text-light transition-all duration-300"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Ultra-Clean Minimalist Form (Col Span 7) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-glow/10 border border-accent-glow/30 text-accent-glow">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-poetsen text-2xl text-text-light uppercase tracking-tight">Message Received</h3>
                  <p className="font-roboto text-sm text-text-muted max-w-sm leading-relaxed">
                    Thank you. Your message has been transmitted successfully. I will respond within 24 business hours.
                  </p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30 text-red-400">
                    <span className="font-mono text-lg font-bold">!</span>
                  </div>
                  <h3 className="font-poetsen text-2xl text-text-light uppercase tracking-tight">Submission Error</h3>
                  <p className="font-roboto text-sm text-text-muted max-w-sm leading-relaxed">
                    Unable to transmit message. Please send a direct email to <a href="mailto:toharimaolana@gmail.com" className="text-accent-glow underline">toharimaolana@gmail.com</a>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="name" className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted block">
                        // 01 YOUR NAME
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${underlineInputClass} ${errors.name ? 'border-red-400' : ''}`}
                      />
                      {errors.name && <p className="font-mono text-[0.65rem] text-red-400 pt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted block">
                        // 02 EMAIL ADDRESS
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${underlineInputClass} ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && <p className="font-mono text-[0.65rem] text-red-400 pt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted block">
                      // 03 SUBJECT / TOPIC
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Web App Architecture / Design System / Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${underlineInputClass} ${errors.subject ? 'border-red-400' : ''}`}
                    />
                    {errors.subject && <p className="font-mono text-[0.65rem] text-red-400 pt-1">{errors.subject}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted block">
                      // 04 PROJECT DETAILS / MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share context, timeline, or key objectives..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${underlineInputClass} resize-none ${errors.message ? 'border-red-400' : ''}`}
                    />
                    {errors.message && <p className="font-mono text-[0.65rem] text-red-400 pt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-mono text-[0.65rem] text-text-muted/60 uppercase tracking-widest">
                      // RESPONSE SLA: 24 HOURS
                    </span>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        inline-flex items-center gap-2 px-7 py-2.5 rounded-full
                        font-mono text-xs uppercase tracking-wider font-medium
                        transition-all duration-300 border
                        ${status === 'sending'
                          ? 'border-white/10 bg-white/5 text-text-muted cursor-not-allowed'
                          : 'border-white/20 bg-white/10 text-text-light hover:border-accent-glow hover:bg-accent-glow hover:text-bg-base'
                        }
                      `}
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
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
