'use client';

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input/Input';
import { Button } from '@/components/Button';
import { formSchema } from '@/utils/formSchema';

import { IFormData } from '@/components/Input/types';

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .required("Ім'я обов'язкове")
//     .max(30, 'Максимальна кількість символів - 30')
//     .matches(/^[\sA-Za-zА-Яа-яҐґЄєІіЇїʼ`-]+$/, "Невірне ім'я"),
//   email: yup
//     .string()
//     .required("E-mail обов'язкове")
//     .max(63, 'Максимальна кількість символів - 63')
//     .matches(
//       /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
//       'Невірний e-mail',
//     ),
//   message: yup.string(),
// });

export const Form: React.FC = () => {
  const methods = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });

  const { errors } = methods.formState;

  const isEmpty = (errors: Record<string, any>): boolean => {
    return Object.keys(errors).length === 0;
  };

  let isError = false;
  const isEmptyCheck = isEmpty(errors);

  const [btnText, setBtnText] = useState('Відправити');

  const onSubmit = async (data: IFormData) => {
    console.log(data);
    setBtnText('Bідправлено');

    console.log(btnText);
  };

  if (!isEmpty(errors)) {
    isError = true;
  }

  useEffect(() => {
    if (!isEmptyCheck) {
      setBtnText('Помилка');
    }
    if (isEmptyCheck) {
      setBtnText('Відправити');
    }
  }, [errors, isEmptyCheck]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-3 bg-white md:w-1/2 flex flex-col gap-y-6"
      >
        <Input name="name" label="Ім'я*" type="text" />
        <Input name="email" label="E-mail*" type="email" />
        <Input name="message" label="Повідомлення" type="textarea" />
        <Button
          type="submit"
          onClick={() => {}}
          isSubmitted={false}
          isSubmitError={isError}
          disabled={false}
        >
          {btnText}
        </Button>
      </form>
    </FormProvider>
  );
};
