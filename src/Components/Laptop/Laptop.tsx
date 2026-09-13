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
            <button type="button" className="laptop__info-btn" onClick={() => onInfoClick(project)}>
              {t('projects.infoBadge')}
            </button>
          )}
          {hasRepoLink && (
            <button type="button" className="laptop__button" onClick={() => openInNewTab(project.repoLink)}>
              {t('projects.code')}
            </button>
          )}
          {hasPreviewLink && (
            <button type="button" className="laptop__button" onClick={() => openInNewTab(project.link)}>
              {t('projects.openSite')}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
