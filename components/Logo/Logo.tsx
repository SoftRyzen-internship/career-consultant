import classNames from 'classnames';
import Link from 'next/link';
import LogoIcon from '../../public/icons/logo.svg';

type ILogo = {
  className?: string;
};

export const Logo = ({ className = '' }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames('cursor-pointer inline-block', className)}
      aria-label="Icon with name and surname for link to Homepage"
    >
      <LogoIcon className="w-[120px] h-[15px] md:w-[161px] md:h-[20px] fill-accent active:fill-accentPressed xl:hover:fill-accentHover" />
    </Link>
  );
};
