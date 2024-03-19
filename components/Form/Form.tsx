'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IFormData } from '@/components/Input/types';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове"),
  email: yup.string().required("E-mail обов'язкове"),
  message: yup.string(),
});

export const Form: React.FC = () => {
  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-3 bg-white md:w-1/2"
      >
        <Input name="name" label="Ім'я*" type="text" />
        <Input name="email" label="E-mail*" type="email" />
        <Input name="message" label="Повідомлення" type="textarea" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
