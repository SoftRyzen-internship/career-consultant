import React from 'react';
import HeroPlate from '@/components/HeroPlate/HeroPlate';
import hero from '@/data/hero.json';

const { plates } = hero;
type HeroPlatesProps = {
  id?: string;
  quantity?: string;
  description?: string;
};

const HeroPlates: React.FC<HeroPlatesProps> = () => {
  const plateClasses = [
    'xl:w-[270px] xl:h-[152px]',
    'xl:w-[202px] xl:h-[130px]',
    'xl:w-[171px] xl:h-[152px]',
    'xl:w-[209px] xl:h-[152px]',
  ];
  return (
    <div className=" md:flex md:gap-[16px] xl:flex-col xl:gap-[30px] list-none ">
      {plates.map((plate, index) => (
        <li key={plate.id}>
          <HeroPlate
            className={plateClasses[index]}
            quantity={plate.quantity}
            description={plate.description}
          />
        </li>
      ))}
    </div>
  );
};

export default HeroPlates;
