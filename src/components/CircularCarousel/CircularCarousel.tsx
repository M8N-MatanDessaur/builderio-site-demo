import { useState, useEffect, useRef } from 'react'
import styles from './CircularCarousel.module.css'
import { CarouselCard, CircularCarouselProps } from './CircularCarousel.setup'

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
  console.log('CircularCarousel props:', { cards, autoRotate, rotationInterval, backgroundColor, titleColor, textColor });

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const totalCards = cards.length
  const carouselRef = useRef<HTMLDivElement>(null)

  // Don't show anything if there are no cards
  if (totalCards === 0) {
    return null;
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    if (autoRotate && !isDragging) {
      intervalId = setInterval(() => {
        handleNext()
      }, rotationInterval)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [autoRotate, rotationInterval, isDragging])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setCurrentX(e.clientX)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    
    const diff = currentX - startX
    const threshold = 50 // minimum distance for swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handlePrev()
      } else {
        handleNext()
      }
    }

    setIsDragging(false)
  }

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

  const handleCardClick = (card: CarouselCard) => {
    if (card.buttonLink) {
      window.open(card.buttonLink, '_blank', 'noopener,noreferrer')
    }
  }

  const renderCard = (card: CarouselCard, index: number) => {
    return (
      <div
        key={index}
        className={styles.card}
        style={{
          ...getCardStyle(index),
          backgroundColor: card.backgroundColor || backgroundColor,
        }}
        onClick={() => handleCardClick(card)}
        role={card.buttonLink ? 'button' : 'article'}
        tabIndex={card.buttonLink ? 0 : undefined}
      >
        <div className={styles.cardContent}>
          {card.image && (
            <div className={styles.imageWrapper}>
              <img src={card.image} alt="" className={styles.image} />
            </div>
          )}
          <h3
            className={styles.title}
            style={{
              color: card.titleColor || titleColor,
            }}
          >
            {card.title}
          </h3>
          <p
            className={styles.description}
            style={{
              color: card.textColor || textColor,
            }}
            dangerouslySetInnerHTML={
              typeof card.description === 'string' 
                ? { __html: card.description }
                : { __html: card.description?.blocks?.map(block => block.text).join('\n') || '' }
            }
          />
          {card.buttonText && (
            <button 
              className={styles.cta}
              onClick={(e) => {
                e.stopPropagation()
                handleCardClick(card)
              }}
              style={{
                backgroundColor: card.buttonBackgroundColor || '#0070F3',
                color: card.buttonTextColor || '#FFFFFF'
              }}
            >
              {card.buttonText}
            </button>
          )}
        </div>
      </div>
    )
  }

  const cardElements = cards.map((card, index) => renderCard(card, index))

  return (
    <div className={styles.carouselContainer}>
      <div 
        ref={carouselRef}
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className={styles.carouselStage}>
          {cardElements}
        </div>
      </div>
      <button 
        className={`${styles.navArrow} ${styles.prevArrow}`}
        onClick={handlePrev}
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
  )
}
