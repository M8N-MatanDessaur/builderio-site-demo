import { Builder } from '@builder.io/react';
import { LogoCloud } from './LogoCloud';
import {
  titleField,
  imageField,
  urlField,
  backgroundColorField,
  textColorField,
  createItemsField,
  paddingField,
  gapField
} from '../../utils/common-fields';

Builder.registerComponent(LogoCloud, {
  name: 'LogoCloud',
  inputs: [
    {
      ...titleField,
      helperText: 'Main heading for the logo cloud section'
    },
    {
      name: 'subtitle',
      friendlyName: 'Subtitle',
      type: 'text',
      helperText: 'Supporting text below the main heading'
    },
    createItemsField([
      {
        name: 'name',
        friendlyName: 'Company Name',
        type: 'text',
        required: true,
        helperText: 'Name of the company or brand'
      },
      {
        name: 'image',
        friendlyName: 'Logo',
        type: 'object',
        required: true,
        subFields: [
          {
            ...imageField,
            required: true,
            helperText: 'Company or brand logo'
          },
          {
            name: 'alt',
            friendlyName: 'Alt Text',
            type: 'text',
            required: true,
            helperText: 'Alternative text for accessibility'
          },
          {
            name: 'width',
            friendlyName: 'Width',
            type: 'number',
            min: 1,
            max: 1000,
            helperText: 'Logo width in pixels'
          },
          {
            name: 'height',
            friendlyName: 'Height',
            type: 'number',
            min: 1,
            max: 1000,
            helperText: 'Logo height in pixels'
          }
        ]
      },
      {
        ...urlField,
        name: 'link',
        helperText: 'Optional link to company website'
      }
    ], 'Logos'),
    backgroundColorField,
    textColorField,
    {
      ...textColorField,
      name: 'headingColor',
      friendlyName: 'Heading Color',
      helperText: 'Color for the main heading'
    },
    {
      ...textColorField,
      name: 'subtitleColor',
      friendlyName: 'Subtitle Color',
      helperText: 'Color for the subtitle text'
    },
    {
      name: 'grayscale',
      friendlyName: 'Grayscale Logos',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Convert logos to grayscale'
    },
    paddingField,
    gapField
  ]
});
