// Common style-related types
export interface CommonStyleProps {
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

// Common SEO and accessibility props
export interface SeoProps {
  title?: string;
  description?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

// Common text-related types
export interface TextContent extends SeoProps {
  text: string;
  color: string;
}

export interface RichTextContent extends TextContent {}

// Common button type
export interface Button extends SeoProps {
  buttonText: string;
  url: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  ariaLabel?: string;
  title?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

// Common image type
export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  title?: string;
}

// Common background type
export interface Background {
  image?: Image;
  imagePosition?: string;
  color?: string;
}

// Common section props for semantic HTML
export interface SectionProps extends SeoProps {
  id?: string;
  role?: string;
}

// Common props shared between components
export interface CommonComponentProps extends CommonStyleProps, SectionProps {
  className?: string;
}
