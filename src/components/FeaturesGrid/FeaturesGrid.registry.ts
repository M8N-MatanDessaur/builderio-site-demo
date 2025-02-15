import { Builder } from '@builder.io/react';
import { FeaturesGrid } from './FeaturesGrid';
import {
  titleField,
  descriptionField,
  backgroundColorField,
  textColorField,
  urlField,
  createItemsField,
  gapField,
  paddingField
} from '../../utils/common-fields';

Builder.registerComponent(FeaturesGrid, {
  name: 'Features Grid',
  inputs: [
    createItemsField([
      {
        name: 'icon',
        type: 'string',
        enum: ['rocket', 'brush', 'tools', 'device'],
        defaultValue: 'rocket',
        helperText: 'Choose an icon for this feature',
      },
      {
        ...titleField,
        defaultValue: 'Feature Title',
        helperText: 'Title of this feature'
      },
      {
        ...descriptionField,
        defaultValue: 'Feature description goes here',
        helperText: 'Description of this feature'
      },
      {
        name: 'color',
        type: 'color',
        defaultValue: '#0070f3',
        helperText: 'Accent color for this feature'
      },
      {
        ...urlField,
        defaultValue: '#',
        helperText: 'Link to feature details page or section'
      }
    ], 'Features'),
    {
      ...titleField,
      defaultValue: 'Why Choose Us',
      helperText: 'Main heading for the features section'
    },
    {
      name: 'subtitle',
      friendlyName: 'Subtitle',
      type: 'text',
      defaultValue: 'Discover what makes us different',
      helperText: 'Supporting text below the main heading'
    },
    backgroundColorField,
    textColorField,
    {
      name: 'accentColor',
      friendlyName: 'Accent Color',
      type: 'color',
      defaultValue: '#0070f3',
      helperText: 'Primary accent color for icons and highlights'
    },
    {
      name: 'headingColor',
      friendlyName: 'Heading Color',
      type: 'color',
      defaultValue: 'var(--secondary)',
      helperText: 'Color of the main heading'
    },
    {
      name: 'subtitleColor',
      friendlyName: 'Subtitle Color',
      type: 'color',
      defaultValue: 'var(--text)',
      helperText: 'Color of the subtitle text'
    },
    gapField,
    paddingField
  ]
});
