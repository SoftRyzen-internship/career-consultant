import classNames from 'classnames';

type ICardTitle = {
  text: string;
  className?: string;
};

export const CardTitle = ({ text, className = '' }: ICardTitle) => {
  return (
    <h3
      className={classNames(
        'text-xl font-fixel mr-auto xl:text-3xl',
        className,
      )}
    >
      {text}
    </h3>
  );
};
