import { Builder } from '@builder.io/react'

export interface CarouselCard {
  title: string
  description: string | { blocks: any[] }  // Support for rich text content
  image: string
  buttonText?: string
  buttonLink?: string
  backgroundColor?: string
  titleColor?: string
  textColor?: string
  buttonBackgroundColor?: string
  buttonTextColor?: string
}

export interface CircularCarouselProps {
  cards: CarouselCard[]
  autoRotate?: boolean
  rotationInterval?: number
  backgroundColor?: string
  titleColor?: string
  textColor?: string
}

// Re-export the component name to ensure consistency
export const COMPONENT_NAME = 'Circular Carousel'
