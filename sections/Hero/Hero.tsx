'use client';
import { AdminData } from './types';

import { Container } from '@/components/Container';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { HeroPlates } from '@/components/HeroPlates';
import { Section } from '@/components/Section';
import { HeroImages } from '@/components/HeroImages';

import hero from '@/data/hero.json';
import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

export const Hero = async () => {
  const { title, description1, description2, name, localData } = hero;
  const adminDatas = await fetchAchievements();

  const plates = localData.map(data => {
    const adminData = adminDatas?.find(
      (item: AdminData) => item.descriptionId === data.id,
    );
    return { ...data, ...adminData };
  });

  return (
    <Section isHerosection>
      <div className="bg-customBackground  mx-auto flex flex-col justify-center items-center w-full max-w-[480px] md:hidden">
        <Container>
          <div className="w-full rounded-t-[10px] mb-7">
            <HeroImages
              maxWidth={767}
              width={456}
              height={333}
              src={'/images/hero/Hero-mobile@2x.jpg'}
              blur={'/images/hero/Hero-mobile.jpg'}
            />
          </div>

          <h1 className="inline-block font-fixel font-bold text-[40px] leading-[0.95] text-text01 text-left mb-[12px] ">
            {title}
          </h1>
          <p className=" font-mulish text-sm text-pretty text-text02  mb-[36px] ">
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

      <Container>
        <div className=" hidden md:flex md:flex-row justify-between md:items-start xl:items-center ">
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
            <HeroImages
              minWidth={768}
              maxWidth={1279}
              width={320}
              height={336}
              src={'/images/hero/Hero-tablet@2x.png'}
              blur={'/images/hero/Hero-tablet.png'}
            />
            <HeroImages
              minWidth={1280}
              width={400}
              height={566}
              src={'/images/hero/Hero-desktop@2x.png'}
              blur={'/images/hero/Hero-desktop.png'}
            />
            <HeroPlates data={plates} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
