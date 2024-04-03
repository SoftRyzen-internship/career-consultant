'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Slider } from '@/components/Slider';
import { HeroPlate } from '@/components/HeroPlate';
import { LinkToFeedback } from '@/components/LinkToFeedback';
import { HeroPlates } from '@/components/HeroPlates';
import { Spinner } from '@/components/Spinner';

import { fetchAchievements } from '@/sanity/requests/fetchAchievements';

import hero from '@/data/hero.json';

import { AdminData } from './types';

export const Hero = () => {
  const { title, description1, description2, name, localData } = hero;

  const [adminDatas, setAdminDatas] = useState<AdminData[]>([]);
  const [plates, setPlates] = useState<(typeof localData)[number][]>([]);
  const [loading, setLoading] = useState(true);

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

    if (plates.length > 0) {
      setLoading(false);
    }
  }, [localData, adminDatas]);

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
          <p className=" font-mulish text-sm text-pretty text-text02 xl:font-normal  xl:text-[18px] xl:leading-[1.5]  mb-[36px] ">
            {description1}
            <span className="text-text01">{name}</span>
            {description2}
          </p>
          <div className="flex flex-col gap-[36px] ">
            {loading ? (
              <Spinner />
            ) : (
              <Slider
                data={plates}
                component={HeroPlate}
                section={'hero'}
                className="max-md:h-[106px]"
              />
            )}

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
            <p className="inline-block font-mulish text-sm text-text02 md:mb-[252px] xl:font-normal  xl:text-[18px] xl:leading-[1.5]  xl:text-pretty xl:mb-[154px] xl:w-[465px] ">
              {description1}
              <span className="text-text01">{name}</span>
              {description2}
            </p>

            <LinkToFeedback section={'hero'} />
          </div>

          <div className="relative xl:mr-[47px]">
            <div className="hidden md:block xl:hidden">
              <Image
                width={320}
                height={336}
                alt="Юлія Степаненко"
                src={'/images/hero/Hero-tablet@2x.png'}
                priority={true}
                placeholder="blur"
                blurDataURL={'/images/hero/Hero-tablet.png'}
              />
            </div>
            <div className="hidden xl:block">
              <Image
                width={400}
                height={566}
                alt="Юлія Степаненко"
                src={'/images/hero/Hero-desktop@2x.png'}
                priority={true}
                placeholder="blur"
                blurDataURL={'/images/hero/Hero-desktop.png'}
              />
            </div>

            <HeroPlates data={plates} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
