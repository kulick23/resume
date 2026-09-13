import { useCallback, useEffect, useState } from 'react';

const BOTTOM_OFFSET = 100;
const FLY_DURATION = 1000;

export const useScrollToTop = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollBottom = window.scrollY + window.innerHeight;
      setShowPopup(scrollBottom >= document.documentElement.scrollHeight - BOTTOM_OFFSET);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFlyUp = useCallback(() => {
    setIsFlying(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!isFlying) return;
    const timer = window.setTimeout(() => setIsFlying(false), FLY_DURATION);
    return () => window.clearTimeout(timer);
  }, [isFlying]);

  return { showPopup, isFlying, handleFlyUp };
};
