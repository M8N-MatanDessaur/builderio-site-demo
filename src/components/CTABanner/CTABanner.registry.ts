import { Builder } from '@builder.io/react';
import { CTABanner } from './CTABanner';

Builder.registerComponent(CTABanner, {
  name: 'CTABanner',
  inputs: [
    {
      name: 'preTitle',
      type: 'string',
      helperText: 'Optional small text displayed above the main title'
    },
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: 'Ready to Get Started?',
      helperText: 'Main heading text for the banner'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Join thousands of satisfied customers and transform your business today.',
      helperText: 'Supporting text below the title'
    },
    {
      name: 'primaryButton',
      type: 'object',
      required: true,
      defaultValue: {
        buttonText: 'Get Started',
        url: '#',
        backgroundColor: '#0070f3',
        textColor: '#ffffff',
        borderColor: '#0070f3'
      },
      subFields: [
        {
          name: 'buttonText',
          type: 'string',
          required: true,
          helperText: 'Text displayed on the button'
        },
        {
          name: 'url',
          type: 'string',
          required: true,
          helperText: 'URL the button links to'
        },
        {
          name: 'backgroundColor',
          type: 'color',
          defaultValue: '#0070f3',
          helperText: 'Button background color'
        },
        {
          name: 'textColor',
          type: 'color',
          defaultValue: '#ffffff',
          helperText: 'Button text color'
        },
        {
          name: 'borderColor',
          type: 'color',
          defaultValue: '#0070f3',
          helperText: 'Button border color'
        }
      ]
    },
    {
      name: 'secondaryButton',
      type: 'object',
      subFields: [
        {
          name: 'buttonText',
          type: 'string',
          required: true,
          helperText: 'Text displayed on the button'
        },
        {
          name: 'url',
          type: 'string',
          required: true,
          helperText: 'URL the button links to'
        },
        {
          name: 'backgroundColor',
          type: 'color',
          defaultValue: 'transparent',
          helperText: 'Button background color'
        },
        {
          name: 'textColor',
          type: 'color',
          defaultValue: '#ffffff',
          helperText: 'Button text color'
        },
        {
          name: 'borderColor',
          type: 'color',
          defaultValue: '#ffffff',
          helperText: 'Button border color'
        }
      ]
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Background color (used for solid background style)'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#ffffff',
      helperText: 'Text color for the banner content'
    },
    {
      name: 'backgroundStyle',
      type: 'enum',
      defaultValue: 'gradient',
      enum: ['gradient', 'solid'],
      helperText: 'Choose between gradient or solid background'
    },
    {
      name: 'gradientColors',
      type: 'object',
      defaultValue: {
        from: '#000000',
        to: '#0070f3'
      },
      subFields: [
        {
          name: 'from',
          type: 'color',
          defaultValue: '#000000',
          helperText: 'Starting color of the gradient'
        },
        {
          name: 'to',
          type: 'color',
          defaultValue: '#0070f3',
          helperText: 'Ending color of the gradient'
        }
      ],
      helperText: 'Colors for gradient background (if gradient style is selected)'
    },
    {
      name: 'animationStyle',
      type: 'enum',
      defaultValue: 'fade',
      enum: ['fade', 'slide', 'bounce'],
      helperText: 'Choose the animation style for the banner'
    },
    {
      name: 'layout',
      type: 'enum',
      defaultValue: 'centered',
      enum: ['centered', 'split', 'compact'],
      helperText: 'Choose between different layouts'
    },
    {
      name: 'showDecorativeElements',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show animated decorative elements in the background'
    }
  ],
  image: 'https://img.icons8.com/ios/50/000000/megaphone.png',
  description: 'A customizable call-to-action banner with animations and multiple layout options'
});
