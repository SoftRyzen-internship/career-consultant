import React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import Image from 'next/image';

import { IFormData } from './types';

type InputPropsType = {
  name: keyof IFormData;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  className?: string;
};

export const Input: React.FC<InputPropsType> = ({
  name,
  label,
  type,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormData>();

  let inputStyles: string;

  if (errors[name]) {
    inputStyles =
      'w-full bg-inputDefaultBg rounded-lg py-6 px-5 xl:p-6 text-sm xl:text-base text-text01 focus:caret-accent focus:bg-inputBg focus:border-errorCol border-errorCol focus:outline-none focus:border-inputBorderW border-inputBorderW';
  } else {
    inputStyles =
      'w-full bg-inputDefaultBg rounded-lg py-6 px-5 xl:p-6 text-sm xl:text-base text-text01 focus:caret-accent focus:bg-inputBg focus:border-inputBorder focus:outline-none focus:border-inputBorderW';
  }

  if (type === 'textarea') {
    return (
      <label className="flex flex-col gap-1 font-mulish">
        <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
        <textarea
          id={name}
          {...register(name)}
          className={classNames(
            'w-full bg-inputDefaultBg rounded-lg py-6 px-5 xl:p-6 text-sm xl:text-base text-text01 focus:caret-accent focus:bg-inputBg focus:border-inputBorder focus:outline-none focus:border-inputBorderW resize-none h-[151px]',
            className,
          )}
        />
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-1 font-mulish relative">
      <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
      <input
        type={type}
        id={name}
        {...register(name)}
        className={classNames(`${inputStyles}`, className)}
      />
      {errors[name] && (
        <>
          <span className="text-xs xl:text-sm text-errorCol text-right">
            {errors[name]?.message}
          </span>
          <Image
            src="icons/error.svg"
            alt="error icon"
            width={32}
            height={32}
            className="absolute right-[18px] top-10 xl:top-12"
          />
        </>
      )}
    </label>
  );
};
