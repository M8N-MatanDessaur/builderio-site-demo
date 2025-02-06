import React, { useState } from 'react';
import styles from './TestimonialGrid.module.css';
import { useInView } from '../../hooks/useInView';

interface Testimonial {
  title: string;
  text: string;
  author: string;
  rating: number;
  imageUrl?: string;
}

interface TestimonialGridProps {
  testimonials?: Testimonial[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
  className?: string;
}

const StarIcon = () => (
  <svg className={styles.star} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const defaultTestimonials: Testimonial[] = [
  {
    title: "Life-changing Platform",
    text: "This platform has completely transformed how we operate. The efficiency gains have been remarkable, and our team couldn't be happier with the results.",
    author: "Sarah Johnson",
    rating: 5,
    imageUrl: "/testimonials/sarah.jpg"
  },
  {
    title: "Outstanding Support",
    text: "The customer support team has been exceptional. They've gone above and beyond to help us implement the solution effectively.",
    author: "Michael Chen",
    rating: 5,
    imageUrl: "/testimonials/michael.jpg"
  },
  {
    title: "Game Changer",
    text: "We've seen a 200% increase in productivity since implementing this solution. The interface is intuitive and the features are exactly what we needed.",
    author: "Emily Rodriguez",
    rating: 5,
    imageUrl: "/testimonials/emily.jpg"
  },
  {
    title: "Best Decision Ever",
    text: "After evaluating multiple options, we're so glad we chose this platform. It's been instrumental in our growth over the past year.",
    author: "David Smith",
    rating: 5,
    imageUrl: "/testimonials/david.jpg"
  },
  {
    title: "Exceeded Expectations",
    text: "The platform has exceeded our expectations in every way. The automated workflows have saved us countless hours.",
    author: "Lisa Thompson",
    rating: 5,
    imageUrl: "/testimonials/lisa.jpg"
  },
  {
    title: "Incredible ROI",
    text: "The return on investment has been incredible. We've been able to scale our operations without increasing headcount.",
    author: "James Wilson",
    rating: 5,
    imageUrl: "/testimonials/james.jpg"
  }
];

export function TestimonialGrid({
  testimonials = defaultTestimonials,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  accentColor = '#007AFF',
  title = 'What Our Clients Say',
  subtitle = 'Trusted by thousands of satisfied customers worldwide',
  itemsPerPage = 6,
  className = ''
}: TestimonialGridProps) {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const hasMore = testimonials.length > visibleItems;
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(0, visibleItems);

  // Split testimonials into three columns for masonry layout
  const columns = [[], [], []] as Testimonial[][];
  visibleTestimonials.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial);
  });

  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + itemsPerPage, testimonials.length));
  };

  return (
    <section 
      className={`${styles.container} ${className}`}
      style={{ backgroundColor }}
    >
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`${styles.header} ${headerInView ? styles.visible : ''}`}
      >
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
      
      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={`${styles.grid} ${gridInView ? styles.visible : ''}`}
      >
        {columns.map((columnTestimonials, columnIndex) => (
          <div 
            key={columnIndex} 
            className={styles.column}
          >
            {columnTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={styles.testimonial}
                style={{ '--delay': `${(columnIndex * columns[0].length + index) * 0.1}s` } as React.CSSProperties}
              >
                <div className={styles.content}>
                  <div className={styles.rating} style={{ color: accentColor }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <h3 className={styles.testimonialTitle} style={{ color: textColor }}>
                    {testimonial.title}
                  </h3>
                  <p className={styles.testimonialText} style={{ color: textColor }}>
                    {testimonial.text}
                  </p>
                  <div className={styles.author}>
                    {testimonial.imageUrl && (
                      <div 
                        className={styles.authorImage}
                        style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
                      />
                    )}
                    <span className={styles.authorName} style={{ color: textColor }}>
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <button 
            className={styles.loadMoreBtn}
            onClick={handleLoadMore}
            style={{ color: accentColor }}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
