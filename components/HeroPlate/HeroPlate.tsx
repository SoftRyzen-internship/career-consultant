import React from 'react';

type HeroPlateProps = {
  quantity: string;
  description: string;
  className: string;
};

const HeroPlate: React.FC<HeroPlateProps> = ({
  quantity,
  description,
  className,
}) => {
  return (
    <div
      className={`w-[162px] h-[124px] border-0 rounded-lg shadow-custom bg-white py-[12px] px-[16px] sm:w-[222px] sm:h-[106px] md:p-[20px] md:w-[160px] md:h-[141px] xl:py-[24px] xl:px-[32px] ${className}`}
    >
      <p className="text-text01 font-fixel-regular text-[32px] leading-[1.21] mb-2 xl:text-[48px] font-normal xl:mb-3 ">
        {quantity}
      </p>
      <p className=" text-text02 text-xs xl:text-[16px] xl: font-medium leading-[1.4] ">
        {description}
      </p>
    </div>
  );
};

export default HeroPlate;
