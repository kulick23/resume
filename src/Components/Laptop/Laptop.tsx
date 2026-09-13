import React from 'react';
import { useTranslation } from 'react-i18next';
import './Laptop.scss';
import { LAPTOP_IMG, PHONE_IMG } from '../../Constants';
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
    <div className="laptop">
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
        className={`laptop__box ${hasPreviewLink ? '' : 'laptop__box--no-link'}`}
      >
        <img src={LAPTOP_IMG} alt="" className="laptop--image" decoding="async" loading="lazy" />
        <div className="laptop__screen">
          <img
            src={project.projectImg}
            alt={project.title}
            className="laptop--preview"
            loading="lazy"
            decoding="async"
          />
        </div>
        {project.mobileImg && (
          <div className="laptop__phone">
            <img
              src={PHONE_IMG}
              alt=""
              className="laptop__phone--image"
              loading="lazy"
              decoding="async"
            />
            <div className="laptop__phone--screen">
              <img
                src={project.mobileImg}
                alt={`${project.title} — mobile`}
                className="laptop--preview laptop--preview-mobile"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        <div className="laptop__stack">
          <span aria-hidden="true">[</span>
          <span className="laptop__stack-text">{project.stack.join(', ')}</span>
          <span aria-hidden="true">]</span>
        </div>
      </div>
      {onInfoClick && (
        <button
          type="button"
          className="laptop__info-btn"
          onClick={() => onInfoClick(project)}
          aria-label={`${project.title} — ${t('projects.infoBadge')}`}
        >
          <span aria-hidden="true">?</span>
        </button>
      )}
      {hasRepoLink && (
        <button
          type="button"
          className="laptop__button"
          onClick={() => openInNewTab(project.repoLink)}
          aria-label={`${project.title} — ${t('projects.openRepo')}`}
        />
      )}
    </div>
  );
};
