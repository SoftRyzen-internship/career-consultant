import Image from 'next/image';
import React from 'react';

import { CardTitle } from '@/components/CardTitle';

import classNames from 'classnames';

type Description = {
  id: number;
  text: string;
};

type Request = {
  id: number;
  alt: string;
  icon: string;
  title: string;
  list: Description[];
};

type IRequestCard = {
  card: Request;
  className?: string;
};

export const RequestCard = ({ card, className = '' }: IRequestCard) => {
  const { id, icon, alt, title, list } = card;

  return (
    <li
      key={id}
      className={classNames(
        'px-3 pb-5 pt-4 md:px-4 md:pb-8 md:pt-6 xl:px-8 xl:pt-8 xl:pb-10 w-full sm:w-[456px] md:w-[336px] xl:w-[384px] h-auto border-solid border-[0.50px] border-strokeCol rounded-lg bg-white',
        className,
      )}
    >
      <Image
        src={icon}
        width={52}
        height={52}
        alt={alt}
        className="mb-3 xl:mb-5 xl:w-[100px] xl:h-[100px]"
      />
      <CardTitle text={title} className="mb-7 xl:mb-10" />
      <ol className="list-disc flex gap-4 xl:gap-5 flex-col">
        {list.map(item => {
          return (
            <li
              key={item.id}
              className="ml-6 xl:ml-[27px] text-sm xl:text-base xl:font-normal text-text02 font-mulish"
            >
              {item.text}
            </li>
          );
        })}
      </ol>
    </li>
  );
};
