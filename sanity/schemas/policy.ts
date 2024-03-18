import { defineType, defineField } from 'sanity';

export const policy = defineType({
  name: 'policy',
  title: 'Політика конфіденційності',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
