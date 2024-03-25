'use client';

import Image from 'next/image';

import React, { useEffect, useState } from 'react';

import { Container } from '@/components/Container';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { HeroPlates } from '@/components/HeroPlates';

import hero from '@/data/hero.json';

export const Hero: React.FC = () => {
  const { title, description1, description2, name, plates } = hero;

  const [isTablet, setIsTablet] = useState(true);

  useEffect(() => {
    const handleDisplayWidth = () => {
      if (window.innerWidth > 767 && window.innerWidth < 1280) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };
    handleDisplayWidth();
    window.addEventListener('resize', handleDisplayWidth);
    return () => {
      window.removeEventListener('resize', handleDisplayWidth);
    };
  }, []);

  return (
    <>
      <div className="bg-customBackground mx-auto mb-[280px] flex flex-col justify-center items-center w-full relative  max-w-[480px] md:hidden">
        <Image
          width={480}
          height={551}
          alt="Юлія Степаненко"
          src="/images/hero/Hero-mobile@2x.png"
          priority={true}
          placeholder="blur"
          blurDataURL="/images/hero/Hero-mobile.png"
        />

        <div className="flex flex-col items-center pt-7 pb-9 absolute  w-full mx-auto  max-w-[480px] right-0 left-0 top-[47.8%] bg-customBackground rounded-t-[10px]">
          <Container>
            <h1 className="inline-block font-fixel font-bold text-[40px] leading-[0.95] text-text01 text-left mb-3 ">
              {title}
            </h1>
            <p className=" font-mulish text-sm text-pretty text-text02  mb-9 ">
              {description1}
              <span className="text-text01">{name}</span>
              {description2}
            </p>
            <div className="flex flex-col gap-[36px] ">
              <Slider data={plates} component={HeroPlate} section={'hero'} />
              <LinkToFeedback section={'hero'} />
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className=" hidden md:flex md:flex-row justify-between md:items-start xl:items-center">
          <div className="md:w-[336px] md:pt-5  xl:w-[638px] ">
            <h1 className="inline-block font-fixel font-bold text-[40px] leading-[0.95] text-text01 text-left md:mb-5 xl:text-[78px] xl:mb-[38px] ">
              {title}
            </h1>
            <p className="inline-block font-mulish text-sm text-text02 md:mb-[252px] xl:text-base xl:text-pretty xl:mb-[154px] xl:w-[488px] ">
              {description1}
              <span className="text-text01">{name}</span>
              {description2}
            </p>

            <LinkToFeedback section={'hero'} />
          </div>
          <div className="relative xl:mr-[47px]">
            <Image
              width={isTablet ? 320 : 400}
              height={isTablet ? 336 : 566}
              alt="Юлія Степаненко"
              src={
                isTablet
                  ? '/images/hero/Hero-tablet@2x.png'
                  : '/images/hero/Hero-desktop@2x.png'
              }
              priority={true}
              placeholder="blur"
              blurDataURL={
                isTablet
                  ? '/images/hero/Hero-tablet.png'
                  : '/images/hero/Hero-desktop.png'
              }
            />
            <HeroPlates data={plates} />
          </div>
        </div>
      </Container>
    </>
  );
};
