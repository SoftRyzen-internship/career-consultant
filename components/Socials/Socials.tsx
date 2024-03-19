import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';

import EmailIcon from '../../public/icons/email.svg';
import TelegramIcon from '../../public/icons/telegram.svg';

import common from '../../data/common.json';

type ISocials = {
  className?: string;
};

export const Socials = ({ className = '' }: ISocials) => {
  const { email, telegram } = common;
  return (
    <ul
      className={classNames('text-sm xl:text-base xl:font-normal', className)}
    >
      <li>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="py-2 xl:py-3 inline-flex gap-4 items-center text-accent active:text-text02 xl:hover:text-text02 xl:focus:text-text02 transition-all duration-300"
        >
          <EmailIcon className="w-6 h-6 stroke-accent" aria-label="Envelope" />
          <span className="md:w-[148px] break-all xl:w-full font-mulish text-text01 active:text-text02 xl:hover:text-text02 xl:focus:text-text02 transition-all duration-300">
            {email}
          </span>
        </Link>
      </li>
      <li>
        <Link
          href={`https://t.me/${telegram.substring(1)}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="py-2 xl:py-3 inline-flex gap-4 items-center text-accent active:text-text02 xl:hover:text-text02 xl:focus:text-text02 transition-all duration-300"
        >
          <TelegramIcon className="w-6 h-6" aria-label="Paper airplane" />
          <span className="font-mulish text-text01 active:text-text02 xl:hover:text-text02 xl:focus:text-text02 transition-all duration-300">
            {telegram}
          </span>
        </Link>
      </li>
    </ul>
  );
};
