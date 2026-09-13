import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './NDAModal.scss';
import type { Project } from '../../types';

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

  // Lock the background scroll and wire up Escape while the dialog is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const descriptionKey = project.ndaDescription ?? project.description;
  const descriptionText = descriptionKey ? t(descriptionKey) : '';

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="nda-modal" onClick={handleBackdropClick}>
      <div
        className="nda-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nda-modal-title"
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
          <h2 id="nda-modal-title">{t(project.title)}</h2>
          <span className="nda-modal__badge">
            {project.isNDA ? t('nda.title') : t('projects.infoBadge')}
          </span>
        </div>

        <div className="nda-modal__body">
          <div className="nda-modal__stack">
            <h3>{t('nda.stack')}</h3>
            <div className="nda-modal__stack-list">
              {project.stack.map((tech) => (
                <span key={tech} className="nda-modal__stack-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {descriptionKey && (
            <div className="nda-modal__nda-info">
              <div className="nda-modal__desc">{renderDescription(descriptionText)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
