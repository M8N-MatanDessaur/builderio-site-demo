import { CommonComponentProps } from '@/utils/common-types';

export interface TimelineItem {
  title: string;
  description: string; // HTML string for rich text
  image?: File | string;
  icon?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  date: string;
}

export interface DynamicTimelineProps extends CommonComponentProps {
  items?: TimelineItem[];
  title?: string;
  description?: string; // HTML string for rich text
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const defaultTimelineItems: TimelineItem[] = [
  {
    date: '2020',
    title: 'Foundation',
    description: '<p>Embarked on our journey with a vision to revolutionize the industry. Started with a small team of dedicated innovators.</p>',
    backgroundColor: "#ffffff",
    titleColor: "#111827",
    textColor: "#4B5563"
  },
  {
    date: '2021',
    title: 'Growth & Innovation',
    description: '<p>Expanded our reach and introduced groundbreaking solutions. <strong>Doubled</strong> our team size and client base.</p>',
    backgroundColor: "#ffffff",
    titleColor: "#111827",
    textColor: "#4B5563"
  },
  {
    date: '2022',
    title: 'Global Recognition',
    description: '<p>Achieved international acclaim and established presence in <em>multiple</em> markets. Launched our flagship product.</p>',
    backgroundColor: "#ffffff",
    titleColor: "#111827",
    textColor: "#4B5563"
  },
  {
    date: "2023",
    title: "Innovation Award",
    description: "Recognized for groundbreaking innovations in the field",
    backgroundColor: "#ffffff",
    titleColor: "#111827",
    textColor: "#4B5563"
  }
];
