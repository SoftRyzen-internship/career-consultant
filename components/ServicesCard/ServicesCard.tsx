import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import { CardTitle } from '../CardTitle';

type IService = {
  _id: string;
  title: string;
  description: [];
  duration?: string | undefined;
};

type IServiceCardProps = {
  service: IService;
};

export const ServicesCard = ({ service }: IServiceCardProps) => {
  console.log(service.description);
  return (
    <>
      <div
        key={service._id}
        className="px-3 pt-4 pb-5 bg-white rounded-lg w-[336px] mx-auto"
      >
        <CardTitle text={service.title} className="mb-5" />
        {service.duration && (
          <p className="inline-flex gap-1 py-2 pl-3 pr-4 rounded-[20px] bg-inputBg ">
            <Image
              src="icons/alarm.svg"
              width={20}
              height={20}
              alt="alarm icon"
            />
            <span className="font-mulish text-sm text-accent">
              {service.duration}
            </span>
          </p>
        )}
        <div className="">
          <PortableText value={service.description} />
        </div>
      </div>
    </>
  );
};
