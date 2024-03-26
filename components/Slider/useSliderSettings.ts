import { useState, useEffect } from 'react';

export const useSliderSettings = (section: string) => {
  const [slides, setSlides] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [space, setSpace] = useState(0);

  useEffect(() => {
    const handleSlidesPerView = () => {
      if (window.innerWidth < 768) {
        if (section === 'hero') {
          setSlides(2);
          setSpace(12);
          setIsAutoPlay(true);
        } else {
          setSlides(1);
          setSpace(5);
          setIsAutoPlay(false);
        }
      } else if (window.innerWidth > 767 && window.innerWidth < 1280) {
        setSlides(2);
        setIsAutoPlay(false);
        setSpace(16);
      } else {
        setSlides(3);
        setIsAutoPlay(false);
        setSpace(32);
      }
    };
    handleSlidesPerView();
    window.addEventListener('resize', handleSlidesPerView);
    return () => {
      window.removeEventListener('resize', handleSlidesPerView);
    };
  }, [section]);

  return { isAutoPlay, slides, space };
};
