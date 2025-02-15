import { Builder } from '@builder.io/react';
import MasonryGallery from './MasonryGallery';
import {
  titleField,
  descriptionField,
  imageField,
  backgroundColorField,
  textColorField,
  createItemsField,
  gapField,
  paddingField
} from '../../utils/common-fields';

const defaultGalleryImages = [
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
];

Builder.registerComponent(MasonryGallery, {
  name: 'MasonryGallery',
  inputs: [
    {
      ...createItemsField([
        {
          ...imageField,
          required: true,
          helperText: 'Upload an image for the gallery'
        },
        {
          name: 'alt',
          friendlyName: 'Alt Text',
          type: 'text',
          helperText: 'Alternative text for accessibility'
        },
        {
          ...titleField,
          name: 'title',
          required: false,
          helperText: 'Image title (optional)'
        },
        {
          ...descriptionField,
          required: false,
          helperText: 'Image description (optional)'
        }
      ], 'Gallery Images'),
      defaultValue: defaultGalleryImages
    },
    {
      name: 'columns',
      friendlyName: 'Number of Columns',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 6,
      helperText: 'Number of columns in the grid'
    },
    {
      ...gapField,
      type: 'number',
      defaultValue: 16,
      min: 0,
      max: 100,
      helperText: 'Space between images (in pixels)'
    },
    {
      name: 'maxWidth',
      friendlyName: 'Maximum Width',
      type: 'text',
      defaultValue: '1440px',
      helperText: 'Maximum width of the gallery'
    },
    {
      name: 'hoverEffect',
      friendlyName: 'Hover Effect',
      type: 'enum',
      defaultValue: 'zoom',
      enum: ['zoom', 'lift', 'darken', 'none'],
      helperText: 'Effect when hovering over images'
    },
    {
      name: 'rounded',
      friendlyName: 'Border Radius',
      type: 'enum',
      defaultValue: 'medium',
      enum: ['none', 'small', 'medium', 'large'],
      helperText: 'Border radius of images'
    },
    {
      name: 'showCaptions',
      friendlyName: 'Show Captions',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show image titles and descriptions on hover'
    },
    backgroundColorField,
    {
      ...textColorField,
      name: 'captionColor',
      friendlyName: 'Caption Color',
      defaultValue: '#ffffff',
      helperText: 'Text color for image captions'
    },
    paddingField
  ]
});
