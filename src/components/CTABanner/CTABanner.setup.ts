import { CommonStyleProps, Button } from '@/utils/common-types';

export interface CTABannerProps extends CommonStyleProps {
  /**
   * @title Pre-Title
   * @description Small text displayed above the main title
   */
  preTitle?: string;

  /**
   * @title Main Title
   * @description The main heading text
   */
  title: string;

  /**
   * @title Description
   * @description Supporting text below the title
   */
  description?: string;

  /**
   * @title Primary Button
   * @description Main call-to-action button
   */
  primaryButton: Button;

  /**
   * @title Secondary Button
   * @description Optional secondary button
   */
  secondaryButton?: Button;

  /**
   * @title Background Style
   * @description Choose between gradient or solid background
   */
  backgroundStyle?: 'gradient' | 'solid';

  /**
   * @title Gradient Colors
   * @description Colors for gradient background (if gradient style is selected)
   */
  gradientColors?: {
    from: string;
    to: string;
  };

  /**
   * @title Animation Style
   * @description Choose the animation style for the banner
   */
  animationStyle?: 'fade' | 'slide' | 'bounce';

  /**
   * @title Layout
   * @description Choose between different layouts
   */
  layout?: 'centered' | 'split' | 'compact';

  /**
   * @title Show Decorative Elements
   * @description Add visual elements in the background
   */
  showDecorativeElements?: boolean;
}

export const defaultProps: Partial<CTABannerProps> = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  accentColor: '#0070f3',
  backgroundStyle: 'gradient',
  gradientColors: {
    from: '#000000',
    to: '#0070f3'
  },
  animationStyle: 'fade',
  layout: 'centered',
  showDecorativeElements: true,
  primaryButton: {
    buttonText: 'Get Started',
    url: '#',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#ffffff'
  }
} as const;
