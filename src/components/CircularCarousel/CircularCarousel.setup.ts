import { Builder } from '@builder.io/react'
import { CircularCarousel } from './CircularCarousel'

Builder.registerComponent(CircularCarousel, {
  name: 'Circular Carousel',
  inputs: [
    {
      name: 'cards',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Card Title'
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'Card description goes here'
        },
        {
          name: 'icon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          defaultValue: ''
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png'],
          defaultValue: ''
        }
      ]
    },
    {
      name: 'autoRotate',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'rotationInterval',
      type: 'number',
      defaultValue: 3000,
      helperText: 'Rotation interval in milliseconds'
    }
  ]
})
