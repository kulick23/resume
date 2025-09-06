import { useEffect, useRef } from 'react';

export const useStars = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const stars = ['stars', 'stars2', 'stars3'];

  useEffect(() => {
    const createExtraStars = () => {
      if (starsRef.current) {
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        );
        starsRef.current.style.height = `${docHeight * 2}px`;
      }
    };

    createExtraStars();
    window.addEventListener('resize', createExtraStars);
    return () => window.removeEventListener('resize', createExtraStars);
  }, []);

  return { starsRef, stars };
};
