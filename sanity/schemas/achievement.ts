import { defineType, defineField } from 'sanity';

export const achievements = defineType({
  name: 'achievements',
  title: 'Досягнення',
  type: 'document',
  description: 'Список досягнень',

  fields: [
    defineField({
      name: 'item',
      title: 'Досягнення',
      description: 'Список досягнень',
      type: 'array',
      of: [
        {
          type: 'object',

          fields: [
            {
              title: 'Кількість',
              name: 'quantity',
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
          preview: {
            select: {
              quantity: 'quantity',
              description: 'description',
            },
            prepare(selection: any) {
              return {
                title: `${selection.quantity} ${selection.description} `,
              };
            },
          },
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
