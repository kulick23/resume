import type React from 'react';
import './BusinessLaptop.scss';
import { LAPTOP_IMG } from '../../Constants';
import type { BusinessLaptopProps } from '../../types';

export const BusinessLaptop: React.FC<BusinessLaptopProps> = ({ project, onNDAClick }) => {
  const handleNDAClick = () => {
    if (onNDAClick) {
      console.log('NDAClick triggered for project:', project);
      onNDAClick(project);
    } else {
      console.error('onNDAClick is not defined');
    }
  };

  return (
    <div className="business-laptop">
      <div className="business-laptop__box">
        <div className="business-laptop__screen">
          {project.projectImg ? (
            <img
              src={project.projectImg}
              alt={project.title}
              className="business-laptop__preview"
            />
          ) : (
            <div className="business-laptop__nda-overlay">
              <div className="business-laptop__nda-content">
                <h3>NDA</h3>
                <p>Confidential Project</p>
              </div>
            </div>
          )}
        </div>
        <img
          src={LAPTOP_IMG || '/placeholder.svg'}
          alt="Laptop"
          className="business-laptop--image"
        />
        <div className="business-laptop__stack">
          <span>[</span>
          <span className="business-laptop__stack-text">{project.stack.join(', ')}</span>
          <span>]</span>
        </div>
      </div>
      <div className="business-laptop__info-btn" onClick={handleNDAClick}>
        <span>?</span>
      </div>
    </div>
  );
};

export default BusinessLaptop;
