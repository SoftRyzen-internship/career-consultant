import { defineField } from 'sanity';

export const review = {
  name: 'reviews',
  title: 'Відгуки',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: "Ім'я",
      description: "Введіть ім'я",
      type: 'string',
      validation: rule =>
        rule
          .required()
          .error("Ім'я є обов'язковим полем")
          .max(30)
          .error('Введіть імя, яке містить не більше 30 символів'),
    }),
    defineField({
      name: 'position',
      title: 'Посада',
      type: 'string',
      description: 'Введіть посаду',

      validation: rule =>
        rule
          .required()
          .error("Посада є обов'язковим полем")
          .max(35)
          .error('Введіть посаду, яка містить не більше 35 символів'),
    }),

    defineField({
      name: 'text',
      title: 'Текст відгука',
      type: 'text',
      description: 'Напишіть повний текст для цього відгука',
      validation: rule => rule.required().error('Введіть текст відгука'),
    }),
  ],
};
