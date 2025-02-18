import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBoxProps, defaultProps, MAPBOX_CONFIG, MapStyle, VIEW_STYLES } from './MapBox.setup';

export function MapBox({
  markers = defaultProps.markers!,
  mapStyle = defaultProps.mapStyle as MapStyle,
  viewStyle = defaultProps.viewStyle,
  customPitch = 0,
  customBearing = 0,
  initialZoom = defaultProps.initialZoom,
  initialCenter = defaultProps.initialCenter!,
  showPopupOnHover = defaultProps.showPopupOnHover,
  backgroundColor = defaultProps.backgroundColor,
  textColor = defaultProps.textColor,
}: MapBoxProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  // Clean up markers
  const clearMarkers = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  // Add markers to the map
  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    clearMarkers();

    const markersToAdd = markers || [];
    
    markersToAdd.forEach((markerData) => {
      // Create popup if needed
      let popup: mapboxgl.Popup | null = null;
      if (showPopupOnHover && (markerData.title || markerData.description)) {
        popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <h3 style="color: ${textColor}; margin: 0 0 5px 0;">${markerData.title}</h3>
          ${markerData.description ? `<p style="color: ${textColor}; margin: 0;">${markerData.description}</p>` : ''}
        `);
      }

      // Add marker to map
      const marker = new mapboxgl.Marker({
        color: markerData.markerColor || '#FF0000'
      })
        .setLngLat([markerData.longitude, markerData.latitude])
        .setPopup(popup)
        .addTo(map.current!);

      // Store marker reference for cleanup
      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_CONFIG.apiKey;
    
    const viewConfig = viewStyle === 'custom' 
      ? VIEW_STYLES.custom(customPitch, customBearing)
      : VIEW_STYLES[viewStyle || 'flat'];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_CONFIG.styles[mapStyle],
      center: [initialCenter.lng, initialCenter.lat],
      zoom: initialZoom,
      pitch: viewConfig.pitch,
      bearing: viewConfig.bearing,
      dragRotate: false,
      touchZoomRotate: true,
      touchPitch: false
    });

    // Add markers immediately after map initialization
    map.current.once('style.load', addMarkers);

    if (map.current) {
      const isTouchDevice = 'ontouchstart' in window;
      if (isTouchDevice) {
        // Disable single-finger interactions
        map.current.dragPan.disable();
        
        // Enable two-finger pan and zoom
        map.current.touchZoomRotate.enable();
        map.current.touchZoomRotate.disableRotation();
        
        // Add touch event listeners to enable drag pan only with two fingers
        const container = map.current.getCanvasContainer();
        let touchCount = 0;
        
        const handleTouchStart = (e: TouchEvent) => {
          touchCount = e.touches.length;
          if (touchCount >= 2) {
            map.current?.dragPan.enable();
          }
        };
        
        const handleTouchEnd = () => {
          touchCount = 0;
          map.current?.dragPan.disable();
        };
        
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);
        
        // Clean up event listeners when component unmounts
        return () => {
          container.removeEventListener('touchstart', handleTouchStart);
          container.removeEventListener('touchend', handleTouchEnd);
          map.current?.remove();
        };
      }
    }

    return () => {
      clearMarkers();
      map.current?.remove();
    };
  }, [
    markers,
    mapStyle,
    viewStyle,
    customPitch,
    customBearing,
    initialZoom,
    initialCenter,
    showPopupOnHover,
    textColor
  ]);

  return (
    <div 
      style={{ 
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor,
        // Ensure it fills Builder.io section
        flex: '1 1 auto',
        display: 'flex',
        minHeight: 'inherit',
        maxHeight: 'inherit'
      }}
    >
      <div 
        ref={mapContainer} 
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: '1 1 auto'
        }}
      />
    </div>
  );
}
