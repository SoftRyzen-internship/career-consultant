import { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import jsonData from '@/data/common.json';

export type ICardData = {
  data: {
    name: string;
    position: string;
    text: string;
  };
};

export const FeedbackCard = ({ data }: ICardData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const readMoreText = jsonData.buttons[0].readMore;

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const textElement = textRef.current;

    const calculateAndSetTruncation = () => {
      if (textElement) {
        const isTextTruncated =
          textElement.scrollHeight > textElement.clientHeight;
        setShowReadMoreButton(isTextTruncated);
      }
    };

    calculateAndSetTruncation();

    window.addEventListener('resize', calculateAndSetTruncation);

    return () => {
      window.removeEventListener('resize', calculateAndSetTruncation);
    };
  }, []);

  return (
    <>
      <div className="py-[20px] px-[12px] flex flex-col justify-between w-full h-[226px] font-mulish bg-white rounded-[8px] md:py-[24px] md:px-[16px] md:w-[336px] md:h-[278px] xl:p-[32px] xl:w-[384px] xl:h-[319px]">
        <div>
          <p className="mb-[4px] text-start text-sm text-text01 xl:text-base xl:font-normal">
            {data.name}
          </p>

          <p className="mb-[16px] text-start text-xs text-text02 md:mb-[20px] xl:mb-[28px] xl:text-[16px] xl:leading-[1.4] xl:font-medium">
            {data.position}
          </p>

          <p
            ref={textRef}
            className="text-start text-sm text-text02 truncate-text xl:text-[16px] xl:leading-[1.4] xl:font-medium"
          >
            {data.text}
          </p>
        </div>
        {showReadMoreButton && (
          <Button type="button" onClick={() => handleToggleModal()}>
            {readMoreText}
          </Button>
        )}
      </div>
      <Modal data={data} open={isModalOpen} onClose={handleToggleModal} />
    </>
  );
};
