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
              readOnly: true,
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.max(4),
    }),
  ],
});
