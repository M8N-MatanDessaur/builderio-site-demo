import { Builder } from '@builder.io/react';
import { MapBox } from './MapBox';

Builder.registerComponent(MapBox, {
  name: 'MapBox',
  inputs: [
    {
      name: 'markers',
      type: 'list',
      defaultValue: [{
        latitude: 40.7128,
        longitude: -74.0060,
        title: 'New York Office',
        description: 'Our main headquarters',
        markerColor: '#FF0000'
      }],
      subFields: [
        {
          name: 'latitude',
          type: 'number',
          required: true,
          helperText: 'Marker latitude coordinate'
        },
        {
          name: 'longitude',
          type: 'number',
          required: true,
          helperText: 'Marker longitude coordinate'
        },
        {
          name: 'title',
          type: 'string',
          required: true,
          helperText: 'Marker title shown in popup'
        },
        {
          name: 'description',
          type: 'string',
          helperText: 'Optional description shown in popup'
        },
        {
          name: 'markerColor',
          type: 'color',
          defaultValue: '#FF0000',
          helperText: 'Color of the marker'
        }
      ]
    },
    {
      name: 'mapStyle',
      type: 'enum',
      defaultValue: 'light',
      enum: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Streets', value: 'streets' },
        { label: 'Satellite', value: 'satellite' },
        { label: 'Outdoors', value: 'outdoors' }
      ],
      helperText: 'Choose the map theme style'
    },
    {
      name: 'viewStyle',
      type: 'enum',
      defaultValue: 'flat',
      enum: [
        { label: 'Flat (2D)', value: 'flat' },
        { label: 'Tilted Forward', value: 'tilted' },
        { label: 'Tilted Right', value: 'tilted-right' },
        { label: 'Tilted Left', value: 'tilted-left' },
        { label: 'Globe View', value: 'globe' },
        { label: 'Custom', value: 'custom' }
      ],
      helperText: 'Choose the map perspective style'
    },
    {
      name: 'customPitch',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 85,
      helperText: 'Custom pitch angle (0-85 degrees). Only applies when view style is set to Custom.',
      showIf: 'options.get("viewStyle") === "custom"'
    },
    {
      name: 'customBearing',
      type: 'number',
      defaultValue: 0,
      min: -180,
      max: 180,
      helperText: 'Custom bearing angle (-180 to 180 degrees). Only applies when view style is set to Custom.',
      showIf: 'options.get("viewStyle") === "custom"'
    },
    {
      name: 'initialZoom',
      type: 'number',
      defaultValue: 12,
      min: 0,
      max: 20,
      helperText: 'Initial zoom level of the map (0-20)'
    },
    {
      name: 'initialCenter',
      type: 'object',
      defaultValue: { lat: 40.7128, lng: -74.0060 },
      subFields: [
        {
          name: 'lat',
          type: 'number',
          required: true,
          helperText: 'Center latitude'
        },
        {
          name: 'lng',
          type: 'number',
          required: true,
          helperText: 'Center longitude'
        }
      ],
      helperText: 'Initial center coordinates of the map'
    },
    {
      name: 'showPopupOnHover',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show marker information on hover'
    }
  ],
  // Ensure the component can be properly sized in Builder.io
  noWrap: true,
  canHaveChildren: false,
  defaultStyles: {
    height: '400px',
    width: '100%',
    position: 'relative',
    display: 'flex'
  }
});
