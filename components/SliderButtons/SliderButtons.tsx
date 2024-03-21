import Arrow from '@/public/icons/left-arrow.svg';

export const SliderButtons = () => {
  return (
    <div className="   flex gap-[12px] md:gap-[16px] xl:gap-[20px] xl:self-end">
      <button
        aria-label="Попередня картка"
        type="button"
        className="button-prev inline-flex justify-center items-center rounded-full border-0 cursor-pointer w-[60px] h-[60px] bg-swiperBtn text-accent  transition-colors duration-300 hover:bg-swiperBtnHover focus:bg-swiperBtnHover"
      >
        <Arrow width={32} height={32} />
      </button>
      <button
        aria-label="Наступна картка"
        type="button"
        className="button-next inline-flex justify-center items-center rounded-full border-0 cursor-pointer w-[60px] h-[60px] bg-swiperBtn text-accent  transition-colors duration-300 hover:bg-swiperBtnHover focus:bg-swiperBtnHover"
      >
        <Arrow className="rotate-180" width={32} height={32} />
      </button>
    </div>
  );
};
