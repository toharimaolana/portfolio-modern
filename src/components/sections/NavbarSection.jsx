import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  

  const width = useTransform(
    scrollY,
    [0, 50, 51, 100],
    ["100%", "100%", "90%", "90%"]
  );
  
  const borderRadius = useTransform(scrollY, [0, 100], [0, 100]);
  const paddingX = useTransform(scrollY, [0, 100], [16, 24]);
  const paddingY = useTransform(scrollY, [0, 100], [16, 12]);
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 10px 30px rgba(0,0,0,0.1)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items 
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: 'about' },
    { title: 'Projects', link: 'Projects' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className="fixed top-4  left-0 right-0 z-50 flex justify-center mx-auto"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <motion.nav
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'border border-[#30363D]' : 'border-transparent'
        }`}
        style={{ 
          width,
          borderRadius,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          boxShadow,
          borderOpacity: borderOpacity,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          background: scrolled
            ? "rgba(6, 0, 16, 0.5)" 
            : "transparent",
          border: scrolled
            ? "1px solid rgba(255, 255, 255, 0.15)"
            : "none",
          maxWidth: scrolled ? "1220px" : "100%",
          margin: "0 auto",
          transition: "all 0.3s ease" 
        }}
      >
        {/* Logo */}
        <motion.div 
          className="text-[#f1f4f5] font-bold text-xl"
          animate={{ scale: scrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" />
        </motion.div>
        
        {/* Main Navigation */}
        <motion.ul className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ 
                y: -3,
                color: "#5b168d",
                textShadow: "0 0 8px rgba(88, 166, 255, 0.5)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300 
              }}
            >
              <a 
                href={item.link} 
                className="text-[#f1f4f5] font-medium text-lg transition-all duration-300 relative group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5b168d] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
        
        {/* Mobile menu button - only visible on small screens */}
        <div className="md:hidden">
          <motion.button 
            className="text-[#f1f4f5] z-50"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden`}
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
      >
        <motion.ul className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0, 
                y: mobileMenuOpen ? 0 : 20 
              }}
              transition={{ 
                delay: mobileMenuOpen ? index * 0.1 : 0,
                duration: 0.3 
              }}
            >
              <a 
                href={item.link} 
                className="text-[#f1f4f5] text-2xl font-medium"
                onClick={toggleMobileMenu}
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.header>
  );
};

export default NavbarComponent;