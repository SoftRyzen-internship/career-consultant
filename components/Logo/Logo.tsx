import Link from 'next/link';

import classNames from 'classnames';

import LogoIcon from '@/public/icons/logo.svg';

type ILogo = {
  className?: string;
};

export const Logo = ({ className = '' }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames('cursor-pointer inline-block', className)}
    >
      <LogoIcon
        className="w-[120px] h-[15px] md:w-[161px] md:h-[20px] fill-accent active:fill-accentPressed xl:hover:fill-accentHover xl:focus:fill-accentHover transition-all duration-300"
        aria-label="Логотип"
      />
    </Link>
  );
};
