'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

type SliderProps = {
  data: any[];
  component: any;
  section: 'hero' | 'requests' | 'services' | 'reviews';
  className?: string;
};

import { SliderButtons } from '@/components/SliderButtons';
import { useSliderSettings } from './useSliderSettings';

export const Slider: React.FC<SliderProps> = ({
  data,
  component: Card,
  section,
  className = '',
}) => {
  const { slides } = useSliderSettings(section);

  const swiperParams = {
    loop: data?.length > slides,
    centeredSlides: false,
    modules: [Navigation, Autoplay],
    navigation: {
      nextEl: `.button-next-${section}`,
      prevEl: `.button-prev-${section}`,
    },
    autoplay:
      section === 'hero'
        ? {
            delay: 5000,
            disableOnInteraction: false,
          }
        : false,
    slidesPerView: section === 'hero' ? 2 : 1,
    spaceBetween: 12,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },

    lazyPreloadPrevNext: 1,
  };

  return (
    <div className="flex flex-col justify-center  items-center gap-[16px] md:gap-[24px] relative xl:flex-col-reverse xl:gap-[48px]  ">
      <Swiper {...swiperParams} className={`w-full ${className}`}>
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Card card={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {section !== 'hero' && (
        <SliderButtons section={section} slidesCount={data?.length} />
      )}
    </div>
  );
};
