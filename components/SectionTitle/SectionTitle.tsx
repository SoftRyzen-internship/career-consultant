import classNames from 'classnames';
import { ISectionTitle } from './types';

export const SectionTitle = ({ text, className = '' }: ISectionTitle) => {
  return (
    <h2
      className={classNames(
        'sm:text-3xl font-fixel-semibold xl:text-5xl mr-auto',
        className,
      )}
    >
      {text}
    </h2>
  );
};
