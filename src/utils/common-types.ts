// Common style-related types
export interface CommonStyleProps {
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

// Common text-related types
export interface TextContent {
  text: string;
  color: string;
}

export interface RichTextContent extends TextContent {}

// Common button type
export interface Button {
  buttonText: string;
  url: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

// Common background type
export interface Background {
  image?: string;
  imagePosition?: string;
  color?: string;
}

// Common props shared between components
export interface CommonComponentProps extends CommonStyleProps {
  className?: string;
}
