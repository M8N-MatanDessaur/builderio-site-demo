import { useEffect, useRef, useState } from 'react';
import styles from './MasonryGallery.module.css';
import { MasonryGalleryProps, GalleryImage } from './MasonryGallery.setup';
import Image from 'next/image';

export default function MasonryGallery({
  images = [],
  columns = 3,
  gap = 16,
  maxWidth = '1200px',
  hoverEffect = 'zoom',
  rounded = 'medium',
  showCaptions = true,
  backgroundColor = 'transparent',
  textColor = '#000000',
  accentColor = 'var(--accent)',
  className = ''
}: MasonryGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [imageElements, setImageElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setLoading(true);
    const elements = images.map((image, index) => (
      <div
        key={index}
        className={`${styles.imageContainer} ${getHoverClass()}`}
      >
        <div className={`${styles.imageWrapper} ${getRoundedClass()}`}>
          {image.image ? (
            <Image
              src={image.image}
              alt={image.alt || ''}
              width={500}
              height={500}
              className={styles.image}
              onLoad={() => {
                if (index === images.length - 1) {
                  setLoading(false);
                }
              }}
            />
          ) : (
            <div className={styles.placeholder}>
              <span>Image {index + 1}</span>
            </div>
          )}
          {showCaptions && (image.title || image.description) && (
            <div className={styles.caption}>
              {image.title && <h3>{image.title}</h3>}
              {image.description && <p>{image.description}</p>}
            </div>
          )}
        </div>
      </div>
    ));

    setImageElements(elements);
  }, [images, hoverEffect, rounded, showCaptions]);

  const containerStyle = {
    maxWidth,
    backgroundColor,
    color: textColor,
    '--columns': columns,
    '--gap': `${gap}px`,
    '--accent': accentColor,
  } as React.CSSProperties;

  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'zoom':
        return styles.hoverZoom;
      case 'lift':
        return styles.hoverLift;
      case 'darken':
        return styles.hoverDarken;
      default:
        return '';
    }
  };

  const getRoundedClass = () => {
    switch (rounded) {
      case 'small':
        return styles.roundedSmall;
      case 'medium':
        return styles.roundedMedium;
      case 'large':
        return styles.roundedLarge;
      default:
        return '';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.galleryContainer} ${className}`}
      style={containerStyle}
    >
      <div className={styles.masonryGrid}>
        {imageElements}
      </div>
    </div>
  );
}
