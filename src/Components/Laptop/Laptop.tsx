import React from 'react';
import { useTranslation } from 'react-i18next';
import './Laptop.scss';
import type { LaptopProps } from '../../types';

export const Laptop: React.FC<LaptopProps> = ({
  project,
  onInfoClick,
  showCodeButton = true,
  enableProjectLink = true,
}) => {
  const { t } = useTranslation();
  const hasPreviewLink = enableProjectLink && Boolean(project.link);
  const hasRepoLink = showCodeButton && Boolean(project.repoLink);

  const openInNewTab = (url: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="laptop">
      <div
        role={hasPreviewLink ? 'link' : undefined}
        tabIndex={hasPreviewLink ? 0 : undefined}
        aria-label={hasPreviewLink ? `${project.title} — ${t('projects.openSite')}` : undefined}
        onClick={hasPreviewLink ? () => openInNewTab(project.link) : undefined}
        onKeyDown={
          hasPreviewLink
            ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openInNewTab(project.link);
                }
              }
            : undefined
        }
        className={`laptop__preview ${hasPreviewLink ? '' : 'laptop__preview--no-link'}`}
      >
        <img
          src={project.projectImg}
          alt={project.title}
          className="laptop__image"
          loading="lazy"
          decoding="async"
        />
        {project.mobileImg && (
          <img
            src={project.mobileImg}
            alt={`${project.title} — mobile`}
            className="laptop__mobile-image"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="laptop__content">
        <div className="laptop__meta">
          <span>{project.category === 'business' ? t('projects.business') : t('projects.pet')}</span>
          {project.isNDA && <span>{t('projects.nda')}</span>}
        </div>
        <h3>{project.title}</h3>
        <div className="laptop__stack" aria-label="Stack">
          {project.stack.slice(0, 8).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="laptop__actions">
          {onInfoClick && (
            <button
              type="button"
              className="laptop__action laptop__action--info"
              onClick={() => onInfoClick(project)}
            >
              <span className="laptop__action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 10.8v5.2M12 8h.01" />
                </svg>
              </span>
              <span>{t('projects.infoBadge')}</span>
              <span className="laptop__action-arrow" aria-hidden="true">↗</span>
            </button>
          )}
          {hasRepoLink && (
            <button
              type="button"
              className="laptop__action laptop__action--secondary"
              onClick={() => openInNewTab(project.repoLink)}
            >
              <span className="laptop__action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
                </svg>
              </span>
              <span>{t('projects.code')}</span>
            </button>
          )}
          {hasPreviewLink && (
            <button
              type="button"
              className="laptop__action laptop__action--primary"
              onClick={() => openInNewTab(project.link)}
            >
              <span>{t('projects.openSite')}</span>
              <span className="laptop__action-arrow" aria-hidden="true">↗</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
