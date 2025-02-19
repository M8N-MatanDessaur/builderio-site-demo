import { Builder } from '@builder.io/react';
import PricingTiers from './PricingTiers';
import {
  titleField,
  descriptionField,
  backgroundColorField,
  textColorField,
  urlField,
  paddingField,
  gapField
} from '../../utils/common-fields';

Builder.registerComponent(PricingTiers, {
  name: 'Pricing Tiers',
  image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4e1c17c8a3c24704b537e7ce6ecd562c',
  inputs: [
    titleField,
    descriptionField,
    backgroundColorField,
    textColorField,
    {
      name: 'tiers',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'name',
          type: 'string',
          defaultValue: 'Basic Plan',
          helperText: 'Name of the pricing tier',
        },
        {
          name: 'monthlyPrice',
          type: 'number',
          defaultValue: 29,
          helperText: 'Monthly price - yearly price will be calculated automatically',
        },
        {
          name: 'yearlyDiscount',
          type: 'number',
          defaultValue: 0,
          helperText: 'Percentage discount for yearly billing (e.g. 20 means 20% off)',
          min: 0,
          max: 100
        },
        {
          ...descriptionField,
          defaultValue: 'Perfect for small businesses',
          helperText: 'Brief description of this pricing tier',
        },
        {
          name: 'features',
          type: 'longText',
          defaultValue: '10 Users included\n2GB of storage\nEmail support\nHelp center access',
          helperText: 'List of features (one per line)',
        },
        {
          name: 'isPopular',
          type: 'boolean',
          defaultValue: false,
          helperText: 'Highlight this as the most popular plan',
        },
        {
          name: 'ctaText',
          type: 'string',
          defaultValue: 'Start free trial',
          helperText: 'Call-to-action button text',
        },
        {
          ...urlField,
          name: 'ctaLink',
          helperText: 'URL for the call-to-action button',
        },
        {
          name: 'backgroundColor',
          type: 'string',
          defaultValue: 'transparent',
          helperText: 'Background color for this tier card',
        },
        {
          name: 'textColor',
          type: 'string',
          defaultValue: '#ffffff',
          helperText: 'Text color for this tier card',
        },
      ],
    },
    paddingField,
    gapField
  ],
});
