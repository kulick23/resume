import { useEffect, useState } from 'react';
import { SECTIONS_NAMES } from '../Constants/sections';

const HIDE_THRESHOLD = 150;

export const useHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTIONS_NAMES[0]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 0);
      setIsHidden(y > HIDE_THRESHOLD && y > lastY);
      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Keep the most visible section highlighted instead of "whichever entry
    // fired last", which used to flicker when two sections overlapped.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio));

        let bestId = '';
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) setActiveSection(bestId);
      },
      { threshold: [0, 0.2, 0.5, 0.8, 1], rootMargin: '-10% 0px -10% 0px' },
    );

    SECTIONS_NAMES.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { scrolled, isHidden, activeSection };
};
