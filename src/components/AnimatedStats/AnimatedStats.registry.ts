import { Builder } from '@builder.io/react';
import { AnimatedStats } from './AnimatedStats';

Builder.registerComponent(AnimatedStats, {
  name: 'AnimatedStats',
  inputs: [
    {
      name: 'stats',
      type: 'list',
      defaultValue: [
        {
          number: 500,
          label: 'Employees Worldwide',
          color: '#0070f3'
        },
        {
          number: 35,
          label: 'Active Projects',
          color: '#0070f3'
        },
        {
          number: 10,
          label: 'Global Locations',
          color: '#0070f3'
        },
        {
          number: 24,
          label: 'Hour Support',
          suffix: '/7',
          color: '#0070f3'
        }
      ],
      subFields: [
        {
          name: 'number',
          type: 'number',
          defaultValue: 0
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: 'Stat Label'
        },
        {
          name: 'prefix',
          type: 'string'
        },
        {
          name: 'suffix',
          type: 'string'
        },
        {
          name: 'color',
          type: 'color'
        }
      ]
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      name: 'numberColor',
      type: 'color',
      defaultValue: '#0070f3'
    },
    {
      name: 'labelColor',
      type: 'color',
      defaultValue: '#666666'
    }
  ]
});
