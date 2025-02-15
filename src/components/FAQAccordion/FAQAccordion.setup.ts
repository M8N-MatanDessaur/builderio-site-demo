import { CommonComponentProps } from '@/utils/common-types';

export interface FAQItem {
  question: string;
  answer: string; // HTML string for rich text
  isOpen?: boolean;
}

export interface FAQAccordionProps extends CommonComponentProps {
  items?: FAQItem[];
  title?: string;
  description?: string; // HTML string for rich text
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const defaultFAQItems: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: '<p>We provide a comprehensive suite of services including web development, mobile app development, UI/UX design, and digital transformation consulting. Each service is tailored to meet your specific business needs.</p>'
  },
  {
    question: 'How long does a typical project take?',
    answer: '<p>Project timelines vary based on complexity and scope. A typical website project might take 4-8 weeks, while more complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.</p>'
  },
  {
    question: 'What is your pricing structure?',
    answer: '<p>Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and ensure complete transparency in our pricing. Contact us for a detailed quote tailored to your needs.</p>'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: '<p>Yes, we offer comprehensive support and maintenance packages. Our team is available for bug fixes, updates, and continuous improvements to ensure your solution remains effective and up-to-date.</p>'
  }
];
