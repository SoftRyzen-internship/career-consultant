import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-scroll';

import common from '@/data/common.json';

type ILinkToFeedback = {
  section: 'header' | 'hero' | 'services' | 'mobileMenu';
  className?: string;
};

export const LinkToFeedback = ({
  section,
  className = '',
}: ILinkToFeedback) => {
  const { order, leaveApplication, moveToFeedback } = common;

  const sectionStyles = {
    header: 'px-5 py-3 max-w-[199px] hidden xl:flex',
    hero: 'px-8 py-4 xl:py-5 md:max-w-[336px] xl:max-w-[280px]',
    services: 'px-5 py-3 max-w-[128px]',
    mobileMenu: 'px-8 py-4 sm:max-w-[456px] md:max-w-[250px]',
  };

  const sectionClass = sectionStyles[section] || '';

  return (
    <Link
      className={classNames(
        'cursor-pointer flex items-center justify-center w-full shadow-custom bg-accent active:bg-accentPressed xl:hover:bg-accentHover xl:focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 ',
        sectionClass,
        className,
      )}
      to={moveToFeedback}
      smooth={true}
      offset={-50}
      duration={500}
      delay={500}
    >
      {section === 'services' ? order : leaveApplication}
    </Link>
  );
};
