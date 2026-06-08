import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation(); // Deteksi current route

  // Efek blur & background muncul halus saat scroll
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(6, 0, 16, 0)", "rgba(6, 0, 16, 0.8)"]
  );

  const navBackdrop = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Auto-close mobile menu saat route berubah
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' }
  ];

  // Helper function: cek apakah link active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* HEADER UTAMA */}
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

          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            <img
              src="/images/profile-avatar-8bit.jpeg"
              alt="Logo"
              className="w-9 h-9 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-poetsen text-text-light text-xl tracking-wide">
              Tohari
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`
                  text-sm font-roboto font-medium transition-all duration-300 relative group
                  ${isActive(item.link)
                    ? 'text-text-light'
                    : 'text-text-muted hover:text-text-light'
                  }
                `}
              >
                {item.title}

                {/* Active indicator (garis bawah) */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px] bg-accent-glow transition-all duration-300
                    ${isActive(item.link)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </Link>
            ))}

            {/* Tombol Contact */}
            <Link
              to="/contact"
              className={`
                ml-4 px-5 py-2 border rounded-full text-sm font-medium transition-all duration-300
                ${isActive('/contact')
                  ? 'border-accent-glow bg-accent-glow/10 text-accent-glow'
                  : 'border-border-highlight/30 text-text-light hover:bg-surface/50 hover:border-accent-glow'
                }
              `}
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden relative z-50 p-2 text-text-light focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 7 : 0
                }}
                className="w-6 h-[2px] bg-current block rounded-full origin-center transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? -10 : 0
                }}
                className="w-6 h-[2px] bg-current block rounded-full transition-all duration-300"
              />
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

      {/* MOBILE MENU OVERLAY */}
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.link}
                    className={`
                      text-3xl font-poetsen transition-colors duration-300
                      ${isActive(item.link)
                        ? 'text-accent-glow'
                        : 'text-text-light hover:text-accent-glow'
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className={`
                    mt-4 px-8 py-3 border rounded-full text-lg font-medium transition-all duration-300
                    ${isActive('/contact')
                      ? 'border-accent-glow bg-accent-glow/20 text-accent-glow'
                      : 'border-accent-glow text-accent-glow hover:bg-accent-glow/10'
                    }
                  `}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarComponent;
