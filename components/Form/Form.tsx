'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  name: string;
  email: string;
  message?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Ім'я* обов'язкове"),
  email: yup.string().required("E-mail* обов'язкове"),
  message: yup.string(),
});

export const MyForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="my-20">
        <Input name="name" label="First Name" type="text" />
        <Input name="email" label="E-mail*" type="email" />
        <Input name="message" label="Message" type="textarea" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
