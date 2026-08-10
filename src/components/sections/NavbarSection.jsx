import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // GPU-optimized scroll state listener without heavy JS backdrop-blur frame interpolation
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 30;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* HEADER UTAMA — GPU Accelerated Header */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          transition-all duration-300 ease-out will-change-transform
          ${scrolled
            ? 'bg-bg-base/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-950/20 py-0'
            : 'bg-transparent border-b border-transparent py-1'
          }
        `}
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
                  font-mono text-xs uppercase tracking-wider transition-all duration-300 relative group
                  ${isActive(item.link)
                    ? 'text-text-light'
                    : 'text-text-muted hover:text-text-light'
                  }
                `}
              >
                {item.title}

                {/* Active indicator */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px] bg-accent-glow/80 transition-all duration-300
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
                ml-4 px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 border
                ${isActive('/contact')
                  ? 'border-accent-glow bg-accent-glow/10 text-accent-glow'
                  : 'border-white/[0.1] bg-white/[0.03] text-text-light hover:border-white/25 hover:bg-white/[0.06]'
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
      </header>

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
