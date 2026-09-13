import React from 'react';
import { useTranslation } from 'react-i18next';
import './ScrollToTop.scss';
import NaboImg from '../../Assets/PngImg/nabo.webp';

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
      <svg width="60" height="60" viewBox="0 0 60 60" className="scroll-svg" aria-hidden="true">
        <circle
          cx="30"
          cy="30"
          r="28"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeDasharray="88 176"
          strokeDashoffset="88"
          className="circle-left"
          transform="rotate(-90 30 30)"
        />
        <circle
          cx="30"
          cy="30"
          r="28"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeDasharray="88 176"
          strokeDashoffset="88"
          className="circle-right"
          transform="rotate(90 30 30)"
        />
      </svg>
      <img src={NaboImg} alt="" width={240} height={381} decoding="async" />
    </button>
  );
};
