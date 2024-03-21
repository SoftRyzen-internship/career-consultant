import React from 'react';

type HeroPlatesProps = {
  data: any[];
};

import { HeroPlate } from '../HeroPlate/HeroPlate';

export const HeroPlates: React.FC<HeroPlatesProps> = ({ data }) => {
  const plateClasses = [
    'xl:w-[270px] xl:h-[152px] xl:top-5 xl:left-1',
    'xl:w-[202px] xl:h-[130px] xl:top-7 xl:left-3',
    'xl:w-[171px] xl:h-[152px] xl:top-10 xl:left-5',
    'xl:w-[205px] xl:h-[152px] xl:top-12 xl:left-7',
  ];
  return (
    <div className="hidden md:flex md:gap-[16px] xl:flex-col xl:gap-[30px] list-none ">
      {data?.map((card, index) => (
        <li key={index}>
          <HeroPlate className={plateClasses[index]} card={card} />
        </li>
      ))}
    </div>
  );
};
