'use client';

import Image from 'next/image';

import React, { useEffect, useState } from 'react';

import MediaQuery from 'react-responsive';

import { AdminData, AdminDataAll } from './types';

import { Container } from '@/components/Container';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { HeroPlates } from '@/components/HeroPlates';
import { Section } from '@/components/Section';

import hero from '@/data/hero.json';
import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

export const Hero: React.FC = () => {
  const { title, description1, description2, name, localData } = hero;
  const [isLoaded, setIsLoaded] = useState(false);
  const [adminDatas, setAdminDatas] = useState<AdminDataAll | null>(null);

  useEffect(() => {
    const fetchAdminDatas = async () => {
      const data = await fetchAchievements();
      setAdminDatas(data);
      setIsLoaded(true);
    };

    fetchAdminDatas();
  }, []);

  const plates = localData.map(data => {
    const adminData = adminDatas?.find(
      (item: AdminData) => item.descriptionId === data.id,
    );
    return { ...data, ...adminData };
  });

  return (
    <Section isHerosection>
      {isLoaded && (
        <div className="bg-customBackground  mx-auto flex flex-col justify-center items-center w-full max-w-[480px] md:hidden">
          <Container>
            <div className="w-full rounded-t-[10px] mb-7">
              <MediaQuery maxWidth={767}>
                <Image
                  width={456}
                  height={333}
                  alt="Юлія Степаненко"
                  src="/images/hero/Hero-mobile@2x.jpg"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/images/hero/Hero-mobile.jpg"
                />
              </MediaQuery>
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
      )}
      {isLoaded && (
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
              <MediaQuery minWidth={768} maxWidth={1279}>
                <Image
                  width={320}
                  height={336}
                  alt="Юлія Степаненко"
                  src={'/images/hero/Hero-tablet@2x.png'}
                  priority={true}
                  placeholder="blur"
                  blurDataURL={'/images/hero/Hero-tablet.png'}
                />
              </MediaQuery>
              <MediaQuery minWidth={1280}>
                <Image
                  width={400}
                  height={566}
                  alt="Юлія Степаненко"
                  src={'/images/hero/Hero-desktop@2x.png'}
                  priority={true}
                  placeholder="blur"
                  blurDataURL={'/images/hero/Hero-desktop.png'}
                />
              </MediaQuery>
              <HeroPlates data={plates} />
            </div>
          </div>
        </Container>
      )}
    </Section>
  );
};
