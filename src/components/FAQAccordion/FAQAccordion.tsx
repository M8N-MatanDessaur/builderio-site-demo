'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';
import { FAQAccordionProps, defaultFAQItems } from './FAQAccordion.setup';

export default function FAQAccordion({
  items = defaultFAQItems,
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our services and solutions.',
  backgroundColor = '#ffffff',
  textColor = '#000000',
  className = ''
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
      
      <div className={styles.container}>
        <div className={styles.faqList}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openItems[index] ? styles.open : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className={styles.question}>
                <div className={styles.questionText}>{item.question}</div>
                <div className={styles.icon} />
              </div>
              <div 
                className={styles.answer}
                style={{ maxHeight: openItems[index] ? '1000px' : '0' }}
              >
                <div 
                  className={styles.answerContent}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
