import { CommonStyleProps, SeoProps } from '@/utils/common-types';

export interface StatItem extends SeoProps {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
  ariaLabel?: string;
}

export interface AnimatedStatsProps extends CommonStyleProps {
  stats?: StatItem[];
  labelColor?: string;
  gridAriaLabel?: string;
}

export interface AnimatedNumberProps extends SeoProps {
  value: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export const defaultProps = {
  stats: [] as StatItem[],
  backgroundColor: '#ffffff',
  textColor: '#000000',
  numberColor: '#0070f3',
  labelColor: '#666666',
  ariaLabel: 'Statistics section',
  description: 'Key metrics and achievements',
  gridAriaLabel: 'Statistics grid'
} as const;
