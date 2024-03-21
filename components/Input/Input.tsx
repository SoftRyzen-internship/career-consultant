import React from 'react';
import { useFormContext } from 'react-hook-form';

import Image from 'next/image';

import classNames from 'classnames';

import { IFormData } from './types';

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

  const classname = classNames({
    'error-input': errors[name],
    'default-input': !errors[name],
    'default-textarea': type === 'textarea',
    'label-ckeck-default': !errors[name],
    'label-ckeck-error': errors[name],
  });

  if (type === 'textarea') {
    return (
      <label className="flex flex-col gap-1 font-mulish mb-2 xl:mb-3">
        <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
        <textarea id={name} {...register(name)} className={classname} />
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-1 font-mulish relative mb-1.5 xl:mb-2.5">
      <span className="text-xs text-inactiveText xl:text-sm">{label}</span>
      <input type={type} id={name} {...register(name)} className={classname} />
      {errors[name] && (
        <>
          <span className="text-xs xl:text-sm text-errorCol absolute right-0 bottom-[-20px]">
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
