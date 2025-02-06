import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './FeaturesGrid.module.css';

interface Feature {
  icon: 'rocket' | 'brush' | 'tools' | 'device';
  title: string;
  description: string;
  color?: string;
  link?: string;
}

interface FeaturesGridProps {
  features?: Feature[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  title?: string;
  subtitle?: string;
}

const Icons = {
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  brush: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/>
    </svg>
  ),
  tools: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  device: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),
};

const defaultFeatures: Feature[] = [
  {
    icon: 'rocket',
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices',
    link: '/performance',
  },
  {
    icon: 'brush',
    title: 'Beautiful Design',
    description: 'Stunning visuals that capture attention and engage users',
    link: '/design',
  },
  {
    icon: 'tools',
    title: 'Easy to Use',
    description: 'Intuitive interface that anyone can master quickly',
    link: '/usability',
  },
  {
    icon: 'device',
    title: 'Responsive',
    description: 'Perfect experience on any screen size or device',
    link: '/responsive',
  },
];

export function FeaturesGrid({
  features = defaultFeatures,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  accentColor = '#007AFF',
  title = 'Why Choose Us',
  subtitle = 'Discover what makes us different'
}: FeaturesGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={styles.container}
      style={{ backgroundColor }}
      ref={gridRef}
    >
      <div className={styles.header}>
        <h2 
          className={styles.title}
          style={{ color: textColor }}
        >
          {title}
        </h2>
        <p 
          className={styles.subtitle}
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
      </div>
      
      <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
        {features.map((feature, index) => (
          <Link 
            href={feature.link || '#'} 
            key={index}
            className={styles.featureLink}
          >
            <div 
              className={styles.feature}
              style={{
                '--delay': `${index * 0.1}s`,
                '--accent-color': feature.color || accentColor,
                color: textColor,
              } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                {Icons[feature.icon]}
              </div>
              <div className={styles.content}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
                <div className={styles.arrow}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
