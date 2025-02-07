import { Builder } from '@builder.io/react';
import { FeaturesGrid } from './FeaturesGrid';

Builder.registerComponent(FeaturesGrid, {
  name: 'Features Grid',
  inputs: [
    {
      name: 'features',
      type: 'list',
      subFields: [
        {
          name: 'icon',
          type: 'string',
          enum: ['rocket', 'brush', 'tools', 'device'],
          defaultValue: 'rocket',
          helperText: 'Choose an icon for this feature',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Feature Title',
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'Feature description goes here',
        },
        {
          name: 'color',
          type: 'color',
        },
        {
          name: 'link',
          type: 'string',
          defaultValue: '#',
          helperText: 'Link to feature details page or section',
        },
      ],
      defaultValue: [
        {
          icon: 'rocket',
          title: 'Lightning Fast',
          description: 'Optimized for speed and performance across all devices',
          link: '/performance',
        },
        {
          icon: 'brush',
          title: 'Beautiful Design',
          description: 'Stunning visuals that capture attention and engage users',
          link: '/design',
        },
        {
          icon: 'tools',
          title: 'Easy to Use',
          description: 'Intuitive interface that anyone can master quickly',
          link: '/usability',
        },
        {
          icon: 'device',
          title: 'Responsive',
          description: 'Perfect experience on any screen size or device',
          link: '/responsive',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff',
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#000000',
    },
    {
      name: 'accentColor',
      type: 'color',
      defaultValue: '#007AFF',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Why Choose Us',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Discover what makes us different',
    },
    {
      name: 'headingColor',
      type: 'color',
      defaultValue: 'var(--secondary)',
      helperText: 'Color of the main heading'
    },
    {
      name: 'subtitleColor',
      type: 'color',
      defaultValue: 'var(--primary)',
      helperText: 'Color of the subtitle text'
    },
  ],
});
