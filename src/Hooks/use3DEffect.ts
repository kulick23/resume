import { useRef } from 'react';

export const use3DEffect = (maxRotate: number = 15) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;
    img.style.setProperty('--rotateX', `${rotateX}deg`);
    img.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (img) {
      img.style.setProperty('--rotateX', '0deg');
      img.style.setProperty('--rotateY', '0deg');
    }
  };

  return { imgRef, handleMouseMove, handleMouseLeave };
};
