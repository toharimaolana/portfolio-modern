// File: Layout.jsx
import React from 'react';
import NavbarSection from '../sections/NavbarSection';
import  FooterSection  from '../sections/FooterSection';

/**
 * Wrapper komponen internal untuk membatasi lebar konten
 * seperti Navbar dan Footer, agar tetap center dan maks. 1200px.
 */
const SectionContainer = ({ children }) => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1200px]">
        {children}
      </div>
    </div>
  );
};

/**
 * Komponen Layout utama.
 */
export const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#060010]">
      <SectionContainer>
        <NavbarSection />
      </SectionContainer>
      
      <main className="w-full flex-grow">
        {children}
      </main>
      
      <SectionContainer>
        <FooterSection />
      </SectionContainer>
    </div>
  );
};