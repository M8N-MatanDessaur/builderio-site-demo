import { Builder } from '@builder.io/react';
import { CTABanner } from './CTABanner';
import {
  preTitleField,
  titleField,
  descriptionField,
  primaryButtonField,
  secondaryButtonField,
  backgroundColorField,
  textColorField,
  paddingField
} from '../../utils/common-fields';

Builder.registerComponent(CTABanner, {
  name: 'CTABanner',
  inputs: [
    preTitleField,
    {
      ...titleField,
      defaultValue: 'Ready to Get Started?'
    },
    {
      ...descriptionField,
      defaultValue: 'Join thousands of satisfied customers and transform your business today.'
    },
    primaryButtonField,
    secondaryButtonField,
    {
      ...backgroundColorField,
      defaultValue: '#1a1a1a'
    },
    {
      ...textColorField,
      defaultValue: '#ffffff'
    },
    paddingField
  ],
  image: 'https://img.icons8.com/ios/50/000000/megaphone.png',
  description: 'A customizable call-to-action banner with animations and multiple layout options'
});
