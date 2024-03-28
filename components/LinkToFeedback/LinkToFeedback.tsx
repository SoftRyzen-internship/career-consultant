import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import common from '@/data/common.json';

type ILinkToFeedback = {
  section: 'header' | 'hero' | 'services' | 'mobileMenu';
  className?: string;
  onClick?: () => void;
};

export const LinkToFeedback = ({ section, onClick }: ILinkToFeedback) => {
  const { order, leaveApplication, moveToFeedback } = common;
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  let offset = -12;

  if (isTablet) {
    offset = -28;
  } else if (isDesktop) {
    offset = 0;
  }

  const className = classNames({
    'px-5 py-3 max-w-[199px] hidden xl:flex': section === 'header',
    'px-8 py-4 xl:py-5 md:max-w-[336px] xl:max-w-[280px]': section === 'hero',
    'px-5 py-3 max-w-[128px]': section === 'services',
    'px-8 py-4 sm:max-w-[456px] md:max-w-[250px]': section === 'mobileMenu',
    'cursor-pointer flex items-center justify-center w-full shadow-custom bg-accent active:bg-accentPressed xl:hover:bg-accentHover focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 ':
      true,
  });

  return (
    <Link
      className={className}
      to={moveToFeedback}
      href="/"
      smooth={true}
      offset={offset}
      duration={500}
      delay={500}
      onClick={onClick}
    >
      {section === 'services' ? order : leaveApplication}
    </Link>
  );
};
