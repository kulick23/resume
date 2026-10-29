import React from 'react';
import { useTranslation } from 'react-i18next';
import './ScrollToTop.scss';

interface ScrollToTopProps {
  showPopup: boolean;
  isFlying: boolean;
  handleFlyUp: () => void;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ showPopup, isFlying, handleFlyUp }) => {
  const { t } = useTranslation();

  if (!showPopup) return null;

  return (
    <button
      type="button"
      className={`scroll-to-top ${isFlying ? 'fly-up' : ''}`}
      onClick={handleFlyUp}
      aria-label={t('nav.scrollToTop')}
    >
      <span aria-hidden="true">&#8593;</span>
    </button>
  );
};
