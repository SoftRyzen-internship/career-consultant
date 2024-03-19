import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'services',
  title: 'Послуги',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва послуги',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Тривалість',
      type: 'object',
      fields: [
        defineField({
          name: 'from',
          title: 'Від',
          type: 'number',
        }),
        defineField({
          name: 'to',
          title: 'До',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
