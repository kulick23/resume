import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectGallery.scss';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  title,
  className = '',
}) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!hasMultipleImages || isPaused || prefersReducedMotion) return;

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, hasMultipleImages, images.length, isPaused, prefersReducedMotion]);

  if (images.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div
      className={`project-gallery ${className}`.trim()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="project-gallery__viewport">
        <img
          src={images[activeIndex]}
          alt={t('projects.galleryAlt', {
            title,
            current: activeIndex + 1,
            total: images.length,
          })}
          className="project-gallery__image"
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />

        {hasMultipleImages && (
          <div className="project-gallery__controls">
            <button
              type="button"
              className="project-gallery__arrow"
              onClick={showPrevious}
              aria-label={t('projects.previousImage')}
            >
              <span aria-hidden="true">←</span>
            </button>
            <span className="project-gallery__counter" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="project-gallery__arrow"
              onClick={showNext}
              aria-label={t('projects.nextImage')}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <div className="project-gallery__dots" role="group" aria-label={t('projects.gallery')}>
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`project-gallery__dot ${
                activeIndex === index ? 'project-gallery__dot--active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={t('projects.showImage', { current: index + 1, total: images.length })}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
