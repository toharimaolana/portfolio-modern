import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // pakai scroll global (tidak pakai target ref)
  const { scrollYProgress } = useScroll();

  const [projectMetadata, setProjectMetadata] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [nextProject, setNextProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      window.scrollTo(0, 0);

      const foundProject = projects.find((p) => String(p.id) === id);

      if (!foundProject) {
        setProjectMetadata(null);
        setMarkdownContent('');
        setNextProject(null);
        setLoading(false);
        setError('Project not found.');
        return;
      }

      setProjectMetadata(foundProject);

      try {
        const rawText = await foundProject.getContent();
        const contentOnly = rawText.replace(/^---[\s\S]*?---\n/, '');
        setMarkdownContent(contentOnly);
      } catch (err) {
        setMarkdownContent('');
        setError('Failed to load project details. Please try again later.');
      }

      const currentIndex = projects.findIndex((p) => String(p.id) === id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setNextProject(projects[nextIndex]);

      setLoading(false);
    };

    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-base flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent-glow border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!projectMetadata) {
    return (
      <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center gap-4 font-roboto text-text-muted">
        <p className="text-lg">Project not found.</p>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 rounded-full border border-border-highlight/60 px-5 py-2 text-sm text-text-light hover:border-accent-glow transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bg-base min-h-screen">
      <Helmet>
        <title>{projectMetadata.title} | Portfolio</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Back row + category */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Back - kecil, kiri, clear */}
            <button
              onClick={() => navigate(-1)}
              aria-label="Go back to project list"
              className="
                inline-flex items-center gap-2
                rounded-full border border-border-highlight/50
                bg-bg-surface/60 px-3 py-1.5
                font-roboto text-xs text-text-muted
                hover:border-accent-glow hover:text-text-light
                transition-colors
              "
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to projects</span>
            </button>

            {/* Category pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span
                className="
                  inline-block rounded-full border border-accent-glow/30
                  bg-bg-surface/40 px-4 py-1.5
                  font-roboto text-[0.7rem] font-bold uppercase tracking-[0.18em]
                  text-accent-glow
                "
              >
                {projectMetadata.category}
              </span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            className="font-poetsen text-[2.6rem] sm:text-5xl lg:text-7xl text-text-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {projectMetadata.title}
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden border border-border-highlight/20 shadow-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.img
              src={projectMetadata.thumbnail}
              alt={projectMetadata.title}
              className="w-full h-full object-cover"
              style={{ scale: imageScale, y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-80" />
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="max-w-[1000px] mx-auto mt-12">
          <div className="lg:grid lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-4 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="lg:sticky lg:top-24 space-y-8">
                <div className="bg-bg-surface/30 backdrop-blur-md border border-border-highlight/20 rounded-2xl p-6 space-y-6">
                  <h3 className="font-poetsen text-2xl text-text-light mb-4">Info</h3>
                  <div className="space-y-4">
                    <InfoItem
                      icon={User}
                      label="Client"
                      value={projectMetadata.client || 'Personal Project'}
                    />
                    <InfoItem icon={Calendar} label="Year" value={projectMetadata.year} />
                    <InfoItem
                      icon={User}
                      label="Role"
                      value={projectMetadata.role || 'Developer'}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {projectMetadata.liveUrl && (
                    <a
                      href={projectMetadata.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live site for ${projectMetadata.title}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-text-light rounded-full font-roboto text-sm font-semibold hover:bg-secondary transition-colors shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Site
                    </a>
                  )}
                  {projectMetadata.githubUrl && (
                    <a
                      href={projectMetadata.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open source code for ${projectMetadata.title}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border-highlight/50 text-text-light rounded-full font-roboto text-sm font-semibold hover:bg-bg-surface/50 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>

                {error && (
                  <p className="font-roboto text-xs text-text-muted/80">{error}</p>
                )}
              </div>
            </motion.aside>

            {/* Markdown */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <ReactMarkdown
                  skipHtml
                  components={{
                    h1: (props) => <h1 className="hidden" {...props} />,
                    h2: (props) => (
                      <h2
                        className="font-poetsen text-3xl text-text-light mt-12 mb-6 pb-4 border-b border-border-highlight/30"
                        {...props}
                      />
                    ),
                    h3: (props) => (
                      <h3
                        className="font-poetsen text-xl text-accent-glow mt-8 mb-3"
                        {...props}
                      />
                    ),
                    p: (props) => (
                      <p
                        className="font-roboto text-text-muted leading-relaxed mb-6 text-lg"
                        {...props}
                      />
                    ),
                    ul: (props) => (
                      <ul className="space-y-3 mb-8 pl-0 list-none" {...props} />
                    ),
                    li: (props) => (
                      <li
                        className="flex items-start gap-3 text-text-muted font-roboto bg-bg-surface/20 p-3 rounded-lg border border-border-highlight/10"
                        {...props}
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-glow flex-shrink-0" />
                        <span>{props.children}</span>
                      </li>
                    ),
                    img: (props) => (
                      <figure className="my-12">
                        <div className="rounded-xl overflow-hidden border border-border-highlight/20 shadow-[0_0_40px_-10px_rgba(199,125,255,0.1)]">
                          <img
                            {...props}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                        {props.alt && (
                          <figcaption className="text-center text-sm text-text-muted mt-3 italic">
                            {props.alt}
                          </figcaption>
                        )}
                      </figure>
                    ),
                    a: (props) => (
                      <a
                        className="text-accent-glow hover:text-primary underline decoration-dotted underline-offset-4 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                        {...props}
                      />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      {nextProject && (
        <section className="px-6 pb-24" aria-labelledby="next-project-heading">
          <div className="max-w-[1000px] mx-auto">
            <p id="next-project-heading" className="sr-only">
              Next project
            </p>
            <Link to={`/projects/${nextProject.id}`}>
              <motion.div
                className="relative bg-bg-surface/30 backdrop-blur-md border border-border-highlight/20 rounded-3xl p-10 overflow-hidden group hover:border-accent-glow/50 transition-all cursor-pointer text-center"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-text-muted font-roboto text-sm uppercase tracking-wider mb-3">
                    Next Project
                  </p>
                  <h3 className="font-poetsen text-3xl md:text-5xl text-text-light mb-6">
                    {nextProject.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-text-light rounded-full font-roboto font-bold shadow-lg">
                    View Project →
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-5 h-5 text-accent-glow flex-shrink-0 mt-0.5" />
    <div>
      <div className="text-text-muted text-sm font-roboto">{label}</div>
      <div className="text-text-light font-roboto font-medium">{value}</div>
    </div>
  </div>
);

export default ProjectDetail;
