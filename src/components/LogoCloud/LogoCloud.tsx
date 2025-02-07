import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
import styles from './LogoCloud.module.css';
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
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getImageUrl = (logo: any) => {
    console.log('Processing logo:', logo);
    if (typeof logo.image?.image === 'string') {
      return logo.image.image;
    }
    if (logo.image?.image?.name) {
      return '/logos/' + logo.image.image.name;
    }
    // Fallback to a placeholder if no image is available
    return 'https://via.placeholder.com/150x50?text=' + encodeURIComponent(logo.name);
  };

  const renderLogo = (logo: any, index: number) => {
    const imageUrl = getImageUrl(logo);
    console.log('Rendering logo:', logo.name, 'with URL:', imageUrl);
    
    return (
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
            src={imageUrl}
            alt={logo.image?.alt || logo.name}
            className={`${styles.logo} ${grayscale ? styles.grayscale : ''}`}
            style={{ 
              width: logo.image?.width || '150px',
              height: logo.image?.height || '50px'
            }}
            loading="lazy"
            onError={(e) => {
              console.log('Image failed to load:', imageUrl);
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/150x50?text=${encodeURIComponent(logo.name)}`;
            }}
          />
        </a>
      ) : (
        <img
          src={imageUrl}
          alt={logo.image?.alt || logo.name}
          className={`${styles.logo} ${grayscale ? styles.grayscale : ''}`}
          style={{ 
            width: logo.image?.width || '150px',
            height: logo.image?.height || '50px'
          }}
          loading="lazy"
          onError={(e) => {
            console.log('Image failed to load:', imageUrl);
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/150x50?text=${encodeURIComponent(logo.name)}`;
          }}
        />
      )}
    </div>
  )};

  return (
    <section 
      className={`${styles.container} ${className}`}
      style={{ backgroundColor }}
      data-logo-count={logos?.length || 0}
    >
      <div 
        ref={headerRef}
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

      <div ref={gridRef} className={styles.marqueeWrapper}>
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className={`${styles.logoGrid} ${gridInView ? styles.visible : ''}`}
        >
          {logos?.map((logo, index) => renderLogo(logo, index))}
          {logos?.map((logo, index) => renderLogo(logo, index + (logos.length || 0)))}
        </Marquee>
      </div>
    </section>
  );
}
