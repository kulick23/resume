import { useState, useEffect } from 'react';

export const useScrollToTop = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 100;
      setShowPopup(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFlyUp = () => {
    setIsFlying(true);
    const duration = 1000;
    const startScroll = window.pageYOffset;
    const startTime = performance.now();
    const element = document.querySelector('.scroll-to-top') as HTMLElement;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentScroll = startScroll * (1 - progress);
      window.scrollTo(0, currentScroll);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (element) {
          element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
          element.style.transform = 'translateY(-100vh)';
          element.style.opacity = '0';

          setTimeout(() => {
            setIsFlying(false);
            element.style.transform = '';
            element.style.opacity = '';
            element.style.transition = '';
          }, 500);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return { showPopup, isFlying, handleFlyUp };
};
