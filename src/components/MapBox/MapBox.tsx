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
      touchPitch: false,
      cooperativeGestures: true,
      gestureHandling: 'cooperative'
    });

    if (map.current) {
      const isTouchDevice = 'ontouchstart' in window;
      if (isTouchDevice) {
        map.current.touchZoomRotate.disableRotation();
        map.current.dragPan.disable();
        map.current.touchZoomRotate.enable();
      }
    }

    const addMarkers = () => {
      if (!map.current) return;

      const markersToAdd = markers || [];
      
      markersToAdd.forEach((marker) => {
        // Create popup if needed
        let popup: mapboxgl.Popup | null = null;
        if (showPopupOnHover && (marker.title || marker.description)) {
          popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <h3 style="color: ${textColor}; margin: 0 0 5px 0;">${marker.title}</h3>
            ${marker.description ? `<p style="color: ${textColor}; margin: 0;">${marker.description}</p>` : ''}
          `);
        }

        // Add marker to map with default Mapbox styling
        if (map.current) {
          new mapboxgl.Marker({
            color: marker.markerColor || '#FF0000'
          })
            .setLngLat([marker.longitude, marker.latitude])
            .setPopup(popup)
            .addTo(map.current);
        }
      });
    };

    const mapInstance = map.current;
    if (mapInstance) {
      mapInstance.on('load', addMarkers);
    }

    return () => {
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
