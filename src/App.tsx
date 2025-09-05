import './App.scss';
import { Contact, About, Skills, Project, Header } from './Componets';
import { Element } from 'react-scroll';
import { useAOS } from './Hooks';
import ExperienceEducation from './Componets/ExperienceEducation/ExperienceEducation';
import { useState, useEffect, useRef } from 'react';
import NaboImg from './Assets/PngImg/nabo.png'; // Импорт картинки

function App() {
  useAOS();
  const [showPopup, setShowPopup] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const starsRef = useRef<HTMLDivElement>(null);

  // Создаем дополнительные звезды на всю высоту страницы
  useEffect(() => {
    const createExtraStars = () => {
      if (starsRef.current) {
        // Получаем высоту документа
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        );

        // Задаем высоту звездного фона достаточной для всей страницы
        starsRef.current.style.height = `${docHeight * 2}px`;
      }
    };

    createExtraStars();
    // Обновляем при изменении размера окна
    window.addEventListener('resize', createExtraStars);
    return () => window.removeEventListener('resize', createExtraStars);
  }, []);

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
    const duration = 1000; // Время скролла
    const startScroll = window.pageYOffset;
    const startTime = performance.now();
    const element = document.querySelector('.scroll-to-top') as HTMLElement;

    // Сначала только скролл без движения самолета
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentScroll = startScroll * (1 - progress);
      window.scrollTo(0, currentScroll);

      // Продолжаем анимацию скролла
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Когда скролл закончен, запускаем анимацию улетающего самолета
        if (element) {
          element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
          element.style.transform = 'translateY(-100vh)';
          element.style.opacity = '0';

          // Возвращаем самолет в исходное состояние после анимации
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

  return (
    <div className="App">
      {/* Фон со звездами для всего сайта */}
      <div className="stars-container" ref={starsRef}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <Element name="header" id="header">
        <Header data-aos="fade-down" />
      </Element>
      <Element name="about" id="about">
        <About data-aos="fade-left" />
      </Element>
      <Element name="skills" id="skills">
        <Skills data-aos="fade-left" />
      </Element>
      <Element name="projects" id="projects">
        <Project data-aos="fade-up" />
      </Element>
      <Element name="experience" id="experience">
        <ExperienceEducation data-aos="zoom-in" />
      </Element>
      <Element name="contact" id="contact">
        <Contact data-aos="fade-right" />
      </Element>

      {/* Поп-ап для скролла наверх */}
      {showPopup && (
        <div className={`scroll-to-top ${isFlying ? 'fly-up' : ''}`} onClick={handleFlyUp}>
          <svg width="60" height="60" viewBox="0 0 60 60" className="scroll-svg">
            {/* Левая половина круга, повернутая для нижней точки */}
            <circle
              cx="30"
              cy="30"
              r="28"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="88 176"
              strokeDashoffset="88"
              className="circle-left"
              transform="rotate(-90 30 30)"
            />
            {/* Правая половина круга, повернутая для нижней точки */}
            <circle
              cx="30"
              cy="30"
              r="28"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="88 176"
              strokeDashoffset="88"
              className="circle-right"
              transform="rotate(90 30 30)"
            />
          </svg>
          <img src={NaboImg} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
}

export default App;
