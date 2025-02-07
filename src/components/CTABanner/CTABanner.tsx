import React from 'react';
import { motion } from 'framer-motion';
import { CTABannerProps } from './CTABanner.setup';
import styles from './CTABanner.module.css';

export const CTABanner: React.FC<CTABannerProps> = ({
  preTitle,
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor,
  textColor,
  accentColor,
  backgroundStyle,
  gradientColors,
  animationStyle,
  layout,
  showDecorativeElements
}) => {
  // Animation variants based on style
  const containerVariants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6 }
    },
    slide: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    bounce: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  // Button hover animation
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  // Background style
  const backgroundStyles = backgroundStyle === 'gradient' && gradientColors
    ? {
        background: `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.to})`,
      }
    : { backgroundColor };

  return (
    <motion.section
      className={`${styles.ctaBanner} ${styles[layout || 'centered']}`}
      style={{
        ...backgroundStyles,
        color: textColor
      }}
      initial="initial"
      animate="animate"
      variants={containerVariants[animationStyle || 'fade']}
    >
      {showDecorativeElements && (
        <div className={styles.decorativeElements}>
          <motion.div
            className={styles.circle}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className={styles.dots}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
      )}

      <div className={styles.content}>
        {preTitle && (
          <motion.span
            className={styles.preTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {preTitle}
          </motion.span>
        )}

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}

        <div className={styles.buttons}>
          <motion.a
            href={primaryButton.url}
            className={styles.primaryButton}
            style={{
              backgroundColor: primaryButton.backgroundColor,
              color: primaryButton.textColor,
              border: `2px solid ${primaryButton.borderColor}`
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            {primaryButton.buttonText}
          </motion.a>

          {secondaryButton && (
            <motion.a
              href={secondaryButton.url}
              className={styles.secondaryButton}
              style={{
                backgroundColor: 'transparent',
                color: secondaryButton.textColor,
                border: `2px solid ${secondaryButton.borderColor}`
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {secondaryButton.buttonText}
            </motion.a>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default CTABanner;
