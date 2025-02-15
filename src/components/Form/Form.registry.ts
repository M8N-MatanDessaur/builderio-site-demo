import { Builder } from '@builder.io/react';
import Form from './Form';
import {
  backgroundColorField,
  textColorField,
  paddingField
} from '../../utils/common-fields';

Builder.registerComponent(Form, {
  name: 'Form',
  inputs: [
    {
      name: 'selectedForm',
      friendlyName: 'Form Model',
      type: 'reference',
      model: 'forms',
      required: true,
      helperText: 'Select a form from your Form Models'
    },
    backgroundColorField,
    textColorField,
    {
      name: 'accentColor',
      friendlyName: 'Accent Color',
      type: 'color',
      defaultValue: 'var(--accent)',
      helperText: 'Color for buttons and interactive elements'
    },
    {
      name: 'borderRadius',
      friendlyName: 'Border Radius',
      type: 'number',
      defaultValue: 8,
      min: 0,
      max: 32,
      helperText: 'Border radius in pixels'
    },
    paddingField
  ],
});
