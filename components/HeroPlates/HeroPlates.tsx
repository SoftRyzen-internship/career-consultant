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
  return (
    <div className="hidden md:flex md:gap-[16px] xl:flex-col xl:gap-[30px] list-none ">
      {plates.map((plate, index) => (
        <li key={plate.id}>
          <HeroPlate
            className={`plate-${index + 1}`}
            quantity={plate.quantity}
            description={plate.description}
          />
        </li>
      ))}
    </div>
  );
};

export default HeroPlates;
