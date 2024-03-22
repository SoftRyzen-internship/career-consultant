import classNames from 'classnames';

type ISectionTitle = {
  text: string;
  className?: string;
  center?: boolean;
};

export const SectionTitle = ({
  text,
  className = '',
  center,
}: ISectionTitle) => {
  const classname = classNames(
    className,
    'sm:text-3xl font-fixel xl:text-5xl',
    {
      'text-left': !center,
      'text-center': center,
    },
  );

  return <h2 className={classname}>{text}</h2>;
};
