import { Builder } from '@builder.io/react';
import FAQAccordion from './FAQAccordion';
import { defaultFAQItems } from './FAQAccordion.setup';

Builder.registerComponent(FAQAccordion, {
  name: 'FAQ Accordion',
  inputs: [
    {
      name: 'items',
      type: 'list',
      defaultValue: defaultFAQItems,
      subFields: [
        {
          name: 'question',
          type: 'string',
          defaultValue: 'What is your question?',
          helperText: 'The question to be answered'
        },
        {
          name: 'answer',
          type: 'richText',
          defaultValue: '<p>Your detailed answer goes here. You can use <strong>rich text</strong> formatting.</p>',
          helperText: 'The answer with rich text support'
        }
      ]
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Frequently Asked Questions',
      helperText: 'Main heading for the FAQ section'
    },
    {
      name: 'description',
      type: 'richText',
      defaultValue: '<p>Find answers to common questions about our services and solutions.</p>',
      helperText: 'Subtitle or description below the heading'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#ffffff',
      helperText: 'Background color of the section'
    },
    {
      name: 'textColor',
      type: 'color',
      defaultValue: '#000000',
      helperText: 'Color of the text content'
    }
  ],
});
