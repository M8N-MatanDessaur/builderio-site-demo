import { Background, TextContent, RichTextContent, Button } from '@/utils/common-types';

export interface Slide {
  preTitle?: TextContent;
  title?: TextContent;
  textContent?: RichTextContent;
  primaryButton?: Button;
  secondaryButton?: Button;
  background?: Background;
}

export interface HorizontalCarouselProps {
  slides?: Slide[];
  autoplayInterval?: number;
}

export const defaultProps = {
  slides: [] as Slide[],
  autoplayInterval: 5000
} as const;
