import React from 'react';
import './Laptop.scss';
import { LAPTOP_IMG, PHONE_IMG } from '../../Constants';
import { LaptopProps } from '../../types';

export const Laptop: React.FC<LaptopProps> = ({
  project,
  onInfoClick,
  showCodeButton = true,
  enableProjectLink = true,
}) => {
  const hasPreviewLink = enableProjectLink && Boolean(project.link);
  const hasRepoLink = showCodeButton && Boolean(project.repoLink);

  const handleOpen = (url: string) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  return (
    <div className="laptop">
      <div
        onClick={hasPreviewLink ? () => handleOpen(project.link) : undefined}
        className={`laptop__box ${hasPreviewLink ? '' : 'laptop__box--no-link'}`}
      >
        <img src={LAPTOP_IMG} alt="Laptop" className="laptop--image" />
        <div className="laptop__screen">
          <img src={project.projectImg} alt={project.title} className="laptop--preview" />
        </div>
        {project.mobileImg && (
          <div className="laptop__phone">
            <img src={PHONE_IMG} alt="Phone" className="laptop__phone--image" />
            <div className="laptop__phone--screen">
              <img
                src={project.mobileImg}
                alt={`${project.title} mobile`}
                className="laptop--preview laptop--preview-mobile"
              />
            </div>
          </div>
        )}
        <div className="laptop__stack">
          <span>[</span>
          <span className="laptop__stack-text">{project.stack.join(', ')}</span>
          <span>]</span>
        </div>
      </div>
      {onInfoClick && (
        <div className="laptop__info-btn" onClick={() => onInfoClick(project)}>
          <span>?</span>
        </div>
      )}
      {hasRepoLink && <button className="laptop__button" onClick={() => handleOpen(project.repoLink)} />}
    </div>
  );
};

export default Laptop;
