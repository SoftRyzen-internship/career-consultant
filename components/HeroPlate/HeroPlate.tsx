import React from 'react';

type HeroPlateProps = {
  quantity: string;
  description: string;
};

const HeroPlate: React.FC<HeroPlateProps> = ({ quantity, description }) => {
  return (
    <div className="w-[162px] h-[124px] border-0 rounded-lg shadow-custom bg-white py-3 px-4 sm:w-[222px] sm:h-[106px] md:p-5 md:w-[160px] md:h-[141px] xl:py-6 xl:px-8 ">
      <p className="text-text01 font-fixel-medium text-[32px] leading-[1.21] ">
        {quantity}
      </p>
      <p className=" text-text02 text-xs  ">{description}</p>
    </div>
  );
};

export default HeroPlate;
