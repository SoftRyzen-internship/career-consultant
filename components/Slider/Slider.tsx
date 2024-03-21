'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type SliderProps = {
  data: any[];
  component: any;
  section: 'hero' | 'requests' | 'services' | 'reviews';
};

import { SliderButtons } from '../SliderButtons';

export const Slider: React.FC<SliderProps> = ({
  data,
  component: Card,
  section,
}) => {
  const [slides, setSlides] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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
          setSpace(0);
        }
      } else if (window.innerWidth < 1280) {
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

  const swiperParams = {
    loop: true,
    centeredSlides: false,
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    autoplay: isAutoPlay
      ? {
          delay: 5000,
          disableOnInteraction: false,
        }
      : false,
    slidesPerView: slides,
    spaceBetween: space,
    lazyPreloadPrevNext: 1,
  };

  return (
    <div className="flex flex-col justify-center  items-center gap-[16px] md:gap-[24px] xl:flex-col-reverse xl:gap-[48px]  ">
      <Swiper {...swiperParams} className="w-full ">
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Card card={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {section !== 'hero' && section === 'services' && data.length > 3 && (
        <SliderButtons />
      )}
    </div>
  );
};
