import { scroller } from 'react-scroll';

export function useScrollToSection() {
  return (section: string, options = {}) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      ...options,
    });
  };
}