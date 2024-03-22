import React from 'react';

import { Plate } from './types';

type HeroPlateProps = {
  card: Plate;
  className?: string;
};

export const HeroPlate: React.FC<HeroPlateProps> = ({ card, className }) => {
  const { quantity, description } = card;

  return (
    <div
      className={`w-auto h-[126px] sm:h-[106px] border-0 rounded-lg  bg-white py-[12px] px-[16px]  md:p-[20px] md:w-[160px] md:h-[141px] xl:py-[24px] xl:px-[32px]   ${className} `}
    >
      <span className="inline-block text-text01 font-fixel font-normal text-[32px] leading-[1] mb-[8px] md:leading-[1.21] xl:text-[48px] xl:leading-[1]  xl:mb-3 ">
        {quantity}
      </span>
      <p className=" font-mulish font-normal whitespace-pre-wrap text-text02 text-xs xl:text-[16px] xl:font-medium leading-[1.4] ">
        {description}
      </p>
    </div>
  );
};
