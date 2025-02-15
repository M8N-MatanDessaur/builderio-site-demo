import { Builder } from '@builder.io/react';
import { AnimatedStats } from './AnimatedStats';
import { backgroundColorField, textColorField, animationDurationField } from '../../utils/common-fields';

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
          defaultValue: 0,
          helperText: 'The number to animate to'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: 'Stat Label',
          helperText: 'Label describing the statistic'
        },
        {
          name: 'prefix',
          type: 'string',
          helperText: 'Optional prefix before the number (e.g., $, €)'
        },
        {
          name: 'suffix',
          type: 'string',
          helperText: 'Optional suffix after the number (e.g., %, +)'
        },
        {
          name: 'color',
          type: 'color',
          defaultValue: '#0070f3',
          helperText: 'Color of the number'
        }
      ]
    },
    backgroundColorField,
    {
      ...textColorField,
      name: 'numberColor',
      friendlyName: 'Number Color',
      defaultValue: '#0070f3',
      helperText: 'Color of the animated numbers'
    },
    {
      ...textColorField,
      name: 'labelColor',
      friendlyName: 'Label Color',
      defaultValue: '#666666',
      helperText: 'Color of the stat labels'
    },
    animationDurationField
  ]
});
