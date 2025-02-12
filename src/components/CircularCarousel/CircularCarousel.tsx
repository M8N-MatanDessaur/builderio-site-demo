import { useState, useEffect } from 'react'
import styles from './CircularCarousel.module.css'

export interface CarouselCard {
  title: string
  description: string
  image?: string
  icon?: string
  ctaText?: string
  ctaUrl?: string
  backgroundColor?: string
  titleColor?: string
  textColor?: string
}

export interface CircularCarouselProps {
  cards?: CarouselCard[]
  autoRotate?: boolean
  rotationInterval?: number
  backgroundColor?: string
  titleColor?: string
  textColor?: string
}

const defaultProps = {
  cards: [],
  autoRotate: true,
  rotationInterval: 3000
}

export function CircularCarousel({ 
  cards = defaultProps.cards,
  autoRotate = defaultProps.autoRotate,
  rotationInterval = defaultProps.rotationInterval,
  backgroundColor,
  titleColor,
  textColor,
}: CircularCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = cards.length || 5

  useEffect(() => {
    if (autoRotate && cards.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % totalCards)
      }, rotationInterval)
      return () => clearInterval(interval)
    }
  }, [autoRotate, totalCards, rotationInterval, cards.length])

  const getCardStyle = (index: number) => {
    let position = (index - activeIndex) % totalCards
    if (position < 0) position += totalCards
    if (position > totalCards / 2) position -= totalCards
    
    // Calculate the angle for the circular arrangement
    const angle = (position * 8) // Reduced angle for wider spacing
    const radius = 800 // Increased radius for wider spread
    
    // Convert angle to radians for Math calculations
    const radian = (angle * Math.PI) / 180
    
    // Calculate x and z positions on the circle
    const x = Math.sin(radian) * radius
    const z = Math.abs(position) * 100 // Increased depth for better separation
    
    // Calculate scale based on position
    const scale = position === 0 ? 1 : Math.max(0.85, 1 - Math.abs(position) * 0.12)
    
    return {
      transform: `
        translate(-50%, -50%)
        translateX(${x}px)
        translateZ(${-z}px)
        rotateY(${angle}deg)
        scale(${scale})
      `,
      zIndex: position === 0 ? 1000 : totalCards - Math.abs(position),
      pointerEvents: position === 0 ? 'auto' as const : 'none' as const,
      filter: position === 0 ? 'none' : 'brightness(0.95)'
    }
  }

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + totalCards) % totalCards)
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % totalCards)
  }

  const handleCardClick = (card: CarouselCard) => {
    if (card.ctaUrl) {
      window.open(card.ctaUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const renderCard = (card: CarouselCard | undefined, index: number) => {
    const isPlaceholder = !card

    return (
      <div
        key={index}
        className={styles.card}
        style={{
          ...getCardStyle(index),
          backgroundColor: card?.backgroundColor || backgroundColor,
        }}
        onClick={() => card && handleCardClick(card)}
        role={card?.ctaUrl ? 'button' : 'article'}
        tabIndex={card?.ctaUrl ? 0 : undefined}
      >
        {isPlaceholder ? (
          <div className={styles.placeholderContent}>
            <div className={styles.placeholderImage} />
            <div className={styles.placeholderTitle} />
            <div className={styles.placeholderText} />
          </div>
        ) : (
          <div className={styles.cardContent}>
            {card.image ? (
              <div className={styles.imageWrapper}>
                <img src={card.image} alt="" className={styles.image} />
              </div>
            ) : card.icon && (
              <div className={styles.iconWrapper}>
                <img src={card.icon} alt="" className={styles.icon} />
              </div>
            )}
            <h3
              className={styles.title}
              style={{
                color: card?.titleColor || titleColor,
              }}
            >
              {card.title}
            </h3>
            <p
              className={styles.description}
              style={{
                color: card?.textColor || textColor,
              }}
            >
              {card.description}
            </p>
            {card.ctaText && (
              <button 
                className={styles.cta}
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(card)
                }}
              >
                {card.ctaText}
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  const cardElements = cards.length > 0
    ? cards.map((card, index) => renderCard(card, index))
    : Array(5).fill(null).map((_, index) => renderCard(undefined, index))

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselStage}>
          {cardElements}
        </div>
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
