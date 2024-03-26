import { ICardData } from '@/components/FeedbackCard';

export const ModalCard = ({ card }: ICardData) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto font-mulish">
      <p className="mb-[4px] text-start text-sm text-text01 md:text-lg xl:text-2xl">
        {card.name}
      </p>

      <p className="mb-[28px] text-start text-xs text-text02 md:text-sm xl:mb-[28px] xl:text-base xl:font-normal">
        {card.position}
      </p>

      <p className="text-start text-sm text-text02">{card.text}</p>
    </div>
  );
};
