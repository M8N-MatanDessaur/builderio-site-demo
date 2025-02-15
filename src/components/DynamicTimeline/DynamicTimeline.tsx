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
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

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
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

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
        <div dangerouslySetInnerHTML={{ __html: description }} />
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
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{
              opacity: isVisible[index] ? 1 : 0,
              x: isVisible[index] ? 0 : (index % 2 === 0 ? -50 : 50)
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className={`${styles.timelineContent} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineDot} />
              <motion.div 
                className={styles.timelineCard}
                whileHover={{ scale: 1.02 }}
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
