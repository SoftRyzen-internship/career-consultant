'use client';

import React, { useEffect, useState } from 'react';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { type IFormData } from '@/components/Input/types';
import { type FormInput } from '@/components/Form/types';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { FormPopUp } from '@/components/FormPopUp';

import { formSchema } from '@/utils/formSchema';
import form from '@/data/form.json';
import { sendToTelegramMessage } from '@/api/sendToTelegramMessage';

export const Form: React.FC = () => {
  const { personalDataConsent, sendText, sentBtnText, errorBtnText } = form;

  const [btnText, setBtnText] = useState(sendText);
  const [isBtnSubmitted, setIsBtnSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean | undefined>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const isEmptyCheck = isEmpty(errors);

  const className = classNames({
    'label-check-default': isEmptyCheck,
    'label-check-error': !isEmptyCheck,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<IFormData> = async data => {
    try {
      setIsLoading(true);
      const message = `Ім'я: ${data.name} %0AEmail: ${data.email} %0A${data.message ? `Повідомлення: ${data.message}` : ''}
      `;
      await sendToTelegramMessage(message);

      methods.reset({
        name: '',
        email: '',
        message: '',
        checkbox: false,
      });

      setIsBtnSubmitted(true);
      setIsApiError(false);
      localStorage.removeItem('formData');
      setIsDisabled(true);
      setIsLoading(false);
      openModal();
    } catch (error) {
      setIsBtnSubmitted(false);
      setIsApiError(true);
      setIsLoading(false);
      openModal();
    } finally {
      setIsLoading(false);
      setBtnText(sendText);
    }
  };

  methods.watch(data => {
    localStorage.setItem('formData', JSON.stringify(data));

    setIsDisabled(!data.checkbox);
  });

  useEffect(() => {
    if (isLoading) {
      setBtnText('Відправляємо...');
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
    isLoading,
  ]);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="pt-[37px] pb-7 bg-white md:w-[336px] xl:w-[696px] flex flex-col gap-y-4 md:p-0"
        >
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
            isSubmitted={false}
            isSubmitError={false}
            disabled={isDisabled}
          >
            {btnText}
          </Button>
        </form>
      </FormProvider>
      <FormPopUp
        isOpen={isOpen}
        closeModal={closeModal}
        isBtnSubmitted={isBtnSubmitted}
        isApiError={isApiError}
      />
    </>
  );
};
