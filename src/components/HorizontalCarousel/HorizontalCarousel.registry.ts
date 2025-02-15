import { Builder } from '@builder.io/sdk';
import { HorizontalCarousel } from './HorizontalCarousel';
import {
  titleField,
  preTitleField,
  textContentField,
  imageField,
  primaryButtonField,
  secondaryButtonField,
  backgroundColorField,
  textColorField,
  createItemsField,
  animationDurationField
} from '../../utils/common-fields';

Builder.registerComponent(HorizontalCarousel, {
  name: 'HorizontalCarousel',
  inputs: [
    {
      ...animationDurationField,
      name: 'autoplayInterval',
      friendlyName: 'Autoplay Interval',
      defaultValue: 5000,
      helperText: 'Time between slides in milliseconds. Set to 0 to disable autoplay',
      min: 0,
      step: 500,
    },
    createItemsField([
      {
        ...preTitleField,
        type: 'object',
        subFields: [
          {
            name: 'text',
            friendlyName: 'Text',
            type: 'text',
            helperText: 'Small text displayed above the title'
          },
          {
            ...textColorField,
            name: 'color',
            defaultValue: '#666666',
            helperText: 'Color of the pre-title text'
          }
        ]
      },
      {
        ...titleField,
        type: 'object',
        subFields: [
          {
            name: 'text',
            friendlyName: 'Text',
            type: 'text',
            helperText: 'Main heading text'
          },
          {
            ...textColorField,
            name: 'color',
            defaultValue: '#000000',
            helperText: 'Color of the title text'
          }
        ]
      },
      {
        ...textContentField,
        type: 'object',
        subFields: [
          {
            name: 'text',
            friendlyName: 'Text',
            type: 'richText',
            helperText: 'Main content text with formatting'
          },
          {
            ...textColorField,
            name: 'color',
            defaultValue: '#666666',
            helperText: 'Color of the main content'
          }
        ]
      },
      {
        ...imageField,
        name: 'image',
        friendlyName: 'Slide Image',
        helperText: 'Main image for this slide'
      },
      primaryButtonField,
      secondaryButtonField,
      {
        ...backgroundColorField,
        helperText: 'Background color for this slide'
      }
    ], 'Slides'),
    {
      name: 'showArrows',
      friendlyName: 'Show Navigation Arrows',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Display previous/next navigation arrows'
    },
    {
      name: 'showDots',
      friendlyName: 'Show Navigation Dots',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Display slide position indicators'
    },
    {
      name: 'arrowColor',
      friendlyName: 'Arrow Color',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Color of the navigation arrows'
    },
    {
      name: 'dotColor',
      friendlyName: 'Dot Color',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Color of the navigation dots'
    }
  ]
});