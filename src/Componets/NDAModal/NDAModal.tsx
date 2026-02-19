import type React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './NDAModal.scss';
import type { Project } from '../../types';

interface NDAModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const NDAModal: React.FC<NDAModalProps> = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();

  // Предотвращаем скролл фона при открытии модала
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;
  const descriptionKey = project.ndaDescription || project.description;
  const descriptionText = descriptionKey ? t(descriptionKey) : '';

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
        <div
          className="nda-modal__desc-section"
          key={`${sectionIndex}-${headingLine || 'section'}`}
        >
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="nda-modal" onClick={handleBackdropClick}>
      <div className="nda-modal__content">
        <button className="nda-modal__close" onClick={onClose}>
          ×
        </button>

        <div className="nda-modal__header">
          <h2>{t(project.title)}</h2>
          <span className="nda-modal__badge">
            {project.isNDA ? t('nda.title') : t('projects.infoBadge')}
          </span>
        </div>

        <div className="nda-modal__body">
          <div className="nda-modal__stack">
            <h3>{t('nda.stack')}</h3>
            <div className="nda-modal__stack-list">
              {project.stack.map((tech, index) => (
                <span key={index} className="nda-modal__stack-item">
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

export default NDAModal;
