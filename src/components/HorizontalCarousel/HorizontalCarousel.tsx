import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './HorizontalCarousel.module.css';

interface SlideBackground {
  image?: string;
  imagePosition?: string;
  color?: string;
}

interface TextContent {
  text: string;
  color: string;
}

interface RichTextContent {
  text: string;
  color: string;
}

interface Button {
  buttonText: string;
  url: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

interface Slide {
  preTitle?: TextContent;
  title?: TextContent;
  textContent?: RichTextContent;
  primaryButton?: Button;
  secondaryButton?: Button;
  background?: SlideBackground;
}

interface HorizontalCarouselProps {
  slides?: Slide[];
  autoplayInterval?: number;
}

export function HorizontalCarousel({ slides = [], autoplayInterval = 5000 }: HorizontalCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout>();

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeSlide) return;
    setIsTransitioning(true);
    setActiveSlide(index);
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Match this with CSS transition duration
  }, [activeSlide, isTransitioning]);

  const goToNextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    const nextIndex = (activeSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }, [activeSlide, slides.length, goToSlide]);

  // Handle autoplay
  useEffect(() => {
    if (!autoplayInterval || autoplayInterval <= 0 || isPaused || slides.length <= 1) {
      return;
    }

    autoplayTimeoutRef.current = setTimeout(goToNextSlide, autoplayInterval);

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [autoplayInterval, activeSlide, isPaused, slides.length, goToNextSlide]);

  if (!slides.length) return null;

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`${styles.slide} ${index === activeSlide ? styles.activeSlide : ''}`}
            data-has-image={!!slide.background?.image}
            style={{
              backgroundColor: slide.background?.color,
              backgroundImage: slide.background?.image ? `url(${slide.background.image})` : 'none',
              backgroundPosition: slide.background?.imagePosition || 'center center',
            }}
          >
            <div className={styles.slideContent}>
              {slide.preTitle && (
                <div 
                  className={styles.preTitle}
                  style={{ color: slide.preTitle.color }}
                >
                  {slide.preTitle.text}
                </div>
              )}
              {slide.title && (
                <h2 
                  className={styles.title}
                  style={{ color: slide.title.color }}
                >
                  {slide.title.text}
                </h2>
              )}
              {slide.textContent && (
                <div 
                  className={styles.textContent}
                  style={{ color: slide.textContent.color }}
                  dangerouslySetInnerHTML={{ __html: slide.textContent.text }}
                />
              )}
              <div className={styles.ctaContainer}>
                {slide.primaryButton?.buttonText && (
                  <a 
                    href={slide.primaryButton.url}
                    className={styles.primaryCta}
                    style={{
                      backgroundColor: slide.primaryButton.backgroundColor,
                      color: slide.primaryButton.textColor,
                      borderColor: slide.primaryButton.borderColor,
                    }}
                  >
                    {slide.primaryButton.buttonText}
                  </a>
                )}
                {slide.secondaryButton?.buttonText && (
                  <a 
                    href={slide.secondaryButton.url}
                    className={styles.secondaryCta}
                    style={{
                      backgroundColor: slide.secondaryButton.backgroundColor,
                      color: slide.secondaryButton.textColor,
                      borderColor: slide.secondaryButton.borderColor,
                    }}
                  >
                    {slide.secondaryButton.buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className={styles.dotsNavigation}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
}