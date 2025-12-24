import React from 'react';

// Import icons from react-icons
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

// Import custom UI components and sections
import HeroSection from '@/components/sections/HeroSection';
import CurvedLoop from '@/components/ui/CurvedLoop';
import TimelineSection from '@/components/sections/TimelineSection';
import ProjectsSection from '@/components/sections/ProjectsSection'; 
import CTASection from '@/components/sections/CTASection'; 


// import ServicesSection from '@/components/sections/ServicesSection';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
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

const HomePage = () => {
  return (
    <main className='min-h-screen'>
        <HeroSection/>

        <CurvedLoop 
        marqueeText="Web Development ✦ UI Design ✦ Creative Digital ✦ Content Creator  ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={false}
        className="custom-text-style "
        />
      
        <TimelineSection
        items={myJourneyItems}
        sectionProps={{
          subheading: "Our Story",
          heading: "Growth Timeline",
          description: "From humble beginnings to industry leadership - see how we've evolved."
        }}
        />
        
        <ProjectsSection />

        <CTASection />

        {/* <ServicesSection /> */}
    </main>
  );
};

export default HomePage;