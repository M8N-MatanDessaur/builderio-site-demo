import { Background, TextContent, RichTextContent, Button, CommonComponentProps } from '@/utils/common-types';

export interface Slide {
  preTitle?: TextContent;
  title?: TextContent;
  textContent?: RichTextContent;
  primaryButton?: Button;
  secondaryButton?: Button;
  background?: Background;
  description?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export interface HorizontalCarouselProps extends CommonComponentProps {
  slides?: Slide[];
  autoplayInterval?: number;
  ariaLabel?: string;
  pauseOnHover?: boolean;
  showControls?: boolean;
  controlsAriaLabel?: {
    previous?: string;
    next?: string;
    slideList?: string;
  };
}

export const defaultProps = {
  slides: [] as Slide[],
  autoplayInterval: 5000,
  ariaLabel: 'Content carousel',
  pauseOnHover: true,
  showControls: true,
  controlsAriaLabel: {
    previous: 'Go to previous slide',
    next: 'Go to next slide',
    slideList: 'Carousel slide list'
  }
} as const;
