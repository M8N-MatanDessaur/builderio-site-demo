import { Builder } from '@builder.io/react';
import DynamicTimeline from './DynamicTimeline';
import { defaultTimelineItems } from './DynamicTimeline.setup';
import {
  titleField,
  textContentField,
  imageField,
  buttonField,
  backgroundColorField,
  textColorField,
  createItemsField,
  paddingField,
  gapField
} from '../../utils/common-fields';

Builder.registerComponent(DynamicTimeline, {
  name: 'Dynamic Timeline',
  inputs: [
    {
      ...titleField,
      defaultValue: 'Our Journey',
      helperText: 'Main heading for the timeline'
    },
    {
      ...textContentField,
      name: 'description',
      defaultValue: '<p>Discover the key milestones that shaped our success</p>',
      helperText: 'Subtitle or description below the heading'
    },
    {
      ...createItemsField([
        {
          ...titleField,
          defaultValue: 'Timeline Event',
          helperText: 'Title of the timeline event'
        },
        {
          ...textContentField,
          name: 'description',
          defaultValue: '<p>Description of the timeline event. You can use <strong>rich text</strong> formatting.</p>',
          helperText: 'Description with rich text support'
        },
        {
          name: 'date',
          friendlyName: 'Date',
          type: 'text',
          defaultValue: '2024',
          helperText: 'Date or time period of the event'
        },
        {
          ...imageField,
          helperText: 'Optional image for the timeline event'
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
              helperText: 'URL for the call-to-action button'
            }
          ]
        }
      ], 'Timeline Events'),
      defaultValue: defaultTimelineItems
    },
    backgroundColorField,
    textColorField,
    {
      ...textColorField,
      name: 'headingColor',
      friendlyName: 'Heading Color',
      defaultValue: 'var(--secondary)',
      helperText: 'Color of the main heading'
    },
    {
      ...textColorField,
      name: 'subtitleColor',
      friendlyName: 'Subtitle Color',
      defaultValue: 'var(--primary)',
      helperText: 'Color of the subtitle/description'
    },
    paddingField,
    gapField
  ]
});
