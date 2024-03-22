import { ICardData } from '@/components/FeedbackCard';

export const ModalCard = ({ data }: ICardData) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto font-mulish">
      <p className="mb-[4px] text-start text-sm text-text01 md:text-lg xl:text-2xl">
        {data.name}
      </p>

      <p className="mb-[28px] text-start text-xs text-text02 md:text-sm xl:mb-[28px] xl:text-base xl:font-normal">
        {data.position}
      </p>

      <p className="text-start text-sm text-text02">{data.text}</p>
    </div>
  );
};
