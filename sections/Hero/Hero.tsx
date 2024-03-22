import Image from 'next/image';

import React from 'react';

import { Container } from '@/components/Container';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import hero from '@/data/hero.json';
import { LinkToFeedback } from '@/components/LinkToFeedback';

export const Hero: React.FC = () => {
  const { title, description, plates } = hero;
  return (
    <div className="bg-customBackground mt-[50px] mb-[30px] flex flex-col justify-center items-center w-full relative  max-w-[480px] md:hidden">
      <Image
        width={960}
        height={1102}
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
          <p className="inline-block font-mulish text-sm text-text01 mb-9 ">
            {description}
          </p>
          <div className="flex flex-col gap-[36px] ">
            <Slider data={plates} component={HeroPlate} section={'hero'} />
            <LinkToFeedback section={'hero'} />
          </div>
        </Container>
      </div>
    </div>
  );
};
