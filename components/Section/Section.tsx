import { ReactNode } from 'react';

import classNames from 'classnames';

type ISection = {
  children: ReactNode;
  className?: string;
  isHerosection?: boolean;
  isTopPadding?: boolean;
  isBottomPadding?: boolean;
  isChooseOrFeedbackSection?: boolean;
};

export const Section = ({
  children,
  className,
  isHerosection,
  isTopPadding,
  isBottomPadding,
  isChooseOrFeedbackSection,
}: ISection) => {
  const classname = classNames(
    {
      'pt-3 md:pt-40px xl:pt-28 xl:pb-[47px]': isHerosection,
      'pt-[60px] md:pt-20 xl:pt-[100px]': isTopPadding,
      'pb-[60px]  md:pb-20 xl:pb-[100px]': isBottomPadding,
      'py-7 md:py-10 xl:py-20': isChooseOrFeedbackSection,
    },
    className,
  );

  return <section className={classname}>{children}</section>;
};
