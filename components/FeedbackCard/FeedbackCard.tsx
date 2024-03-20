import { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/Button';
import jsonData from '@/data/common.json';
import feedbackData from '@/data/feedback.json';

// type ICard = {
//   data: {
//     name: string;
//     position: string;
//     text: string;
//   };
// };

export const FeedbackCard = () => {
  const readMoreText = jsonData.buttons[0].readMore;
  const feedbackItem = feedbackData.feedback[0];

  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const isTextTruncated =
        textElement.scrollHeight > textElement.clientHeight;
      setShowReadMoreButton(isTextTruncated);
    }
  }, []);

  return (
    <div
      className="py-[20px] px-[12px] flex flex-col justify-between w-full h-[226px] font-mulish bg-white rounded-[8px]
    md:py-[24px] md:px-[16px] md:h-[278px] xl:p-[32px] xl:h-[319px]"
    >
      <div>
        <p className="mb-[4px] text-sm text-text01 xl:text-base xl:font-normal">
          {feedbackItem.user3.name}
        </p>

        <p className="mb-[16px] text-xs text-text02 md:mb-[20px] xl:mb-[28px] xl:text-[16px] xl:leading-[1.4] xl:font-medium">
          {feedbackItem.user3.position}
        </p>

        <p
          ref={textRef}
          className="text-sm text-text02 truncate-text xl:text-[16px] xl:leading-[1.4] xl:font-medium"
        >
          {feedbackItem.user1.text}
        </p>
      </div>
      {showReadMoreButton && <Button type="button">{readMoreText}</Button>}
    </div>
  );
};
