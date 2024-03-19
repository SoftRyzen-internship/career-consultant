import React from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

interface FormData {
  name: string;
  email: string;
  message?: string;
}

interface InputProps {
  name: keyof FormData;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  if (type === 'textarea') {
    return (
      <label className="flex flex-col gap-1">
        {label}
        <textarea
          id={name}
          {...register(name)}
          className={classNames(
            'w-full bg-inputDefaultBg rounded-lg py-6 px-5 text-sm text-text01 focus:caret-accent focus:bg-inputBg focus:border-inputBorder focus:outline-none focus:border-inputBorderW',
            className,
          )}
        />
        {errors[name] && <span>{errors[name]?.message}</span>}
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-1 ">
      <span className="">{label}</span>
      <input
        type={type}
        id={name}
        {...register(name)}
        className={classNames(
          'w-full bg-inputDefaultBg rounded-lg py-6 px-5 text-sm text-text01 focus:caret-accent focus:bg-inputBg focus:border-inputBorder focus:outline-none focus:border-inputBorderW',
          className,
        )}
      />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </label>
  );
};
