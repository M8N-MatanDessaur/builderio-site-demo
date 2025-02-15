import { Builder } from '@builder.io/react';
import DynamicTimeline from './DynamicTimeline';
import { defaultTimelineItems } from './DynamicTimeline.setup';

Builder.registerComponent(DynamicTimeline, {
  name: 'Dynamic Timeline',
  inputs: [
    {
      name: 'items',
      type: 'list',
      defaultValue: defaultTimelineItems,
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Timeline Event',
          helperText: 'Title of the timeline event'
        },
        {
          name: 'description',
          type: 'richText',
          defaultValue: '<p>Description of the timeline event. You can use <strong>rich text</strong> formatting.</p>',
          helperText: 'Description with rich text support'
        },
        {
          name: 'date',
          type: 'string',
          defaultValue: '2024',
          helperText: 'Date or time period of the event'
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
          helperText: 'Optional image for the timeline event'
        }
      ]
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Our Journey',
      helperText: 'Main heading for the timeline'
    },
    {
      name: 'description',
      type: 'richText',
      defaultValue: '<p>Discover the key milestones that shaped our success</p>',
      helperText: 'Subtitle or description below the heading'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff',
      helperText: 'Background color of the timeline section'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Main text color for content'
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
      helperText: 'Color of the subtitle/description'
    }
  ]
});
