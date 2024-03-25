'use client';

import React, { useEffect, useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import classNames from 'classnames';

import { type IFormData } from '@/components/Input/types';
import { type FormInput } from '@/components/Form/types';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import { formSchema } from '@/utils/formSchema';
import form from '@/data/form.json';

export const Form: React.FC = () => {
  const {
    personalDataConsent,
    sendText,
    sentBtnText,
    errorBtnText,
    successSubmitText,
  } = form;

  const [btnText, setBtnText] = useState(sendText);
  const [isBtnSubmitted, setIsBtnSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean | undefined>(true);

  const methods = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });

  const formData = form as {
    inputs: FormInput[];
  };

  const { inputs } = formData;
  const { errors } = methods.formState;

  const isEmpty = (errors: Record<string, any>): boolean => {
    return Object.keys(errors).length === 0;
  };

  let isError = false;
  const isEmptyCheck = isEmpty(errors);

  const className = classNames({
    'label-check-default': isEmptyCheck,
    'label-check-error': !isEmptyCheck,
  });

  const onSubmit = () => {
    setIsBtnSubmitted(true);
    toast.success(successSubmitText);

    methods.reset();
    localStorage.removeItem('formData');

    setIsDisabled(false);
  };

  methods.watch(data => {
    localStorage.setItem('formData', JSON.stringify(data));

    setIsDisabled(!data.checkbox);
  });

  if (!isEmpty(errors)) {
    isError = true;
  }

  useEffect(() => {
    if (!isEmptyCheck) {
      setBtnText(errorBtnText);
    }
    if (isEmptyCheck) {
      setBtnText(sendText);
    }
    if (isBtnSubmitted) {
      setBtnText(sentBtnText);
    }

    const savedFormData = localStorage.getItem('formData');
    if (savedFormData !== null) {
      const result = JSON.parse(savedFormData);
      methods.setValue('name', result.name);
      methods.setValue('email', result.email);
      methods.setValue('message', result.message);
      methods.setValue('checkbox', result.checkbox);
    }
  }, [
    errors,
    isEmptyCheck,
    isBtnSubmitted,
    errorBtnText,
    sendText,
    sentBtnText,
    methods,
  ]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="px-3 pt-[37px] pb-7 bg-white md:w-[336px] xl:w-[696px] flex flex-col gap-y-4 md:p-0"
      >
        <Toaster position="top-center" reverseOrder={false} />
        {inputs.map(input => {
          return (
            <Input
              key={input.name}
              name={input.name}
              label={input.label}
              type={input.type}
            />
          );
        })}
        <div className="relative">
          <input
            type="checkbox"
            {...methods.register('checkbox')}
            id="checkbox"
            className="input-check visually-hidden"
          />
          <label htmlFor="checkbox" className={className}>
            <span className="text-xs font-mulish xl:text-base text-text02">
              {personalDataConsent}
            </span>
          </label>
        </div>
        <Button
          type="submit"
          onClick={() => {}}
          isSubmitted={isBtnSubmitted}
          isSubmitError={isError}
          disabled={isDisabled}
        >
          {btnText}
        </Button>
      </form>
    </FormProvider>
  );
};
