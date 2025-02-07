import { CommonComponentProps, Image } from '@/utils/common-types';

export type IconType = 'rocket' | 'brush' | 'tools' | 'device';

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color?: string;
  link?: string;
  image?: Image;
  ariaLabel?: string;
  linkTitle?: string;
}

export interface FeaturesGridProps extends CommonComponentProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
  headingColor?: string;
  subtitleColor?: string;
  gridAriaLabel?: string;
}

export const defaultFeatures: Feature[] = [
  {
    icon: 'rocket',
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices',
    link: '/performance',
    linkTitle: 'Learn more about our performance optimization',
    ariaLabel: 'Performance feature'
  },
  {
    icon: 'brush',
    title: 'Beautiful Design',
    description: 'Stunning visuals that capture attention and engage users',
    link: '/design',
    linkTitle: 'Explore our design philosophy',
    ariaLabel: 'Design feature'
  },
  {
    icon: 'tools',
    title: 'Easy to Use',
    description: 'Intuitive interface that anyone can master quickly',
    link: '/usability',
    linkTitle: 'Learn about our user-friendly interface',
    ariaLabel: 'Usability feature'
  },
  {
    icon: 'device',
    title: 'Responsive',
    description: 'Perfect experience on any screen size or device',
    link: '/responsive',
    linkTitle: 'See our responsive design approach',
    ariaLabel: 'Responsive design feature'
  },
];

export const defaultProps = {
  features: defaultFeatures,
  backgroundColor: '#ffffff',
  textColor: 'var(--primary)',
  accentColor: 'var(--accent)',
  headingColor: 'var(--secondary)',
  subtitleColor: 'var(--primary)',
  title: 'Our Key Features',
  subtitle: 'Discover what makes us different'
} as const;
