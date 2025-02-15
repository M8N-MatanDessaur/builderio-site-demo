'use client';

import { useEffect, useState } from 'react';
import styles from './BackToTop.module.css';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Check initial position
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.button}
          aria-label="Back to top"
        >
          <svg width="35" height="35" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
