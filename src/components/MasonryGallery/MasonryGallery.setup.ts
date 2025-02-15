import { CommonComponentProps } from '@/utils/common-types';

export interface GalleryImage {
  image: string;  // This will be a Builder uploaded image
  alt?: string;
  title?: string;
  description?: string;
}

export interface MasonryGalleryProps extends CommonComponentProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
  maxWidth?: string;
  hoverEffect?: 'zoom' | 'lift' | 'darken' | 'none';
  rounded?: 'none' | 'small' | 'medium' | 'large';
  showCaptions?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}
