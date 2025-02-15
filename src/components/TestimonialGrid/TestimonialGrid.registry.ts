import { Builder } from '@builder.io/react';
import { TestimonialGrid } from './TestimonialGrid';
import {
  titleField,
  textContentField,
  backgroundColorField,
  textColorField,
  imageField,
  createItemsField,
  gapField,
  paddingField
} from '../../utils/common-fields';

Builder.registerComponent(TestimonialGrid, {
  name: 'Testimonial Grid',
  inputs: [
    createItemsField([
      {
        ...titleField,
        name: 'title',
        defaultValue: 'Amazing Experience',
        helperText: 'Title of the testimonial'
      },
      {
        ...textContentField,
        name: 'text',
        defaultValue: 'Share your customer testimonial here. Add their experience and feedback about your product or service.',
        helperText: 'The testimonial content'
      },
      {
        name: 'author',
        friendlyName: 'Author Name',
        type: 'text',
        defaultValue: 'John Doe',
        helperText: 'Name of the person giving the testimonial'
      },
      {
        name: 'rating',
        friendlyName: 'Rating',
        type: 'number',
        defaultValue: 5,
        min: 1,
        max: 5,
        helperText: 'Rating from 1 to 5 stars'
      },
      {
        ...imageField,
        name: 'imageUrl',
        friendlyName: 'Author Image',
        helperText: 'Profile picture of the person giving the testimonial'
      }
    ], 'Testimonials'),
    {
      ...titleField,
      defaultValue: 'What Our Clients Say',
      helperText: 'Main heading for the testimonials section'
    },
    {
      name: 'subtitle',
      friendlyName: 'Subtitle',
      type: 'text',
      defaultValue: 'Trusted by thousands of satisfied customers worldwide',
      helperText: 'Supporting text below the main heading'
    },
    backgroundColorField,
    textColorField,
    {
      name: 'accentColor',
      friendlyName: 'Accent Color',
      type: 'color',
      defaultValue: '#0070f3',
      helperText: 'Primary accent color for ratings and highlights'
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
      defaultValue: 'var(--primary)',
      helperText: 'Color of the subtitle text'
    },
    {
      name: 'itemsPerPage',
      friendlyName: 'Items Per Page',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 12,
      helperText: 'Number of testimonials to show initially and load with each click'
    },
    gapField,
    paddingField
  ]
});
