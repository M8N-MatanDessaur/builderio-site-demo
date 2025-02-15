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
  paddingField,
  layoutFields,
  hoverEffectField,
  borderRadiusField,
  captionFields
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
    layoutFields.columns,
    {
      ...gapField,
      type: 'number',
      defaultValue: 16,
      min: 0,
      max: 100,
      helperText: 'Space between images (in pixels)'
    },
    layoutFields.maxWidth,
    hoverEffectField,
    borderRadiusField,
    captionFields.showCaptions,
    backgroundColorField,
    captionFields.captionColor,
    paddingField
  ]
});
