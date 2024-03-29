import classNames from 'classnames';

type ICardTitle = {
  text: string;
  className?: string;
};

export const CardTitle = ({ text, className = '' }: ICardTitle) => {
  return (
    <h3
      className={classNames(
        'text-xl font-fixel mr-auto xl:text-3xl text-text01 xl:font-medium xl:leading-[1.15]',
        className,
      )}
    >
      {text}
    </h3>
  );
};
