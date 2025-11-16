import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

// --- DATA (Bisa disesuaikan) ---
const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:youremail@example.com",
};
const currentYear = new Date().getFullYear();
const yourName = "Your Name";

const FooterSection = () => {
  // Fungsi untuk scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    
    <footer className="font-roboto text-text-muted relative pt-12 pb-8">
      
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-poetsen text-text-light mb-1">Let's Connect</h3>
            <p className="text-text-muted">Tertarik untuk berkolaborasi atau sekadar menyapa?</p>
          </div>
          <div className="flex justify-center gap-5">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-text-muted bg-surface hover:bg-accent-glow hover:text-bg-base transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-text-muted bg-surface hover:bg-accent-glow hover:text-bg-base transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-text-muted bg-surface hover:bg-accent-glow hover:text-bg-base transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="Twitter"
            >
              <FiTwitter size={20} />
            </motion.a>
             <motion.a
              href={socialLinks.email}
              className="p-2 rounded-full text-text-muted bg-surface hover:bg-accent-glow hover:text-bg-base transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="Email"
            >
              <FiMail size={20} />
            </motion.a>
          </div>
        </div>

        <div className="my-6 border-t border-border-highlight/30"></div>

        <motion.p
          className="text-center font-roboto text-text-muted text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Built from scratch with {' '}
          <motion.span
            className="inline-block text-border-highlight text-accent-glow"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>
          {' '}by Mohamad Tohari Maolana
        </motion.p>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-text-light p-3 rounded-full shadow-lg shadow-accent-glow/30 backdrop-blur-sm z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: '#924DBF' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        title="Kembali ke atas"
      >
        <FiArrowUp size={22} />
      </motion.button>
    </footer>
  );
};

export default FooterSection;