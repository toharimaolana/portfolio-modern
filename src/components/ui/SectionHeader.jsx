import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  subheading = "", 
  heading = "",
  description = "",
  align = "" // "center", "left", "center" or "right"
}) => {
  
  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end"
  };

  return (
    <div className={`relative w-full flex flex-col ${alignmentClasses[align]} gap-6 py-12`}>
      
      {/* Subheading - Small but Eye-catching */}
      <motion.div
        className="relative inline-flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Decorative Line - Left */}
        <motion.div
          className="h-px w-8 bg-gradient-to-r from-transparent to-accent-glow"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Subheading Badge with Animated Gradient */}
        <div className="relative group">
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-60"
            animate={{
              background: [
                'linear-gradient(90deg, rgba(115, 56, 160, 0.4) 0%, rgba(146, 77, 191, 0.4) 50%, rgba(199, 125, 255, 0.4) 100%)',
                'linear-gradient(90deg, rgba(199, 125, 255, 0.4) 0%, rgba(146, 77, 191, 0.4) 50%, rgba(115, 56, 160, 0.4) 100%)',
                'linear-gradient(90deg, rgba(115, 56, 160, 0.4) 0%, rgba(146, 77, 191, 0.4) 50%, rgba(199, 125, 255, 0.4) 100%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Badge Container */}
          <div className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent-glow/20 border border-accent-glow/30 backdrop-blur-xl overflow-hidden">
            {/* Moving Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-glow/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Text */}
            <span className="relative z-10 text-sm font-roboto font-bold tracking-widest uppercase text-text-light">
              {subheading}
            </span>
          </div>
        </div>

        {/* Decorative Line - Right */}
        <motion.div
          className="h-px w-8 bg-gradient-to-l from-transparent to-accent-glow"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Heading - Large and Bold with Animated Gradient */}
      <motion.h2
        className="relative font-poetsen text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Multiple Glow Layers */}
        <span className="absolute inset-0 blur-3xl opacity-40">
          <motion.span
            className="bg-clip-text text-transparent"
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #7338A0 0%, #924DBF 50%, #C77DFF 100%)',
                'linear-gradient(90deg, #C77DFF 0%, #924DBF 50%, #7338A0 100%)',
                'linear-gradient(90deg, #7338A0 0%, #924DBF 50%, #C77DFF 100%)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {heading}
          </motion.span>
        </span>
        
        <span className="absolute inset-0 blur-xl opacity-50">
          <motion.span
            className="bg-clip-text text-transparent"
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #C77DFF 0%, #924DBF 50%, #7338A0 100%)',
                'linear-gradient(90deg, #7338A0 0%, #C77DFF 50%, #924DBF 100%)',
                'linear-gradient(90deg, #C77DFF 0%, #924DBF 50%, #7338A0 100%)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          >
            {heading}
          </motion.span>
        </span>
        
        {/* Main Text with Animated Gradient */}
        <motion.span
          className="relative bg-clip-text text-transparent"
          animate={{
            backgroundImage: [
              'linear-gradient(90deg, #EDE9FE 0%, #C77DFF 50%, #EDE9FE 100%)',
              'linear-gradient(90deg, #C77DFF 0%, #EDE9FE 50%, #C77DFF 100%)',
              'linear-gradient(90deg, #EDE9FE 0%, #C77DFF 50%, #EDE9FE 100%)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heading}
        </motion.span>

        {/* Decorative Underline with Moving Gradient */}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 mx-auto h-1.5 rounded-full overflow-hidden"
          style={{ width: align === 'center' ? '60%' : '80%' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div
            className="h-full w-full"
            animate={{
              background: [
                'linear-gradient(90deg, transparent 0%, #C77DFF 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 0%, #924DBF 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 0%, #7338A0 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 0%, #C77DFF 50%, transparent 100%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.h2>

      {/* Description - Optional */}
      {description && (
        <motion.p
          className="font-roboto text-text-muted text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;




