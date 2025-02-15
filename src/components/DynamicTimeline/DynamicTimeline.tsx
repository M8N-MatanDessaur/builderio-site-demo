'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './DynamicTimeline.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DynamicTimelineProps, defaultTimelineItems } from './DynamicTimeline.setup';

export default function DynamicTimeline({ 
  items = defaultTimelineItems,
  title = 'Our Journey',
  description = 'Discover the key milestones that shaped our success',
  backgroundColor = '#ffffff',
  textColor = '#000000',
  className = ''
}: DynamicTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(items.length).fill(false));
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setIsVisible(prev => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    // Set first item visible by default
    setIsVisible(prev => {
      const newState = [...prev];
      newState[0] = true;
      return newState;
    });

    return () => observer.disconnect();
  }, [items]);

  const containerStyle = {
    backgroundColor,
    '--text-color': textColor,
    '--text-secondary': textColor + '99'
  } as React.CSSProperties;

  return (
    <div className={className} style={containerStyle}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.headerDescription} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      
      <motion.div 
        ref={containerRef}
        style={{ opacity }}
        className={styles.timelineContainer}
      >
        <div className={styles.timelineLine} />
        {items.map((item, index) => (
          <motion.div
            key={index}
            data-index={index}
            className={`${styles.timelineItem} timeline-item`}
            initial={{ opacity: index === 0 ? 1 : 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{
              opacity: isVisible[index] ? 1 : 0,
              x: isVisible[index] ? 0 : (index % 2 === 0 ? -50 : 50)
            }}
            transition={{ duration: 0.8, delay: index === 0 ? 0 : 0.1 }}
          >
            <div className={`${styles.timelineContent} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <motion.div 
                className={styles.timelineCard}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.image && (
                  <div className={styles.imageWrapper}>
                    <img 
                      src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
                      alt={item.title}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={styles.cardContent}>
                  <span className={styles.date}>{item.date}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div 
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  {item.ctaText && item.ctaUrl && (
                    <a href={item.ctaUrl} className={styles.cta} target="_blank" rel="noopener noreferrer">
                      {item.ctaText}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
