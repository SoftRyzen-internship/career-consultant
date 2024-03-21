import classNames from 'classnames';
import { ISection } from './types';
// import { Container } from '@/components/Container';

export const Section = ({ className = '' }: ISection) => {
  return (
    <section
      className={classNames('sm:py-15 md:py-20 xl:py-25', className)}
    ></section>
  );
};
