import React from 'react';
import { HeroPlate } from '../HeroPlate';

type HeroPlatesProps = {
  data: any[];
};

export const HeroPlates: React.FC<HeroPlatesProps> = ({ data }) => {
  const plateClasses = [
    'xl:w-[270px] xl:h-[152px] xl:top-[404px] xl:left-[-155px]',
    'xl:w-[205px] xl:h-[130px] xl:top-[-12px] xl:left-[-87px]',
    'xl:w-[171px] xl:h-[152px] xl:top-[229px] xl:right-[-47px]',
    'xl:w-[209px] xl:h-[152px] xl:top-[434px] xl:right-[-16px]',
  ];
  return (
    <ul className="hidden md:flex md:absolute md:right-0 md:bottom-[-71px] md:gap-[16px]  xl:static  list-none ">
      {data?.map((card, index) => (
        <HeroPlate key={card.id} className={plateClasses[index]} card={card} />
      ))}
    </ul>
  );
};
