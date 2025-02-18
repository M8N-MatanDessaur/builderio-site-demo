import { Builder } from '@builder.io/react'
import { CircularCarousel } from './CircularCarousel'
import { COMPONENT_NAME } from './CircularCarousel.setup'
import {
  titleField,
  textContentField,
  imageField,
  backgroundColorField,
  textColorField,
  buttonField,
  createItemsField,
} from '../../utils/common-fields'

Builder.registerComponent(CircularCarousel, {
  name: COMPONENT_NAME,
  inputs: [
    {
      name: 'cards',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          defaultValue: 'Card Title',
          helperText: 'Title of the card'
        },
        {
          ...textContentField,
          name: 'description',
          required: true,
          defaultValue: 'Card description goes here',
          helperText: 'Description text for the card'
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png'],
          required: true,
          helperText: 'Main image for the card'
        },
        {
          name: 'buttonText',
          type: 'string',
          helperText: 'Text for the button (optional)'
        },
        {
          name: 'buttonLink',
          type: 'url',
          helperText: 'URL for the button (optional)'
        },
        {
          name: 'backgroundColor',
          type: 'color',
          defaultValue: '#ffffff',
          helperText: 'Background color for this card'
        },
        {
          name: 'titleColor',
          type: 'color',
          defaultValue: '#111827',
          helperText: 'Color for the card title'
        },
        {
          name: 'textColor',
          type: 'color',
          defaultValue: '#4B5563',
          helperText: 'Color for the card description'
        },
        {
          name: 'buttonBackgroundColor',
          type: 'color',
          defaultValue: '#0070F3',
          helperText: 'Background color for the button'
        },
        {
          name: 'buttonTextColor',
          type: 'color',
          defaultValue: '#FFFFFF',
          helperText: 'Text color for the button'
        }
      ]
    },
    {
      name: 'autoRotate',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Enable automatic rotation of cards'
    },
    {
      name: 'rotationInterval',
      type: 'number',
      defaultValue: 3000,
      helperText: 'Rotation interval in milliseconds'
    }
  ]
})
