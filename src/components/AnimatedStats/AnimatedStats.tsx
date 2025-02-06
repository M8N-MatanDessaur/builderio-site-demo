import React, { useState, useEffect } from 'react';
import styles from './AnimatedStats.module.css';
import { useInView } from '../../hooks/useInView';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
}

interface AnimatedStatsProps {
  stats?: StatItem[];
  backgroundColor?: string;
  numberColor?: string;
  labelColor?: string;
}

const AnimatedNumber = ({ value, prefix, suffix, color }: { 
  value: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.number} style={{ color }}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <span className={styles.value}>{displayValue.toLocaleString()}</span>
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};

export function AnimatedStats({ 
  stats = [], 
  backgroundColor = '#ffffff',
  numberColor = '#0070f3', // Same blue as other components
  labelColor = '#666666'
}: AnimatedStatsProps) {
  const [containerRef, isInView] = useInView({ threshold: 0.3 });

  return (
    <div 
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`${styles.container} ${isInView ? styles.visible : ''}`}
      style={{ backgroundColor }}
    >
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={styles.statItem}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <AnimatedNumber 
              value={stat.number} 
              prefix={stat.prefix}
              suffix={stat.suffix}
              color={stat.color || numberColor}
            />
            <div 
              className={styles.label}
              style={{ color: labelColor }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
