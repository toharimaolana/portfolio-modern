import { useEffect } from 'react';

/**
 * SEO component for dynamically managing document title and meta tags per route.
 */
const SEO = ({ title, description }) => {
  useEffect(() => {
    // Default suffix with target keywords
    const defaultTitle = 'Mohamad Tohari Maolana (Tohari / Sito) — Frontend Engineer & UI/UX Specialist';
    const siteTitle = title ? `${title} | Mohamad Tohari Maolana (Tohari / Sito)` : defaultTitle;

    document.title = siteTitle;

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
