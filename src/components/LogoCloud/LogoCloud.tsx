import React, { useRef, useEffect, useState } from 'react';
import styles from './LogoCloud.module.css';
import { useInView } from '../../hooks/useInView';
import { LogoCloudProps, defaultProps } from './LogoCloud.setup';

export function LogoCloud({
  logos = defaultProps.logos,
  backgroundColor = defaultProps.backgroundColor,
  textColor = defaultProps.textColor,
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  headingColor = defaultProps.headingColor,
  subtitleColor = defaultProps.subtitleColor,
  grayscale = defaultProps.grayscale,
  className = defaultProps.className
}: LogoCloudProps) {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  const getImageUrl = (logo: any) => {
    // Handle both File objects and URLs from Builder.io
    if (typeof logo.image?.image === 'string') {
      return logo.image.image;
    }
    return '/logos/' + logo.image?.image?.name;
  };

  const logoCount = logos?.length || 0;

  return (
    <section 
      className={`${styles.container} ${className}`}
      style={{ backgroundColor }}
      data-logo-count={logoCount}
    >
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`${styles.header} ${headerInView ? styles.visible : ''}`}
      >
        {title && (
          <h2 
            className={styles.title}
            style={{ color: headingColor }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p 
            className={styles.subtitle}
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={`${styles.logoGrid} ${gridInView ? styles.visible : ''}`}
      >
        {(logos || []).map((logo, index) => (
          <div 
            key={index}
            className={styles.logoWrapper}
            style={{ 
              '--delay': `${index * 0.1}s`,
            } as React.CSSProperties}
          >
            {logo.link ? (
              <a 
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
                aria-label={`Visit ${logo.name}`}
              >
                <img
                  src={getImageUrl(logo)}
                  alt={logo.image?.alt || logo.name}
                  className={`${styles.logo} ${grayscale ? styles.grayscale : ''}`}
                  style={{ 
                    width: logo.image?.width || 'auto',
                    height: logo.image?.height || 'auto'
                  }}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                src={getImageUrl(logo)}
                alt={logo.image?.alt || logo.name}
                className={`${styles.logo} ${grayscale ? styles.grayscale : ''}`}
                style={{ 
                  width: logo.image?.width || 'auto',
                  height: logo.image?.height || 'auto'
                }}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
