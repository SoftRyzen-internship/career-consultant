import classNames from 'classnames';
import { ISection } from './types';

export const Section = ({ children, className = '' }: ISection) => {
  return (
    <section className={classNames('sm:py-15 md:py-20 xl:py-25', className)}>
      {children}
    </section>
  );
};
