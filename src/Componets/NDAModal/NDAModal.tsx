import type React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './NDAModal.scss';
import type { BusinessProject } from '../../types';

interface NDAModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: BusinessProject | null;
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
          <span className="nda-modal__badge">{t('nda.title')}</span>
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

          <div className="nda-modal__nda-info">
            <small>{t(project.ndaDescription)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDAModal;
