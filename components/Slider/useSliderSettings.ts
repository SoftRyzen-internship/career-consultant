import { useState, useEffect } from 'react';

export const useSliderSettings = (section: string) => {
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const handleSlidesPerView = () => {
      if (window.innerWidth < 768) {
        if (section === 'hero') {
          setSlides(2);
        } else {
          setSlides(1);
        }
      } else if (window.innerWidth > 767 && window.innerWidth < 1280) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };
    handleSlidesPerView();
    window.addEventListener('resize', handleSlidesPerView);
    return () => {
      window.removeEventListener('resize', handleSlidesPerView);
    };
  }, [section]);

  return { slides };
};
