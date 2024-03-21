import { defineType, defineField } from 'sanity';

const achievementOptions = [
  {
    title: 'років на посаді HR менеджера, з них 3 в IT',
    value: '1',
  },
  { title: 'резюме складено', value: '2' },
  {
    title: 'консультацій проведено',
    value: '3',
  },
  {
    title: 'українців знайшли роботу',
    value: '4',
  },
];

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
              name: 'description',
              title: 'Опис',
              type: 'string',
              options: {
                list: achievementOptions,
                layout: 'dropdown',
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              title: 'Кількість',
              name: 'quantity',
              type: 'string',
              validation: (Rule: any) => Rule.required().max(10),
            },
          ],
          preview: {
            select: {
              quantity: 'quantity',
              description: 'description',
            },
            prepare(selection: any) {
              const descriptionTitle =
                selection.description &&
                achievementOptions.flatMap(option =>
                  option.value === selection.description ? [option.title] : [],
                );

              return {
                title: `${selection.quantity} ${
                  selection.description
                    ? `${descriptionTitle}`
                    : 'No title selected'
                }`,
              };
            },
          },
        },
      ],
      options: {
        sortable: true,
        modal: { type: 'popover', width: 'auto' },
      },
      validation: (Rule: any) =>
        Rule.min(4)
          .error('Кількість карток повинна бути рівна 4')
          .max(4)
          .error('Кількість карток повинна бути рівна 4'),
    }),
  ],
});
