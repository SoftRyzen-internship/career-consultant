'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { HeroPlates } from '@/components/HeroPlates';

import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

import hero from '@/data/hero.json';

import { AdminData } from './types';

export const Hero = () => {
  const { title, description1, description2, name, localData } = hero;

  const [adminDatas, setAdminDatas] = useState<AdminData[]>([]);
  const [plates, setPlates] = useState<(typeof localData)[number][]>([]);
  const [isTablet, setIsTablet] = useState(true);

  useEffect(() => {
    const fetchAdminDatas = async () => {
      const data = await fetchAchievements();
      setAdminDatas(data);
      return data;
    };

    fetchAdminDatas();
  }, []);

  useEffect(() => {
    if (!adminDatas) {
      return;
    }

    const plates = localData?.map(data => {
      const adminData = adminDatas?.find(
        (item: AdminData) => item.descriptionId === data.id,
      );
      return { ...data, ...adminData };
    });

    setPlates(plates);
  }, [localData, adminDatas]);

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
    <Section isHerosection>
      <div className="bg-customBackground  mx-auto flex flex-col justify-center items-center w-full max-w-[480px] md:hidden">
        <Container>
          <div className="w-full bg-customBackground  overflow-hidden rounded-[10px] mb-7">
            <Image
              width={480}
              height={551}
              alt="Юлія Степаненко"
              src="/images/hero/Hero-mobile@2x.jpg"
              priority={true}
              placeholder="blur"
              blurDataURL="/images/hero/Hero-mobile.jpg"
            />
          </div>

          <h1 className="inline-block font-fixel font-bold text-[40px] leading-[0.95] text-text01 text-left mb-[12px] ">
            {title}
          </h1>
          <p className=" font-mulish text-sm text-pretty text-text02 xl:text-[18px] xl:leading-[1.5] xl:font-normal  mb-[36px] ">
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
    </Section>
  );
};
