import { CommonComponentProps } from '@/utils/common-types';

export interface PricingTier {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface PaddingProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PricingTiersProps extends CommonComponentProps {
  tiers?: PricingTier[];
  title?: string;
  description?: string;
  padding?: PaddingProps;
  gap?: number;
}

export const defaultTiers: PricingTier[] = [
  {
    name: 'Basic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for trying out our platform',
    features: 'Free forever\nBasic features\nCommunity support\nNo credit card required',
    isPopular: false,
    ctaText: 'Get Started',
    ctaLink: '#',
    backgroundColor: 'transparent',
    textColor: '#000000',
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'Everything you need to grow your business',
    features: 'All Basic features\nPriority support\nAdvanced analytics\nCustom branding\nAPI access\nUnlimited projects',
    isPopular: true,
    ctaText: 'Start Free Trial',
    ctaLink: '#',
    backgroundColor: 'transparent',
    textColor: '#000000',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'Advanced features for large organizations',
    features: 'All Pro features\nDedicated support\nCustom integrations\nAdvanced security\nSLA guarantee\nTeam training\nCustom contracts',
    isPopular: false,
    ctaText: 'Contact Sales',
    ctaLink: '#',
    backgroundColor: 'transparent',
    textColor: '#000000',
  },
];

export const defaultProps = {
  title: 'Simple, transparent pricing',
  description: 'Choose the plan that best fits your needs',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  tiers: defaultTiers,
  padding: {
    top: 40,
    right: 20,
    bottom: 40,
    left: 20,
  } as PaddingProps,
  gap: 24,
} satisfies PricingTiersProps;
