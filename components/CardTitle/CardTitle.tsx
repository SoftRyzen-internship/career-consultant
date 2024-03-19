import classNames from 'classnames';

type ICardTitle = {
  text: string;
  className?: string;
};

export const CardTitle = ({ text, className = '' }: ICardTitle) => {
  return (
    <h3
      className={classNames(
        'sm:text-xl font-fixel-medium mr-auto xl:text-3xl',
        className,
      )}
    >
      {text}
    </h3>
  );
};
