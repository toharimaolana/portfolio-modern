import React from 'react';

// Import custom UI components and sections
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import CTASection from '@/components/sections/CTASection';

const Divider = () => (
  <div className="relative w-full max-w-[1200px] mx-auto px-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-border-highlight/20 to-transparent" />
  </div>
);

const HomePage = () => {
  return (
    <main className='min-h-screen bg-bg-base'>
      <HeroSection />

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