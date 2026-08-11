import React from 'react';
import AboutHero from '@/components/sections/AboutHero.jsx';
import CredentialsSection from '@/components/sections/CredentialsSection';
import LogoLoop from '@/components/ui/LogoLoop';
import TimelineSection from '@/components/sections/TimelineSection';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/utils/SEO';

import {
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiVuedotjs,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiMysql,
  SiSupabase,
  SiLaravel,
  SiNodedotjs,
  SiFramer
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', color: '#61DAFB', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', color: '#FFFFFF', href: 'https://nextjs.org' },
  { node: <SiSvelte />, title: 'Svelte', color: '#FF3E00', href: 'https://svelte.dev' },
  { node: <SiVuedotjs />, title: 'Vue.js', color: '#4FC08D', href: 'https://vuejs.org' },
  { node: <SiJavascript />, title: 'JavaScript', color: '#F7DF1E', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', color: '#06B6D4', href: 'https://tailwindcss.com' },
  { node: <SiTypescript />, title: 'TypeScript', color: '#3178C6', href: 'https://www.typescriptlang.org' },
  { node: <SiGit />, title: 'Git', color: '#F05032', href: 'https://git-scm.com' },
  { node: <SiFramer />, title: 'Framer', color: '#0055FF', href: 'https://framer.com' },
  { node: <SiMysql />, title: 'MySQL', color: '#4479A1', href: 'https://mysql.com' },
  { node: <SiSupabase />, title: 'Supabase', color: '#3ECF8E', href: 'https://supabase.com' },
  { node: <SiLaravel />, title: 'Laravel', color: '#FF2D20', href: 'https://laravel.com' },
  { node: <SiNodedotjs />, title: 'Node.js', color: '#339933', href: 'https://nodejs.org' }
];

const myJourneyItems = [
  {
    year: "2023 - PRESENT",
    title: "Undergraduate Studies & Professional Growth",
    description: "Pursuing a Bachelor's degree in Informatics Engineering at Universitas Pamulang while actively working as a freelance Front-End Developer on various projects. Currently leading a learning community to foster collaborative growth in tech.",
    tags: ["University", "Front-End Dev", "Leadership"],
  },
  {
    year: "2023",
    title: "Certified Competence",
    description: "Earned the National Certificate of Competence (LSP P1) in Programming, validating industry-standard skills upon graduating from vocational high school.",
    tags: ["Certification", "Achievement", "Milestone"],
  },
  {
    year: "2020 - 2023",
    title: "Vocational Foundation in Software Engineering",
    description: "Started the coding journey at SMK YP IPPI Petojo, specializing in Software Engineering (RPL). Built a strong foundation in web development and programming fundamentals.",
    tags: ["SMK RPL", "Foundation", "First Code"],
  }
];

const Divider = () => (
  <div className="relative w-full max-w-[1200px] mx-auto px-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-border-highlight/20 to-transparent" />
  </div>
);

const AboutPage = () => {
  return (
    <main className="bg-bg-base text-text-light min-h-screen">
      <SEO
        title="Tentang Mohamad Tohari Maolana (Tohari / Sito)"
        description="Latar belakang, pengalaman, teknologi, dan perjalanan karir Mohamad Tohari Maolana (Tohari / Sito) — Frontend Engineer & UI/UX Specialist lulusan Universitas Pamulang."
      />
      <AboutHero />

      {/* Tech Stack Marquee Section — Editorial Minimal Style */}
      <section className="relative bg-bg-base py-8 sm:py-10 overflow-hidden" aria-label="Teknologi dan Keahlian">
        {/* Top gradient line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
        
        <div className="relative w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={35}
            direction="left"
            logoHeight={32}
            gap={16}
            fadeOut={true}
            fadeOutColor="#060010"
            pauseOnHover={true}
            scaleOnHover={false}
          />
        </div>

        {/* Bottom gradient line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-border-highlight/30 to-transparent" />
      </section>

      <Divider />

      <CredentialsSection />

      <Divider />

      <TimelineSection
        items={myJourneyItems}
        sectionProps={{
          subheading: "MY JOURNEY",
          heading: "Experience",
          description: "From humble beginnings to industry leadership - see how I've evolved."
        }}
      />

      <Divider />

      <CTASection />
    </main>
  );
};

export default AboutPage;
