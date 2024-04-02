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
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: ['_blank'],
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
});
