'use client';

import { PortableText } from '@portabletext/react';

import { type IService } from '@/components/ServicesCard/types';

import { CardTitle } from '@/components/CardTitle';
import { LinkToFeedback } from '@/components/LinkToFeedback';

import AlarmIcon from '@/public/icons/alarm.svg';

type IServiceCardProps = {
  card: IService;
};

export const ServicesCard = ({ card }: IServiceCardProps) => {
  return (
    <>
      {card && (
        <div
          key={card._id}
          className="px-3 pt-4 pb-5 md:py-6 md:px-4 xl:p-8 bg-white rounded-lg w-full sm:w-[456px] md:w-[336px] xl:w-[384px] mx-auto h-[442px] flex flex-col justify-between sm:h-[400px] md:h-[454px] xl:h-[533px] border-[0.5px] border-inputBorder"
        >
          <div>
            <CardTitle text={card.title} />
            {card.duration && (
              <p className="inline-flex gap-2 py-2 pl-3 pr-4 rounded-[20px] bg-inputBg mt-5">
                <AlarmIcon width={20} height={20} />
                <span className="font-mulish text-sm text-accent font-medium leading-[1.4]">
                  {card.duration}
                </span>
              </p>
            )}

            <div className="prose font-mulish font-normal-400 text-sm xl:text-base  text-text02 services-card mt-7">
              <PortableText value={card.description} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-fixel text-3xl text-accent font-medium leading-[1.15]">
              {card.price}
            </p>
            <LinkToFeedback section={'services'} />
          </div>
        </div>
      )}
    </>
  );
};
