import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-base"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Ambient Glows */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7338A0 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #C77DFF 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #924DBF 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-glow rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(158, 114, 195, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(158, 114, 195, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-surface/30 border border-border-highlight/30 backdrop-blur-xl"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-accent-glow"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-text-light text-sm font-roboto font-medium tracking-wide">
              Welcome to My Portfolio
            </span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-accent-glow"
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Main Heading with Glow Effect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-poetsen text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
              {/* First Line */}
              <motion.span
                className="block text-text-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Creative
              </motion.span>
              
              {/* Second Line with Gradient Glow */}
              <motion.span
                className="block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {/* Outer Glow Layer */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-glow blur-2xl opacity-60">
                  Developer
                </span>
                
                {/* Main Text with Gradient */}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-glow">
                  Developer
                </span>
                
                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent-glow rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>

              {/* Third Line */}
              <motion.span
                className="block text-text-light"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                & Designer
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-roboto text-text-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies. 
            Specializing in{' '}
            <span className="text-accent-glow font-semibold">Web Development</span>,{' '}
            <span className="text-secondary font-semibold">UI/UX Design</span>, and{' '}
            <span className="text-primary font-semibold">Creative Solutions</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            {/* Primary CTA */}
            <motion.button
              className="group relative px-8 py-4 rounded-full font-roboto font-semibold text-base overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent-glow" />
              
              {/* Animated Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent-glow opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              
              {/* Button Text */}
              <span className="relative z-10 text-text-light flex items-center gap-3">
                View My Work
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              className="group relative px-8 py-4 rounded-full font-roboto font-semibold text-base overflow-hidden border border-border-highlight/50 backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300" />
              
              {/* Button Text */}
              <span className="relative z-10 text-text-light flex items-center gap-3">
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                Get in Touch
              </span>
            </motion.button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-poetsen text-transparent bg-clip-text bg-gradient-to-r from-accent-glow to-secondary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm text-text-muted font-roboto mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
    </section>
  );
};

export default HeroSection;