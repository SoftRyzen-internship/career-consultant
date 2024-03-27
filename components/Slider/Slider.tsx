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
};

import { SliderButtons } from '@/components/SliderButtons';
import { useSliderSettings } from './useSliderSettings';

export const Slider: React.FC<SliderProps> = ({
  data,
  component: Card,
  section,
}) => {
  const { isAutoPlay, space, slides } = useSliderSettings(section);

  const swiperParams = {
    loop: data.length > slides,
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
      <Swiper {...swiperParams} className="w-full">
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index} className=" h-auto ">
              <Card card={card} className="h-full" />
            </SwiperSlide>
          );
        })}
        {section !== 'hero' && data.length >= 3 && <SliderButtons />}
      </Swiper>
    </div>
  );
};
