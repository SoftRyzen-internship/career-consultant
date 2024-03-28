'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import { useReadMoreButton } from '@/hooks/useReadMoreButton';

import jsonData from '@/data/common.json';

export type ICardData = {
  card: {
    name: string;
    position: string;
    text: string;
  };
};

export const FeedbackCard = ({ card }: ICardData) => {
  const readMoreText = jsonData.buttons[0].readMore;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isShownReadMoreBtn, textRef } = useReadMoreButton(card.text);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="py-[20px] px-[12px] flex flex-col justify-between w-full h-[226px] font-mulish bg-white rounded-[8px] border-[0.5px] border-solid border-[#AAB8DD] md:py-[24px] md:px-[16px] md:w-[336px] md:h-[278px] xl:p-[32px] xl:w-[384px] xl:h-[319px]">
        <div>
          <p className="mb-[4px] text-start text-sm text-text01 xl:text-base xl:font-normal">
            {card.name}
          </p>

          <p className="mb-[16px] text-start text-xs text-text02 md:mb-[20px] xl:mb-[28px] xl:text-[16px] xl:leading-[1.4] xl:font-medium">
            {card.position}
          </p>

          <p
            ref={textRef}
            className="text-start text-sm text-text02 truncate-text xl:text-[16px] xl:leading-[1.4] xl:font-medium"
          >
            {card.text}
          </p>
        </div>

        {isShownReadMoreBtn && (
          <Button type="button" onClick={() => handleToggleModal()}>
            {readMoreText}
          </Button>
        )}
      </div>
      <Modal data={card} open={isModalOpen} onClose={handleToggleModal} />
    </>
  );
};
