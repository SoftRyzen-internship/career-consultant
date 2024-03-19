import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';
// import { Link } from 'react-scroll';

import common from '../../data/common.json';

type ILinkOrder = {
  className?: string;
};

export const LinkOrder = ({ className = '' }: ILinkOrder) => {
  const { telegram, order } = common;

  return (
    <Link
      className={classNames(
        'cursor-pointer inline-block shadow-custom px-5 py-3 bg-accent active:bg-accentPressed xl:hover:bg-accentHover xl:focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 ',
        className,
      )}
      href={`https://t.me/${telegram.substring(1)}`}
      // smooth={true}
      // offset={50}
      // duration={500}
      // delay={500}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {order}
    </Link>
  );
};
