import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // --- 1. LOGIKA SCROLL SEDERHANA ---
  // Kita gunakan logika simpel: Navbar transparan di atas, 
  // lalu menjadi solid/blur halus saat di-scroll. Tidak perlu bentuk kapsul aneh-aneh.
  
  // Efek blur & background muncul halus saat scroll
  const navBackground = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(6, 0, 16, 0)", "rgba(6, 0, 16, 0.8)"] 
  );
  
  const navBackdrop = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"]);

  // Gunakan useEffect untuk set state 'scrolled' jika masih perlu logika lain, 
  // tapi untuk styling kita pakai 'useTransform' di atas agar performa tinggi.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci tombol mobile agar body tidak bisa discroll saat menu terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: 'about' },
    { title: 'Projects', link: 'projects' }
  ];

  return (
    <>
      {/* --- HEADER UTAMA (Z-INDEX 50) --- 
          Penting: z-50 membuat header ini selalu berada DI ATAS mobile menu overlay (z-40).
          Jadi tombol menu di dalamnya tetap bisa diklik.
      */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          backgroundColor: navBackground,
          backdropFilter: navBackdrop,
          WebkitBackdropFilter: navBackdrop,
          borderBottom: navBorder
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo (Minimalis) */}
          <a href="/" className="relative z-50 flex items-center gap-2 group">
            <img 
              src="/images/logo.svg" 
              alt="Logo" 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="font-poetsen text-text-light text-xl tracking-wide">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="text-text-muted hover:text-text-light text-sm font-roboto font-medium transition-colors duration-300 relative group"
              >
                {item.title}
                {/* Garis bawah halus saat hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-glow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Tombol Kontak Simpel */}
            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 border border-border-highlight/30 text-text-light rounded-full text-sm font-medium hover:bg-surface/50 hover:border-accent-glow transition-all duration-300"
            >
              Contact
            </a>
          </nav>

          {/* --- TOMBOL MENU MOBILE (HAMBURGER / X) --- 
              Karena berada di dalam Header z-50, dia akan di atas Overlay z-40.
          */}
          <button 
            className="md:hidden relative z-50 p-2 text-text-light focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
              {/* Garis Atas */}
              <motion.span 
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0, 
                  y: mobileMenuOpen ? 7 : 0 
                }}
                className="w-6 h-[2px] bg-current block rounded-full origin-center transition-all duration-300"
              />
              {/* Garis Tengah */}
              <motion.span 
                animate={{ 
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? -10 : 0 
                }}
                className="w-6 h-[2px] bg-current block rounded-full transition-all duration-300"
              />
              {/* Garis Bawah */}
              <motion.span 
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0, 
                  y: mobileMenuOpen ? -7 : 0 
                }}
                className="w-6 h-[2px] bg-current block rounded-full origin-center transition-all duration-300"
              />
            </div>
          </button>

        </div>
      </motion.header>

      {/* --- MOBILE MENU OVERLAY (Z-INDEX 40) --- 
          Overlay ini fullscreen tapi di bawah Header.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-3xl font-poetsen text-text-light hover:text-accent-glow transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
               <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-8 py-3 border border-accent-glow text-accent-glow rounded-full text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarComponent;