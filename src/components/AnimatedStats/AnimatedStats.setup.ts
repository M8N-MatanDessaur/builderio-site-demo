import { CommonStyleProps } from '@/utils/common-types';

export interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
}

export interface AnimatedStatsProps extends CommonStyleProps {
  stats?: StatItem[];
  labelColor?: string;
}

export interface AnimatedNumberProps {
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
  labelColor: '#666666'
} as const;
