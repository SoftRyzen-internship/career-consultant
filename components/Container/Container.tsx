import { ReactNode } from 'react';
import classNames from 'classnames';

type IContainer = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: IContainer) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
