import { ReactNode } from 'react';

import classNames from 'classnames';

type ISection = {
  children: ReactNode;
  className?: string;
  isHerosection?: boolean;
  isChooseOrFeedbackSection?: boolean;
  isGeneralSection: boolean;
  isReviewsSection?: boolean;
  isServiseSection?: boolean;
};

export const Section = ({
  children,
  isGeneralSection,
  isHerosection,
  isChooseOrFeedbackSection,
  isReviewsSection,
  isServiseSection,
}: ISection) => {
  const classname = classNames({
    'py-[30px] md:py-10 xl:py-[50px]': isGeneralSection,
    'pt-3 pb-[30px] md:pt-[60px] md:pb-10 xl:pt-[100px] xl:pb-[50px]':
      isHerosection,
    'pt-[30px] pb-[60px] md:pt-10 md:pb-20 xl:pt-[50px] xl:pb-[100px]':
      isServiseSection,
    'py-[28px] md:py-10 xl:py-80': isChooseOrFeedbackSection,
    'py-[60px] md:py-20 xl:py-[100px]': isReviewsSection,
  });

  return <section className={classname}>{children}</section>;
};
