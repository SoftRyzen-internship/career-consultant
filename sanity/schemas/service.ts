import { defineField } from 'sanity';

export const service = {
  name: 'services',
  title: 'Послуги',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Назва послуги',
      description: 'Введіть назву послуги',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().error("Назва є обов'язковим полем"),
    }),
    defineField({
      name: 'duration',
      title: 'Тривалість',
      description: 'Введіть тривалість послуги',
      type: 'string',
    }),
    defineField({
      name: 'description',
      description: 'Введіть опис послуги',
      title: 'Опис',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) =>
        Rule.required().error("Опис є обов'язковим полем"),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().error("Ціна є обов'язковим полем"),
    }),
  ],
};
