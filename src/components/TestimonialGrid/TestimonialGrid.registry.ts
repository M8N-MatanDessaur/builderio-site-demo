import { Builder } from '@builder.io/react';
import { TestimonialGrid } from './TestimonialGrid';

Builder.registerComponent(TestimonialGrid, {
  name: 'Testimonial Grid',
  inputs: [
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Amazing Experience',
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Share your customer testimonial here. Add their experience and feedback about your product or service.',
        },
        {
          name: 'author',
          type: 'string',
          defaultValue: 'John Doe',
        },
        {
          name: 'rating',
          type: 'number',
          defaultValue: 5,
          min: 1,
          max: 5,
        },
        {
          name: 'imageUrl',
          type: 'string',
          defaultValue: '',
          helperText: 'URL to the author\'s profile image',
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
      defaultValue: 'What Our Clients Say',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Trusted by thousands of satisfied customers worldwide',
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      defaultValue: 6,
      helperText: 'Number of testimonials to show initially and load with each click',
    },
  ],
});
