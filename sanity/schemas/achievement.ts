import { defineType, defineField } from 'sanity';
export const achievements = defineType({
  name: 'achievements',
  title: 'Досягнення',
  type: 'document',

  fields: [
    defineField({
      name: 'item',
      title: 'Досягнення',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quantity',
              title: 'Кількість',
              type: 'number',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Опис',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.min(4)
          .error('Ви повинні додати мінімум 4 картки')
          .max(4)
          .error('Ви можете додати максимум 4 картки'),
    }),
  ],
});
