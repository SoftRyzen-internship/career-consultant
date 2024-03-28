'use client';

import { usePathname } from 'next/navigation';

import React from 'react';

import classNames from 'classnames';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

import common from '@/data/common.json';

type ILinkToFeedback = {
  section: 'header' | 'hero' | 'services' | 'mobileMenu';
  className?: string;
  onClick?: () => void;
};

export const LinkToFeedback = ({ section, onClick }: ILinkToFeedback) => {
  const { order, leaveApplication, moveToFeedback } = common;
  const pathname = usePathname();

  const className = classNames({
    'px-5 py-3 max-w-[199px] hidden xl:flex': section === 'header',
    'px-8 py-4 xl:py-5 md:max-w-[336px] xl:max-w-[280px]': section === 'hero',
    'px-5 py-3 max-w-[128px]': section === 'services',
    'px-8 py-4 sm:max-w-[456px] md:max-w-[250px]': section === 'mobileMenu',
    'cursor-pointer flex items-center justify-center w-full shadow-custom bg-accent active:bg-accentPressed xl:hover:bg-accentHover focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 ':
      true,
  });

  return (
    <>
      {pathname === '/policy' ? (
        <Link className={className} href="/#feedback" onClick={onClick}>
          {section === 'services' ? order : leaveApplication}
        </Link>
      ) : (
        <ScrollLink
          className={className}
          to={moveToFeedback}
          href="/"
          smooth={true}
          offset={-50}
          duration={500}
          delay={500}
          onClick={onClick}
        >
          {section === 'services' ? order : leaveApplication}
        </ScrollLink>
      )}
    </>
  );
};
