import { CommonComponentProps } from '@/utils/common-types';

export type IconType = 'rocket' | 'brush' | 'tools' | 'device';

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color?: string;
  link?: string;
}

export interface FeaturesGridProps extends CommonComponentProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
}

export const defaultFeatures: Feature[] = [
  {
    icon: 'rocket',
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices',
    link: '/performance',
  },
  {
    icon: 'brush',
    title: 'Beautiful Design',
    description: 'Stunning visuals that capture attention and engage users',
    link: '/design',
  },
  {
    icon: 'tools',
    title: 'Easy to Use',
    description: 'Intuitive interface that anyone can master quickly',
    link: '/usability',
  },
  {
    icon: 'device',
    title: 'Responsive',
    description: 'Perfect experience on any screen size or device',
    link: '/responsive',
  },
];

export const defaultProps = {
  features: defaultFeatures,
  backgroundColor: '#ffffff',
  textColor: '#000000',
  accentColor: '#007AFF',
  title: 'Why Choose Us',
  subtitle: 'Discover what makes us different'
} as const;
