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
          name: 'backgroundColor',
          type: 'color',
          defaultValue: '#ffffff'
        },
        {
          name: 'titleColor',
          type: 'color',
          defaultValue: '#111827'
        },
        {
          name: 'textColor',
          type: 'color',
          defaultValue: '#4B5563'
        },
        {
          name: 'ctaText',
          type: 'string'
        },
        {
          name: 'ctaUrl',
          type: 'url'
        }
      ]
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff',
      helperText: 'Default background color for all cards'
    },
    {
      name: 'titleColor',
      type: 'color',
      defaultValue: '#111827',
      helperText: 'Default title color for all cards'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#4B5563',
      helperText: 'Default text color for all cards'
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
