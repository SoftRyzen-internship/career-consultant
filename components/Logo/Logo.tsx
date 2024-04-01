import Link from 'next/link';

import classNames from 'classnames';

import LogoIcon from '@/public/icons/logo.svg';

import ariaLabelLogo from '@/data/common.json';

type ILogo = {
  className?: string;
  onClick?: () => void;
};

export const Logo = ({ className = '', onClick }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames('cursor-pointer inline-block', className)}
      onClick={onClick}
    >
      <LogoIcon
        className="w-[120px] h-[15px] md:w-[161px] md:h-[20px] fill-accent active:fill-accentPressed xl:hover:fill-accentHover xl:focus:fill-accentHover transition-all duration-300"
        aria-label={ariaLabelLogo}
      />
    </Link>
  );
};
