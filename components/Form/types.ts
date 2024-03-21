import { IFormData } from '../Input/types';

export type FormInput = {
  name: keyof IFormData;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'checkbox';
};
