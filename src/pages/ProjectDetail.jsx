import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Clock, Globe, Github, Home
} from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projectService } from '../services/projectService';

// Helper to generate clean HTML IDs for headings
const slugify = (text) => {
  if (!text) return '';
  const str = Array.isArray(text) ? text.join('') : String(text);
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll();

  const [projectMetadata, setProjectMetadata] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [nextProject, setNextProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Table of contents & active heading state
  const [tocItems, setTocItems] = useState([]);
  const [activeId, setActiveId] = useState('');

  // Parallax transform values
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1.04, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, -15]);

  useEffect(() => {
    let active = true;
    const loadData = async () => {
      setLoading(true);
      setError(null);
      window.scrollTo({ top: 0, behavior: 'instant' });

      const foundProject = await projectService.getProjectById(id);

      if (!active) return;

      if (!foundProject) {
        setProjectMetadata(null);
        setMarkdownContent('');
        setNextProject(null);
        setLoading(false);
        setError('Proyek tidak ditemukan.');
        return;
      }

      setProjectMetadata(foundProject);

      try {
        const rawText = await foundProject.getContent();
        const contentOnly = rawText.replace(/^---[\s\S]*?---\n/, '');
        setMarkdownContent(contentOnly);
      } catch (err) {
        setMarkdownContent('');
        setError('Gagal memuat detail proyek. Silakan coba beberapa saat lagi.');
      }

      const allProjects = await projectService.getProjects();
      if (!active) return;

      const currentIndex = allProjects.findIndex((p) => String(p.id) === String(id));
      if (currentIndex !== -1 && allProjects.length > 1) {
        const nextIndex = (currentIndex + 1) % allProjects.length;
        setNextProject(allProjects[nextIndex]);
      } else {
        setNextProject(null);
      }

      setLoading(false);
    };

    loadData();
    return () => {
      active = false;
    };
  }, [id]);

  // Extract H2 headings for Table of Contents
  useEffect(() => {
    if (!markdownContent) {
      setTocItems([]);
      return;
    }

    const matches = [...markdownContent.matchAll(/^##\s+(.+)$/gm)];
    const headings = matches.map((m) => {
      const rawTitle = m[1].trim();
      const cleanTitle = rawTitle.replace(/\*\*/g, '').replace(/^[0-9]+\.\s*/, '');
      return {
        id: slugify(cleanTitle),
        text: cleanTitle,
      };
    });

    setTocItems(headings);
    if (headings.length > 0) {
      setActiveId(headings[0].id);
    }
  }, [markdownContent]);

  // ScrollSpy to track active heading section based on actual document position
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el) {
          const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
          if (elementTop <= scrollPosition) {
            setActiveId(tocItems[i].id);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(targetId);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center gap-4">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-accent-glow/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-accent-glow border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted animate-pulse">
          Loading Project...
        </p>
      </div>
    );
  }

  if (!projectMetadata) {
    return (
      <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center gap-6 font-roboto px-6 text-center">
        <div className="space-y-2 max-w-md">
          <h2 className="font-poetsen text-3xl text-text-light">Proyek Tidak Ditemukan</h2>
          <p className="text-text-muted text-sm leading-relaxed">Proyek yang Anda cari tidak tersedia.</p>
        </div>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase text-text-light hover:text-accent-glow transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Portofolio</span>
        </button>
      </div>
    );
  }

  const hasValidLiveUrl = projectMetadata.liveUrl && projectMetadata.liveUrl !== '-';
  const hasValidGithubUrl = projectMetadata.githubUrl && projectMetadata.githubUrl !== '-';

  return (
    <div className="bg-bg-base min-h-screen relative text-text-light selection:bg-accent-glow selection:text-bg-base">

      {/* ════════ HEADER & META SECTION (CARDLESS SPLIT LAYOUT) ════════ */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-10 px-6">
        <div className="max-w-[1100px] mx-auto">

          {/* Breadcrumb Navigation: Home / Projects / Project Title */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs text-text-muted">
            <Link to="/" className="hover:text-accent-glow transition-colors flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-white/20">/</span>
            <Link to="/projects" className="hover:text-accent-glow transition-colors">
              <span>Projects</span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-text-light font-medium truncate max-w-[200px] sm:max-w-none">
              {projectMetadata.title}
            </span>
          </nav>

          {/* Project Main Title */}
          <motion.h1
            className="font-poetsen text-4xl sm:text-5xl lg:text-6xl text-text-light font-bold mb-8 leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {projectMetadata.title}
          </motion.h1>

          {/* Split Top Layout: Left Description & Pills, Right Plain Text Specs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-start"
          >
            {/* LEFT: Summary Description & Rounded Pill Tags */}
            <div className="lg:col-span-8 space-y-6">
              <p className="font-roboto text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                {projectMetadata.description || `${projectMetadata.title} case study and development architecture breakdown.`}
              </p>

              {/* Pill Tags */}
              {projectMetadata.tags && projectMetadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {projectMetadata.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-white/10 bg-white/[0.03] px-4 py-1.5 rounded-full text-xs font-mono text-text-muted hover:border-white/20 hover:text-text-light transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Clean Key-Value Text Lines (NO CARDS!) */}
            <div className="lg:col-span-4 space-y-3 font-roboto text-sm border-t lg:border-t-0 pt-6 lg:pt-0 border-white/10">
              <div className="flex items-baseline gap-4">
                <span className="text-text-muted font-medium w-16 flex-shrink-0">Roles:</span>
                <span className="text-text-light">{projectMetadata.role || 'Full-Stack Developer.'}</span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-text-muted font-medium w-16 flex-shrink-0">Client:</span>
                <span className="text-text-light">{projectMetadata.client || 'Personal Project'}</span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-text-muted font-medium w-16 flex-shrink-0">Year:</span>
                <span className="text-text-light">{projectMetadata.year || '2026'}</span>
              </div>

              {/* External Links */}
              <div className="pt-3 flex flex-wrap items-center gap-4 font-mono text-xs">
                {hasValidLiveUrl && (
                  <a
                    href={projectMetadata.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-glow hover:underline"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {hasValidGithubUrl && (
                  <a
                    href={projectMetadata.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-light hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Hero Banner Image (Clean Borderless Container) */}
          <motion.div
            className="relative w-full h-[40vh] sm:h-[52vh] md:h-[62vh] rounded-2xl overflow-hidden border border-white/[0.08] bg-bg-surface/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.img
              src={projectMetadata.thumbnail}
              alt={projectMetadata.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover filter brightness-95"
              style={{ scale: imageScale, y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/10 to-transparent opacity-80 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ════════ MAIN ARTICLE & ON THIS PAGE LAYOUT ════════ */}
      <section className="px-6 pb-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="lg:grid lg:grid-cols-12 gap-12 items-start">

            {/* MAIN ARTICLE CONTENT (lg:col-span-8) */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-invert max-w-none font-roboto"
              >
                <ReactMarkdown
                  skipHtml
                  components={{
                    h1: (props) => <h1 className="hidden" {...props} />,
                    h2: ({ node, children, ...props }) => {
                      const text = Array.isArray(children) ? children.join('') : String(children || '');
                      const cleanTitle = text.replace(/\*\*/g, '').replace(/^[0-9]+\.\s*/, '');
                      const headingId = slugify(cleanTitle);
                      return (
                        <h2
                          id={headingId}
                          className="font-poetsen text-2xl sm:text-3xl text-text-light font-bold tracking-tight mt-12 mb-6 scroll-mt-28"
                          {...props}
                        >
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ node, ...props }) => (
                      <h3
                        className="font-poetsen text-lg sm:text-xl text-text-light mt-8 mb-4 font-semibold"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="font-roboto text-text-muted leading-relaxed mb-6 text-base sm:text-lg font-normal"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="space-y-3 mb-8 pl-0 list-none" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="space-y-3 mb-8 pl-0 list-decimal list-inside font-roboto text-text-muted text-base sm:text-lg" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="flex items-start gap-3 text-text-muted font-roboto text-base sm:text-lg leading-relaxed mb-2"
                        {...props}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-glow/80 mt-2.5 flex-shrink-0" />
                        <div className="flex-1">{props.children}</div>
                      </li>
                    ),
                    table: ({ node, ...props }) => (
                      <div className="my-8 w-full overflow-x-auto border-t border-b border-white/10 py-2">
                        <table className="w-full text-left font-roboto text-sm sm:text-base border-collapse" {...props} />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="border-b border-white/10 font-mono text-xs uppercase tracking-wider text-text-light" {...props} />
                    ),
                    tbody: ({ node, ...props }) => (
                      <tbody className="divide-y divide-white/5" {...props} />
                    ),
                    tr: ({ node, ...props }) => (
                      <tr className="hover:bg-white/[0.01] transition-colors duration-150" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th className="py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider text-accent-glow" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                      <td className="py-3 px-4 text-text-muted text-sm sm:text-base font-roboto" {...props} />
                    ),
                    code: ({ node, inline, ...props }) => (
                      inline ? (
                        <code className="font-mono text-xs bg-white/[0.06] text-accent-glow px-1.5 py-0.5 rounded font-semibold" {...props} />
                      ) : (
                        <div className="my-6 rounded-xl border border-white/10 bg-bg-surface/40 p-4 font-mono text-xs text-text-light overflow-x-auto">
                          <code className="font-mono text-xs text-text-light leading-relaxed" {...props} />
                        </div>
                      )
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-2 border-accent-glow/60 pl-5 italic text-text-light my-8 text-base sm:text-lg leading-relaxed font-roboto"
                        {...props}
                      />
                    ),
                    img: ({ node, ...props }) => (
                      <figure className="my-10">
                        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-bg-surface/20">
                          <img
                            {...props}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover filter brightness-95"
                          />
                        </div>
                        {props.alt && (
                          <figcaption className="text-center font-roboto text-xs text-text-muted mt-3">
                            {props.alt}
                          </figcaption>
                        )}
                      </figure>
                    ),
                    a: (props) => (
                      <a
                        className="text-text-light font-medium hover:text-accent-glow underline decoration-white/20 underline-offset-4 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    )
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </motion.article>
            </div>

            {/* RIGHT SIDEBAR: Floating "On this page" TOC (DESKTOP ONLY) */}
            {tocItems.length > 0 && (
              <motion.aside
                className="hidden lg:block lg:col-span-4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="sticky top-28 font-roboto">
                  {/* Floating TOC Header */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-text-light mb-4">
                    <span className="font-mono text-base leading-none">≡</span>
                    <span>On this page</span>
                  </div>

                  {/* TOC Links List */}
                  <nav className="space-y-1">
                    {tocItems.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`block pl-3 py-1 text-sm transition-all duration-200 ${
                            isActive
                              ? 'border-l-2 border-accent-glow text-accent-glow font-medium'
                              : 'border-l-2 border-transparent text-text-muted/70 hover:text-text-light'
                          }`}
                        >
                          {item.text}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </motion.aside>
            )}

          </div>
        </div>
      </section>

      {/* ════════ NEXT PROJECT FOOTER BANNER ════════ */}
      {nextProject && (
        <section className="px-6 pb-24" aria-labelledby="next-project-heading">
          <div className="max-w-[1100px] mx-auto border-t border-white/10 pt-12">
            <p id="next-project-heading" className="sr-only">
              Proyek Selanjutnya
            </p>
            <Link to={`/projects/${nextProject.id}`}>
              <div className="flex items-center justify-between group cursor-pointer py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-text-muted font-mono text-xs uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-accent-glow" />
                    <span>Next Project</span>
                  </div>
                  <h3 className="font-poetsen text-2xl sm:text-3xl text-text-light group-hover:text-accent-glow transition-colors">
                    {nextProject.title}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-light group-hover:text-accent-glow transition-colors">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
