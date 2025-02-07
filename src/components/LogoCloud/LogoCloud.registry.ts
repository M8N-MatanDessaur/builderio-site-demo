import { Builder } from '@builder.io/react';
import { LogoCloud } from './LogoCloud';

Builder.registerComponent(LogoCloud, {
  name: 'LogoCloud',
  inputs: [
    {
      name: 'logos',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string',
          required: true,
        },
        {
          name: 'image',
          type: 'object',
          subFields: [
            {
              name: 'image',
              type: 'file',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
              required: true,
            },
            {
              name: 'alt',
              type: 'string',
              required: true,
            },
            {
              name: 'width',
              type: 'number',
            },
            {
              name: 'height',
              type: 'number',
            }
          ],
          required: true,
        },
        {
          name: 'link',
          type: 'string',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'color',
    },
    {
      name: 'textColor',
      type: 'color',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'headingColor',
      type: 'color',
    },
    {
      name: 'subtitleColor',
      type: 'color',
    },
    {
      name: 'grayscale',
      type: 'boolean',
    },
  ],
});
