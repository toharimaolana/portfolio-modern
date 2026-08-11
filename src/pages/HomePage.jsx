import React from 'react';

// Import custom UI components and sections
import HeroSection from '@/components/sections/HeroSection';
import CurvedLoop from '@/components/ui/CurvedLoop';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/utils/SEO';

const Divider = () => (
  <div className="relative w-full max-w-[1200px] mx-auto px-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-border-highlight/20 to-transparent" />
  </div>
);

const HomePage = () => {
  return (
    <main className='min-h-screen bg-bg-base'>
      <SEO
        title="Mohamad Tohari Maolana (Tohari / Sito) — Frontend Engineer & UI/UX Specialist"
        description="Portofolio resmi Mohamad Tohari Maolana (Tohari / Sito). Senior Frontend Engineer & UI/UX Specialist yang berfokus pada pembuatan aplikasi web React.js, Tailwind CSS, dan desain UI/UX interaktif."
      />
      <HeroSection />

      {/* Interactive Curved Marquee Loop */}
      <section className="py-2 overflow-hidden bg-bg-base relative" aria-label="Profile Pillars Loop">
        <CurvedLoop
          marqueeText="COMMUNITY ✦ DEVELOPMENT ✦ MENTOR ✦ WEBSITES ✦ DESIGNING ✦ "
          speed={1.8}
          curveAmount={30}
        />
        {/* Bottom gradient line matching HeroSection bottom border */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
      </section>

      {/* About Statement — ScrollReveal Section (< 50 Words, High-Trust) */}
      <section className="py-16 sm:py-24 bg-bg-base overflow-hidden" aria-label="About Statement">
        <div className="mx-auto w-full max-w-[1000px] px-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-glow/80 mb-8 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
            <span>// WHO I AM</span>
          </div>

          <ScrollReveal
            baseOpacity={0.15}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            textClassName="font-poetsen text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-light leading-[1.4] uppercase tracking-tight text-center max-w-4xl mx-auto"
          >
            Design Engineer bridging pixel-perfect Figma interfaces with production-ready React architectures. Top 2 National UI/UX Winner, Chairman leading 200+ developers at ISC, shipping high-performance web products with high-velocity AI workflows.
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      <ProjectsSection />

      <Divider />

      <CredentialsSection />

      <Divider />

      <CTASection />
    </main>
  );
};

export default HomePage;