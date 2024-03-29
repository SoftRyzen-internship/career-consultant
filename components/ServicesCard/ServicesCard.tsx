'use client';
import Image from 'next/image';

import { PortableText } from '@portabletext/react';

import { type IService } from '@/components/ServicesCard/types';

import { CardTitle } from '@/components/CardTitle';
import { LinkToFeedback } from '@/components/LinkToFeedback';

type IServiceCardProps = {
  card: IService;
};

export const ServicesCard = ({ card }: IServiceCardProps) => {
  return (
    <>
      {card && (
        <li
          key={card._id}
          className="px-3 pt-4 pb-5 md:py-6 md:px-4 xl:p-8 bg-white rounded-lg w-full sm:w-[456px] md:w-[336px] xl:w-[384px] mx-auto h-[442px] flex flex-col justify-between mb-5 sm:h-[400px] md:h-[454px] xl:h-[533px] border-[0.5px] border-inputBorder"
        >
          <div>
            <CardTitle text={card.title} />
            {card.duration && (
              <p className="inline-flex gap-1 py-2 pl-3 pr-4 rounded-[20px] bg-inputBg mt-5">
                <Image
                  src="icons/alarm.svg"
                  width={20}
                  height={20}
                  alt="alarm icon"
                />
                <span className="font-mulish text-sm text-accent ">
                  {card.duration}
                </span>
              </p>
            )}

            <div className="prose font-mulish font-normal-400 text-sm xl:text-base  text-text02 services-card mt-7">
              <PortableText value={card.description} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-fixel text-3xl text-accent">{card.price}</p>
            <LinkToFeedback section={'services'} />
          </div>
        </li>
      )}
    </>
  );
};
