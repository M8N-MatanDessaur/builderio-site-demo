import { Builder } from '@builder.io/react';
import MasonryGallery from './MasonryGallery';

Builder.registerComponent(MasonryGallery, {
  name: 'MasonryGallery',
  inputs: [
    {
      name: 'images',
      type: 'list',
      defaultValue: [
        {
          image: '',
          alt: 'Gallery Image 1',
          title: 'Image Title',
          description: 'Image description'
        },
        {
          image: '',
          alt: 'Gallery Image 2',
          title: 'Image Title',
          description: 'Image description'
        },
        {
          image: '',
          alt: 'Gallery Image 3',
          title: 'Image Title',
          description: 'Image description'
        }
      ],
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
          required: true,
          helperText: 'Upload an image file'
        },
        {
          name: 'alt',
          type: 'string',
          helperText: 'Alternative text for accessibility'
        },
        {
          name: 'title',
          type: 'string',
          helperText: 'Image title (optional)'
        },
        {
          name: 'description',
          type: 'string',
          helperText: 'Image description (optional)'
        }
      ],
    },
    {
      name: 'columns',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 6,
      helperText: 'Number of columns in the grid'
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: 16,
      min: 0,
      max: 100,
      helperText: 'Space between images (in pixels)'
    },
    {
      name: 'maxWidth',
      type: 'string',
      defaultValue: '1200px',
      helperText: 'Maximum width of the gallery'
    },
    {
      name: 'hoverEffect',
      type: 'enum',
      defaultValue: 'zoom',
      enum: ['zoom', 'lift', 'darken', 'none'],
      helperText: 'Effect when hovering over images'
    },
    {
      name: 'rounded',
      type: 'enum',
      defaultValue: 'medium',
      enum: ['none', 'small', 'medium', 'large'],
      helperText: 'Border radius of images'
    },
    {
      name: 'showCaptions',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show image titles and descriptions on hover'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: 'transparent',
      helperText: 'Background color of the gallery'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Color of the text in captions'
    },
    {
      name: 'accentColor',
      type: 'color',
      defaultValue: 'var(--accent)',
      helperText: 'Accent color for hover effects'
    }
  ],
});
