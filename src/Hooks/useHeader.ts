import { useState, useEffect } from 'react';

export const useHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const [pastThreshold, setPastThreshold] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('header');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0);
      if (y > 150) {
        setPastThreshold(true);
        setScrollDir(y > lastY ? 'down' : 'up');
      } else {
        setPastThreshold(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['header', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isHidden = pastThreshold && scrollDir === 'down';

  return { scrolled, isHidden, activeSection };
};
