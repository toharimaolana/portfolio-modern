import ProjectsSection from '@/components/sections/ProjectsSection'
import React from 'react'
import SEO from '@/components/utils/SEO'

const ProjectsPage = () => {
  return (
    <main className='pt-16'>
      <SEO
        title="Koleksi Proyek — Mohamad Tohari Maolana (Tohari / Sito)"
        description="Koleksi karya aplikasi web, sistem frontend, dan desain UI/UX buatan Mohamad Tohari Maolana (Tohari / Sito) menggunakan React.js, Next.js, dan Tailwind CSS."
      />
      <ProjectsSection/>
    </main>
  )
}

export default ProjectsPage