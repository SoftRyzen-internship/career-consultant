import { defineType, defineField } from 'sanity';
export const achievements = defineType({
  name: 'achievements',
  title: 'Досягнення',
  type: 'document',
  fields: [
    defineField({
      name: 'definition',
      title: 'Значення',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'text',
      readOnly: true,
    }),
  ],
});
