import { ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

type IButton = {
  children: ReactNode;
  type: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isSubmitted?: boolean;
  isSubmitError?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  type,
  onClick,
  isSubmitted = false,
  isSubmitError = false,
  disabled = false,
}: IButton) => {
  const className = classNames({
    'ml-auto w-[112px] text-sm text-accent hover:text-accentPressed focus:text-accentPressed transition-[color] ease-in-out xl:text-[18px] xl:leading-[1.5] xl:w-[126px]':
      type === 'button',
    'submit-btn-base bg-accent hover:bg-accentHover focus:bg-accentHover active:bg-accentPressed transition-[background] ease-in-out':
      type === 'submit' && isSubmitError === false && isSubmitted === false,
    'submit-btn-base text-errorCol bg-inactive':
      type === 'submit' && isSubmitError === true,
    'submitted-btn submit-btn-base flex justify-center gap-[16px] bg-accentPressed':
      type === 'submit' && isSubmitted === true,
    'submit-btn-base text-inactiveText bg-inactive pointer-events-none':
      type === 'submit' && disabled === true,
  });

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
