import React from 'react';
import AboutHero from '@/components/sections/AboutHero.jsx';
import StatsSection from '@/components/sections/StatsSection';
import LogoLoop from '@/components/ui/LogoLoop';
import TimelineSection from '@/components/sections/TimelineSection';
import CTASection from '@/components/sections/CTASection';
import RecognitionSection from '@/components/sections/RecognitionSection';


import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
];

const myJourneyItems = [
  {
    year: "2023 - Present",
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
    tags: ["High School", "RPL", "Coding Roots"],
  }
];

const AboutPage = () => {
  return (
    <main className="bg-bg-base text-text-light">
    <AboutHero />
    {/* Logo strip: clean & compact */}
    <section className="relative bg-bg-base">
      <div className="relative h-[200px] overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="up"
          logoHeight={48}
          gap={40}
          fadeOut
        />
      </div>
    </section>
    <StatsSection />


    <TimelineSection
    items={myJourneyItems}
    sectionProps={{
      subheading: "Our Story",
      heading: "Growth Timeline",
      description: "From humble beginnings to industry leadership - see how we've evolved."
    }}
    />
    
    <RecognitionSection />

    <CTASection />
    </main>
  );
};

export default AboutPage;