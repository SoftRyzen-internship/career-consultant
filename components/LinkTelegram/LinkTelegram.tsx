import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';

import TelegramIcon from '../../public/icons/telegram.svg';

import common from '../../data/common.json';

type ILinkTelegram = {
  className?: string;
};

export const LinkTelegram = ({ className = '' }: ILinkTelegram) => {
  const { telegram, writeToTelegram } = common;

  return (
    <Link
      className={classNames(
        'cursor-pointer flex gap-3 items-center justify-center w-full max-w-[456px] md:max-w-[292px] shadow-custom px-8 py-4 xl:py-5 bg-accent active:bg-accentPressed xl:hover:bg-accentHover xl:focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 ',
        className,
      )}
      href={`https://t.me/${telegram.substring(1)}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {writeToTelegram}
      <TelegramIcon className="w-6 h-6" aria-label="Паперовий літачок" />
    </Link>
  );
};
