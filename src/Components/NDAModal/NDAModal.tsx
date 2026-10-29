import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './NDAModal.scss';
import type { Project } from '../../types';
import { ProjectGallery } from '../ProjectGallery';

interface NDAModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const renderDescription = (text: string) => {
  const sections = text
    .split('\n\n')
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.map((section, sectionIndex) => {
    const lines = section
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    const headingLine = lines[0].endsWith(':') ? lines[0] : null;
    const contentLines = headingLine ? lines.slice(1) : lines;
    const bulletLines = contentLines.filter((line) => line.startsWith('- '));
    const plainLines = contentLines.filter((line) => !line.startsWith('- '));

    return (
      <div className="nda-modal__desc-section" key={`${sectionIndex}-${headingLine ?? 'section'}`}>
        {headingLine && <h4 className="nda-modal__desc-title">{headingLine}</h4>}

        {plainLines.map((line, lineIndex) => (
          <p className="nda-modal__desc-text" key={`${sectionIndex}-p-${lineIndex}`}>
            {line}
          </p>
        ))}

        {bulletLines.length > 0 && (
          <ul className="nda-modal__desc-list">
            {bulletLines.map((line, lineIndex) => (
              <li key={`${sectionIndex}-li-${lineIndex}`}>{line.replace(/^- /, '')}</li>
            ))}
          </ul>
        )}
      </div>
    );
  });
};

export const NDAModal: React.FC<NDAModalProps> = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const descriptionKey = project.ndaDescription ?? project.description;
  const descriptionText = descriptionKey ? t(descriptionKey) : '';
  const galleryImages = project.gallery?.length ? project.gallery : [project.projectImg];

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="nda-modal" onClick={handleBackdropClick}>
      <div
        ref={dialogRef}
        className="nda-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nda-modal-title"
        aria-describedby="nda-modal-description"
      >
        <button
          type="button"
          ref={closeButtonRef}
          className="nda-modal__close"
          onClick={onClose}
          aria-label={t('nda.close')}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="nda-modal__header">
          <div>
            <p className="nda-modal__eyebrow">{t('projects.caseStudy')}</p>
            <h2 id="nda-modal-title">{t(project.title)}</h2>
          </div>
          <span className={`nda-modal__badge ${project.isNDA ? 'nda-modal__badge--nda' : ''}`}>
            {project.featured
              ? t('projects.featured')
              : project.isNDA
                ? t('nda.title')
                : t('projects.business')}
          </span>
        </div>

        <div className="nda-modal__layout">
          <div className="nda-modal__visual">
            <ProjectGallery
              images={galleryImages}
              title={project.title}
              className="project-gallery--modal"
            />
            <div className="nda-modal__visual-caption">
              <span>
                {project.category === 'business' ? t('projects.business') : t('projects.pet')}
              </span>
              <span>
                {project.stack.length} {t('projects.technologies')}
              </span>
            </div>
          </div>

          <div className="nda-modal__body">
            {descriptionKey && (
              <section className="nda-modal__overview" id="nda-modal-description">
                <h3>{t('projects.overview')}</h3>
                <div className="nda-modal__desc">{renderDescription(descriptionText)}</div>
              </section>
            )}

            <section className="nda-modal__stack">
              <h3>{t('nda.stack')}</h3>
              <div className="nda-modal__stack-list">
                {project.stack.map((tech) => (
                  <span key={tech} className="nda-modal__stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {project.isNDA && (
              <div className="nda-modal__notice">
                <span aria-hidden="true">●</span>
                <p>{t('projects.ndaNotice')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
