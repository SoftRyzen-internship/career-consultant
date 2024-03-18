import { defineType, defineField } from 'sanity';

export const review = defineType({
  name: 'reviews',
  title: 'Відгуки',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Ім'я",
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Посада',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(30),
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(35),
    }),
  ],
});
