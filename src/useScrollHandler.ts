import { useEffect, useState, useCallback } from 'react';
import { scroller, Events } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useScrollHandler = (
  sections: string[],
  currentSectionIndex: number,
  setCurrentSectionIndex: (index: number) => void
) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentProjectRow, setCurrentProjectRow] = useState(1); 

  const scrollToSection = useCallback(
    (index: number) => {
      const section = sections[index];
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
      setCurrentSectionIndex(index);
    },
    [sections, setCurrentSectionIndex]
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (window.innerWidth <= 768 || isScrolling) return;

      if (currentSectionIndex === 3) { 
        const projectRows = document.querySelectorAll('.project__row');
        const totalRows = projectRows.length;

        if (event.deltaY > 0) { 
          if (currentProjectRow < totalRows) { 
            setIsScrolling(true);
            const nextRow = currentProjectRow + 1;
            setCurrentProjectRow(nextRow);
            scroller.scrollTo(`project-row-${nextRow}`, { smooth: true, duration: 600 });
          } else if (currentProjectRow === totalRows) {
            setIsScrolling(true);
            scrollToSection(currentSectionIndex + 1);
          }
        } else if (event.deltaY < 0) { 
          if (currentProjectRow > 1) { 
            setIsScrolling(true);
            const prevRow = currentProjectRow - 1;
            setCurrentProjectRow(prevRow);
            scroller.scrollTo(`project-row-${prevRow}`, { smooth: true, duration: 600 });
          } else if (currentProjectRow === 1) {
            setIsScrolling(true);
            scrollToSection(currentSectionIndex - 1);
          }
        }
      } else {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
          setIsScrolling(true);
          scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
          setIsScrolling(true);
          scrollToSection(currentSectionIndex - 1);
        }
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 700); 
    },
    [currentSectionIndex, isScrolling, currentProjectRow, sections, scrollToSection]
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    Events.scrollEvent.register('end', (to) => {
      const index = sections.indexOf(to);
      if (index !== -1) {
        setCurrentSectionIndex(index);
        if (index === 3) { 
          setCurrentProjectRow(1);
          scroller.scrollTo(`project-row-1`, { smooth: true, duration: 500 });
        } else {
          setCurrentProjectRow(1);
        }
      }
    });

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      Events.scrollEvent.remove('end');
      window.removeEventListener('wheel', handleWheel);
    };
  }, [sections, handleWheel, setCurrentSectionIndex]);

  useEffect(() => {
    if (currentSectionIndex !== 3) {
      setCurrentProjectRow(1);
    }
  }, [currentSectionIndex]);
};

export default useScrollHandler;