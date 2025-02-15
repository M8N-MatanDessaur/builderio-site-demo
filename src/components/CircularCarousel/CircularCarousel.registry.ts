import { Builder } from '@builder.io/react'
import { CircularCarousel } from './CircularCarousel'
import {
  titleField,
  descriptionField,
  imageField,
  backgroundColorField,
  textColorField,
  buttonField,
  createItemsField,
  animationDurationField
} from '../../utils/common-fields'

Builder.registerComponent(CircularCarousel, {
  name: 'Circular Carousel',
  inputs: [
    createItemsField([
      {
        ...titleField,
        defaultValue: 'Card Title'
      },
      {
        ...descriptionField,
        defaultValue: 'Card description goes here'
      },
      {
        ...imageField,
        name: 'icon',
        friendlyName: 'Icon',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        helperText: 'Icon or image for the card (JPEG, PNG, or SVG)'
      },
      {
        ...backgroundColorField,
        helperText: 'Background color for this card'
      },
      {
        ...textColorField,
        name: 'titleColor',
        friendlyName: 'Title Color',
        defaultValue: '#111827',
        helperText: 'Color for the card title'
      },
      {
        ...textColorField,
        defaultValue: '#4B5563',
        helperText: 'Color for the card description'
      },
      {
        ...buttonField,
        name: 'cta',
        friendlyName: 'Call to Action',
        subFields: [
          {
            name: 'buttonText',
            friendlyName: 'Button Text',
            type: 'text',
            helperText: 'Text for the call-to-action button'
          },
          {
            name: 'url',
            friendlyName: 'Button URL',
            type: 'url',
            helperText: 'Link for the call-to-action button'
          }
        ]
      }
    ], 'Cards'),
    {
      ...backgroundColorField,
      helperText: 'Default background color for all cards'
    },
    {
      ...textColorField,
      name: 'titleColor',
      friendlyName: 'Default Title Color',
      defaultValue: '#111827',
      helperText: 'Default title color for all cards'
    },
    {
      ...textColorField,
      defaultValue: '#4B5563',
      helperText: 'Default text color for all cards'
    },
    {
      name: 'autoRotate',
      friendlyName: 'Auto Rotate',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Enable automatic rotation of cards'
    },
    {
      ...animationDurationField,
      name: 'rotationInterval',
      friendlyName: 'Rotation Interval',
      defaultValue: 3000,
      helperText: 'Time between card rotations in milliseconds'
    }
  ]
})
