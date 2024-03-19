import { ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

type IButton = {
  children: ReactNode;
  type: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
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
    'read-more-btn': type === 'button',
    'submit-btn':
      type === 'submit' && isSubmitError === false && isSubmitted === false,
    'submit-err-btn': type === 'submit' && isSubmitError === true,
    'submitted-btn': type === 'submit' && isSubmitted === true,
    'submit-disable-btn': type === 'submit' && disabled === true,
  });

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
