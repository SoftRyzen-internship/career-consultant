import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-scroll';

import common from '../../data/common.json';

type ILinkToFeedback = {
  className?: string;
  section: 'header' | 'hero' | 'services' | 'mobileMenu';
};

export const LinkToFeedback = ({
  section,
  className = '',
}: ILinkToFeedback) => {
  const { order, leaveApplication, moveToFeedback } = common;

  return (
    <Link
      className={classNames(
        `cursor-pointer flex items-center justify-center w-full shadow-custom bg-accent active:bg-accentPressed xl:hover:bg-accentHover xl:focus:bg-accentHover font-mulish text-white rounded-[20px] text-base leading-[1.3] transition-all duration-300 
        ${
          (section === 'header' && 'px-5 py-3 max-w-[199px]') ||
          (section === 'hero' &&
            'px-8 py-4 xl:py-5 md:max-w-[336px] xl:max-w-[280px]') ||
          (section === 'services' && 'px-5 py-3 max-w-[128px]') ||
          (section === 'mobileMenu' &&
            'px-8 py-4 sm:max-w-[456px] md:max-w-[250px]') ||
          ''
        }`,
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
