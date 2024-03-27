'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import Arrow from '@/public/icons/left-arrow.svg';

type SlidesButtonsProps = {
  slidesCount: number;
};

export const SliderButtons: React.FC<SlidesButtonsProps> = ({
  slidesCount,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const isDesktop = useMediaQuery({ minDeviceWidth: 1280 });
  const isTablet = useMediaQuery({ minDeviceWidth: 768, maxDeviceWidth: 1279 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

  const btnsClassName = classNames({
    flex:
      isLoaded &&
      (slidesCount > 3 ||
        (isMobile && slidesCount === 2) ||
        (isTablet && slidesCount === 3)),
    hidden:
      isLoaded &&
      ((isDesktop && slidesCount <= 3) ||
        (isTablet && slidesCount <= 2) ||
        (isTablet && slidesCount <= 1)),
  });
  return (
    <div
      className={classNames(
        'flex gap-[12px] md:gap-[16px] xl:absolute xl:top-[-108px] xl:right-0',
        btnsClassName,
      )}
    >
      <button
        aria-label="Попередня картка"
        type="button"
        className="button-prev inline-flex justify-center items-center rounded-full border-0 cursor-pointer w-[60px] h-[60px] bg-swiperBtn text-accent  transition-colors duration-300 hover:bg-swiperBtnHover focus:bg-swiperBtnHover"
      >
        <Arrow width={32} height={32} />
      </button>
      <button
        aria-label="Наступна картка"
        type="button"
        className="button-next inline-flex justify-center items-center rounded-full border-0 cursor-pointer w-[60px] h-[60px] bg-swiperBtn text-accent  transition-colors duration-300 hover:bg-swiperBtnHover focus:bg-swiperBtnHover"
      >
        <Arrow className="rotate-180" width={32} height={32} />
      </button>
    </div>
  );
};
