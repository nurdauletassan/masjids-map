import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

// Import our components
import { mockPlaces, calculateMapCenter } from '../Data/mockPlaces';
import { useGoogleMaps } from '../Hooks/useGoogleMaps';
import { useImageLoader } from '../Hooks/useImageLoader';
import { createCustomIcon } from '../Markers/MarkerIcon';
import { createClusterRenderer } from '../Markers/MarkerClusterer';

import LoadingSpinner from '../UI/LoadingSpinner';
import PlaceBottomSheet from '../Silk/PlaceBottomSheet';

// Map styles and options
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const mapOptions = {
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ],
  // Скрываем все элементы управления картой
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  zoomControl: false,
  gestureHandling: 'cooperative',
  // Дополнительные настройки для скрытия элементов управления
  disableDefaultUI: true,
  clickableIcons: false
};

const GoogleMapsMapRefactored = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [markersLoaded, setMarkersLoaded] = useState(false);
  const [markers, setMarkers] = useState([]);
  
  const mapRef = useRef(null);
  const clustererRef = useRef(null);

  // Use our custom hooks
  const { isLoaded, loadError, apiKey } = useGoogleMaps();
  const { base64Images, isLoading: imagesLoading } = useImageLoader(mockPlaces);

  // Calculate center
  const center = calculateMapCenter(mockPlaces);

  // Debug logging
  console.log('API Key loaded:', apiKey ? 'Yes' : 'No');
  console.log('API Key starts with:', apiKey ? apiKey.substring(0, 10) + '...' : 'No key');
  console.log('Mock places:', mockPlaces);
  console.log('Center:', center);
  console.log('Map loaded:', isLoaded);
  console.log('Load error:', loadError);

  // Map load callback
  const onLoad = useCallback((map) => {
    console.log('Map loaded successfully');
    mapRef.current = map;
    setMap(map);
    
    // Set markers as loaded after a delay to ensure images are ready
    setTimeout(() => {
      setMarkersLoaded(true);
      console.log('Markers should now be loaded');
    }, 500);
  }, []);

  // Map unmount callback
  const onUnmount = useCallback(() => {
    console.log('Map unmounted');
    mapRef.current = null;
    setMap(null);
    setMarkersLoaded(false);
    if (clustererRef.current) {
      clustererRef.current.clearMarkers();
      clustererRef.current = null;
    }
  }, []);

  // Initialize clustering when map and markers are ready
  useEffect(() => {
    if (isLoaded && map && markersLoaded && Object.keys(base64Images).length > 0) {
      console.log('Creating markers and initializing clusterer');
      
      // Clear existing markers and clusterer
      if (clustererRef.current) {
        clustererRef.current.clearMarkers();
      }
      setMarkers([]);
      
      // Create markers with preloaded images
      const newMarkers = mockPlaces.map((place) => {
        console.log('Creating marker for:', place.name, 'at:', place.lat, place.lng);
        const base64Image = base64Images[place.id];
        console.log('Base64 image for place', place.id, ':', base64Image ? 'Loaded' : 'Not loaded');
        
        // Use base64 image if available, otherwise use original photo URL
        const imageSource = base64Image || place.photo;
        const customIcon = createCustomIcon(imageSource, place.name);
        
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          icon: customIcon,
          map: map,
          title: place.name
        });
        
        // Store place data in marker for cluster rendering
        marker.placeData = place;
        
        // Add click listener
        marker.addListener('click', () => handleMarkerClick(place));
        
        return marker;
      });
      
      setMarkers(newMarkers);
      
      // Create clusterer with correct API
      clustererRef.current = new MarkerClusterer({
        map,
        markers: newMarkers,
        renderer: createClusterRenderer(base64Images)
      });
    }
  }, [isLoaded, map, markersLoaded, base64Images]);

  // Handle marker click
  const handleMarkerClick = (place) => {
    console.log('Marker clicked:', place.name);
    setSelectedPlace(place);
    setBottomSheetOpen(true);
  };

  // Handle bottom sheet close
  const handleBottomSheetClose = (open) => {
    setBottomSheetOpen(open);
    if (!open) {
      setSelectedPlace(null);
    }
  };

  // Error state
  if (loadError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Error loading map
          </h2>
          <p className="text-gray-600">
            Please check your internet connection and try again.
          </p>
          <p className="text-sm text-red-600 mt-2">
            Error: {loadError.message}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            API Key: {apiKey ? 'Present' : 'Missing'}
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (!isLoaded || imagesLoading) {
    return <LoadingSpinner apiKey={apiKey} />;
  }

  return (
    <div className="relative w-full h-screen">
      {/* Map Container */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={mapOptions}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Markers are created in useEffect and clustered automatically */}
      </GoogleMap>
      
   
      
   
      
      {/* Place Bottom Sheet */}
      <PlaceBottomSheet 
        place={selectedPlace}
        isOpen={bottomSheetOpen}
        onClose={handleBottomSheetClose}
      />
    </div>
  );
};

export default GoogleMapsMapRefactored;
