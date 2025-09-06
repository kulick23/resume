import React from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceItem.scss';
import { ExperienceItemProps } from '../../types';

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="experience__item" key={item.id}>
      <div className="experience__item-header">
        <div className="experience__icon-wrapper">
          {item.icon && (
            <img src={item.icon} alt={item.iconAlt || ''} className="experience__icon" />
          )}
        </div>
        <div className="experience__item-info">
          <h4 className="experience__item-title">{t(item.position)}</h4>
          <p className="experience__item-subtitle">{item.company}</p>
        </div>
      </div>
      <div className="experience__item-info">
        <small className="experience__item-period">{item.duration}</small>
        <p className="experience__item-description">{t(item.description)}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
