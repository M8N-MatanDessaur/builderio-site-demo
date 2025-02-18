import { CommonComponentProps } from '@/utils/common-types';

export type MapStyle = 'light' | 'dark' | 'streets' | 'satellite' | 'outdoors';
export type ViewStyle = 'flat' | 'tilted' | 'tilted-right' | 'tilted-left' | 'globe' | 'custom';

export interface MapMarker {
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
  markerColor?: string;
}

export interface MapBoxProps extends CommonComponentProps {
  markers?: MapMarker[];
  mapStyle?: MapStyle;
  viewStyle?: ViewStyle;
  customPitch?: number;
  customBearing?: number;
  initialZoom?: number;
  initialCenter?: { lat: number; lng: number };
  showPopupOnHover?: boolean;
}

// View style configurations
export const VIEW_STYLES = {
  flat: { pitch: 0, bearing: 0 },
  tilted: { pitch: 45, bearing: 0 },
  'tilted-right': { pitch: 45, bearing: 45 },
  'tilted-left': { pitch: 45, bearing: -45 },
  globe: { pitch: 80, bearing: 0 },
  custom: (pitch: number = 0, bearing: number = 0) => ({ pitch, bearing })
} as const;

// Default markers example
export const defaultMarkers: MapMarker[] = [
  {
    latitude: 40.7128,
    longitude: -74.0060,
    title: "New York Office",
    description: "Our main headquarters",
    markerColor: "#FF0000"
  }
];

// Default props
export const defaultProps: MapBoxProps = {
  markers: defaultMarkers,
  mapStyle: 'light',
  viewStyle: 'flat',
  initialZoom: 12,
  initialCenter: { lat: 40.7128, lng: -74.0060 },
  showPopupOnHover: true,
  backgroundColor: "#ffffff",
  textColor: "#000000"
};

// Mapbox configuration
export const MAPBOX_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
  styles: {
    light: 'mapbox://styles/mapbox/light-v11',
    dark: 'mapbox://styles/mapbox/dark-v11',
    streets: 'mapbox://styles/mapbox/streets-v12',
    satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
    outdoors: 'mapbox://styles/mapbox/outdoors-v12'
  } as const
};
