import { Builder } from '@builder.io/sdk';
import { HorizontalCarousel } from './HorizontalCarousel';

const buttonField = (name: string, friendlyName: string) => ({
  name,
  type: 'object',
  friendlyName,
  subFields: [
    {
      name: 'buttonText',
      type: 'string',
      friendlyName: 'Button Label',
    },
    {
      name: 'url',
      type: 'url',
      friendlyName: 'Button Link',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      friendlyName: 'Background Color',
      defaultValue: name === 'primaryButton' ? '#0066ff' : 'transparent',
    },
    {
      name: 'textColor',
      type: 'color',
      friendlyName: 'Text Color',
      defaultValue: name === 'primaryButton' ? '#FFFFFF' : '#0066ff',
    },
    {
      name: 'borderColor',
      type: 'color',
      friendlyName: 'Border Color',
      defaultValue: '#0066ff',
    },
  ],
});

Builder.registerComponent(HorizontalCarousel, {
  name: 'HorizontalCarousel',
  inputs: [
    {
      name: 'autoplayInterval',
      type: 'number',
      friendlyName: 'Autoplay Interval (ms)',
      defaultValue: 5000,
      helperText: 'Set to 0 to disable autoplay',
      min: 0,
      step: 500,
    },
    {
      name: 'slides',
      type: 'list',
      subFields: [
        {
          name: 'preTitle',
          type: 'object',
          friendlyName: 'Pre-Title',
          subFields: [
            {
              name: 'text',
              type: 'string',
              friendlyName: 'Text',
            },
            {
              name: 'color',
              type: 'color',
              friendlyName: 'Color',
              defaultValue: '#666666',
            }
          ]
        },
        {
          name: 'title',
          type: 'object',
          friendlyName: 'Title',
          subFields: [
            {
              name: 'text',
              type: 'string',
              friendlyName: 'Text',
            },
            {
              name: 'color',
              type: 'color',
              friendlyName: 'Color',
              defaultValue: '#000000',
            }
          ]
        },
        {
          name: 'textContent',
          type: 'object',
          friendlyName: 'Text Content',
          subFields: [
            {
              name: 'text',
              type: 'richText',
              friendlyName: 'Text',
            },
            {
              name: 'color',
              type: 'color',
              friendlyName: 'Color',
              defaultValue: '#333333',
            }
          ]
        },
        buttonField('primaryButton', 'Primary Call-to-Action'),
        buttonField('secondaryButton', 'Secondary Call-to-Action'),
        {
          name: 'background',
          type: 'object',
          friendlyName: 'Background',
          subFields: [
            {
              name: 'image',
              type: 'file',
              friendlyName: 'Background Image',
              allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
              imageHeight: 1000,
              imageWidth: 2000,
              defaultValue: '',
            },
            {
              name: 'imagePosition',
              type: 'string',
              friendlyName: 'Image Position',
              enum: [
                'center center',
                'top center',
                'bottom center',
                'left center',
                'right center',
                'top left',
                'top right',
                'bottom left',
                'bottom right'
              ],
              defaultValue: 'center center',
            },
            {
              name: 'color',
              type: 'color',
              friendlyName: 'Background Color',
              defaultValue: '#FFFFFF',
            },
          ],
        },
      ],
      defaultValue: [],
    },
  ],
});