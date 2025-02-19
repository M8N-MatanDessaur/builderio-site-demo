'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PricingTiers.module.css';
import { PricingTiersProps, defaultProps } from './PricingTiers.setup';

export interface PricingTier {
  name: string;
  monthlyPrice: number;
  yearlyDiscount: number;
  description: string;
  features: string;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
}

// Default values for padding
const DEFAULT_PADDING = {
  top: 40,
  right: 20,
  bottom: 40,
  left: 20,
};

export default function PricingTiers({ 
  title = 'Simple, transparent pricing',
  description = 'Choose the plan that best fits your needs',
  backgroundColor = '#ffffff',
  textColor = '#000000',
  tiers = [],
  padding = DEFAULT_PADDING,
  gap = 24,
  className = '',
}: PricingTiersProps) {
  const [isYearly, setIsYearly] = useState(false);

  // Show default tiers only if no tiers provided
  const displayTiers = tiers.length > 0 ? tiers : defaultProps.tiers;

  // Ensure padding has all required properties with defaults
  const safetyPadding = {
    top: padding?.top ?? DEFAULT_PADDING.top,
    right: padding?.right ?? DEFAULT_PADDING.right,
    bottom: padding?.bottom ?? DEFAULT_PADDING.bottom,
    left: padding?.left ?? DEFAULT_PADDING.left,
  };

  return (
    <div
      className={`${styles.pricingContainer} ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        padding: `${safetyPadding.top}px ${safetyPadding.right}px ${safetyPadding.bottom}px ${safetyPadding.left}px`,
      }}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.billingToggle}>
          <span style={{ color: !isYearly ? textColor : `${textColor}80` }}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`${styles.toggleButton} ${isYearly ? styles.toggleActive : ''}`}
          >
            <motion.div
              className={styles.toggleThumb}
              animate={{ x: isYearly ? 25 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span style={{ color: isYearly ? textColor : `${textColor}80` }}>
            Yearly {displayTiers.some(tier => (tier.yearlyDiscount || 0) > 0) && (
              <span style={{ color: 'var(--accent)' }}>
                (Save up to {Math.max(...displayTiers.map(tier => tier.yearlyDiscount || 0))}%)
              </span>
            )}
          </span>
        </div>
      </div>

      <div 
        className={styles.tiersContainer}
        style={{ gap: `${gap}px` }}
      >
        {displayTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.card} ${tier.isPopular ? styles.popularCard : ''}`}
            style={{
              backgroundColor: tier.backgroundColor || 'transparent',
              color: tier.textColor || textColor,
            }}
          >
            {tier.isPopular && (
              <span className={styles.popularBadge}>Most Popular</span>
            )}
            
            <div className={styles.cardContent}>
              <h3 className={styles.tierName}>{tier.name}</h3>
              <p className={styles.tierDescription}>{tier.description}</p>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={isYearly ? 'yearly' : 'monthly'}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={styles.priceContainer}
                >
                  <span className={styles.price}>
                    ${isYearly 
                      ? Math.round(tier.monthlyPrice * 12 * (1 - (tier.yearlyDiscount || 0) / 100))
                      : tier.monthlyPrice}
                  </span>
                  <span className={styles.period}>
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </motion.div>
              </AnimatePresence>

              <ul className={styles.featuresList}>
                {tier.features.split('\n').map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className={styles.feature}
                  >
                    <svg
                      className={styles.featureIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <a
                href={tier.ctaLink}
                className={styles.ctaButton}
              >
                {tier.ctaText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
