import Image from 'next/image';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import classNames from 'classnames';

import { type IFormData } from '@/components/Input/types';

type InputPropsType = {
  name: keyof IFormData;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'checkbox';
  className?: string;
};

export const Input: React.FC<InputPropsType> = ({ name, label, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormData>();

  const className = classNames({
    'error-input': errors[name],
    'default-input': !errors[name],
    'default-textarea': type === 'textarea',
    'label-check-default': !errors[name],
    'label-check-error': errors[name],
  });

  if (type === 'textarea') {
    return (
      <label className="flex flex-col gap-1 font-mulish mb-2 xl:mb-3">
        <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
        <textarea id={name} {...register(name)} className={className} />
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-1 font-mulish relative mb-1.5 xl:mb-2.5">
      <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
      <input type={type} id={name} {...register(name)} className={className} />
      {errors[name] && (
        <>
          <span className="text-xs xl:text-sm text-errorCol absolute right-0 bottom-[-20px] xl:bottom-[-24px]">
            {errors[name]?.message}
          </span>
          <Image
            src="icons/error.svg"
            alt="error icon"
            width={32}
            height={32}
            className="absolute right-[18px] top-[44px] md:top-[43px] xl:top-[48px]"
          />
        </>
      )}
    </label>
  );
};
