import { useJsApiLoader } from '@react-google-maps/api';

// Static libraries array to avoid performance warnings
const libraries = ['places'];

export const useGoogleMaps = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || 'YOUR_API_KEY_HERE',
    libraries: libraries
  });

  return {
    isLoaded,
    loadError,
    apiKey
  };
};
