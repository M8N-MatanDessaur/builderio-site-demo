import { Builder } from '@builder.io/react';
import Form from './Form';

Builder.registerComponent(Form, {
  name: 'Form',
  inputs: [
    {
      name: 'selectedForm',
      type: 'reference',
      model: 'forms',
      required: true,
      helperText: 'Select a form from your Form Models'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff',
      helperText: 'Background color of the form section'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Color of the text content'
    },
    {
      name: 'accentColor',
      type: 'color',
      defaultValue: 'var(--accent)',
      helperText: 'Color for buttons and interactive elements'
    },
    {
      name: 'borderRadius',
      type: 'number',
      defaultValue: 8,
      helperText: 'Border radius in pixels'
    },
    {
      name: 'padding',
      type: 'number',
      defaultValue: 32,
      helperText: 'Padding around the form in pixels'
    }
  ],
});
