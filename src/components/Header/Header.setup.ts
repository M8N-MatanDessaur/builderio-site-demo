import { SeoProps } from '@/utils/common-types';

export interface NavigationItem extends SeoProps {
  link: string;
  url: string;
  childlink?: NavigationItem[];
  ariaLabel?: string;
  title?: string;
  target?: '_blank' | '_self';
  rel?: string;
}
