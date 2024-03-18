import classNames from 'classnames';
import Link from 'next/link';

type ILogo = {
  className?: string;
};

export const Logo = ({ className = '' }: ILogo) => {
  return (
    <div className={classNames('container', className)}>
      <Link href="/"></Link>
    </div>
  );
};
