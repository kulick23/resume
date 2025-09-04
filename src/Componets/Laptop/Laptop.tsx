import React from 'react';
import './Laptop.scss';
import { LAPTOP_IMG, PHONE_IMG } from '../../Constants';
import { LaptopProps } from '../../types';

export const Laptop: React.FC<LaptopProps> = ({ project }) => {
  const handleOpen = (url: string) => window.open(url, '_blank');

  return (
    <div className="laptop">
      <div onClick={() => handleOpen(project.link)} className="laptop__box">
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
                className="laptop--preview"
              />
            </div>
          </div>
        )}
        <div className="laptop__stack">[{project.stack.join(', ')}]</div>
      </div>
      <button className="laptop__button" onClick={() => handleOpen(project.repoLink)} />
    </div>
  );
};

export default Laptop;
