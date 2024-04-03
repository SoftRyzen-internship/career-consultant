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
                      }).error('Невірне посилання'),
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: [{ title: '_blank', value: '_blank' }],
                      layout: 'radio',
                    },
                    validation: Rule =>
                      Rule.custom(value => {
                        if (value !== '_blank') {
                          return 'Оберіть _blank';
                        }
                        return true;
                      }),
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
