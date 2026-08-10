import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Resets window and Lenis scroll position to (0, 0) instantly on route changes
 * to prevent layout jumps and ensure smooth page entry.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset window scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Reset Lenis scroll if present on window
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
