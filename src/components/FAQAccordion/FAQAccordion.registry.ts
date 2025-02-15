import { Builder } from '@builder.io/react';
import FAQAccordion from './FAQAccordion';
import { defaultFAQItems } from './FAQAccordion.setup';
import {
  titleField,
  textContentField,
  backgroundColorField,
  textColorField,
  createItemsField,
  paddingField,
  gapField
} from '../../utils/common-fields';

Builder.registerComponent(FAQAccordion, {
  name: 'FAQ Accordion',
  inputs: [
    {
      ...titleField,
      defaultValue: 'Frequently Asked Questions',
      helperText: 'Main heading for the FAQ section'
    },
    {
      ...textContentField,
      name: 'description',
      defaultValue: '<p>Find answers to common questions about our services and solutions.</p>',
      helperText: 'Subtitle or description below the heading'
    },
    createItemsField([
      {
        name: 'question',
        friendlyName: 'Question',
        type: 'text',
        defaultValue: 'What is your question?',
        helperText: 'The question to be answered'
      },
      {
        ...textContentField,
        name: 'answer',
        friendlyName: 'Answer',
        defaultValue: '<p>Your detailed answer goes here. You can use <strong>rich text</strong> formatting.</p>',
        helperText: 'The answer with rich text support'
      }
    ], 'FAQ Items'),
    backgroundColorField,
    textColorField,
    paddingField,
    {
      ...gapField,
      helperText: 'Space between FAQ items'
    }
  ],
});
