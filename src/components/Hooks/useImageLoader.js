import { useState, useEffect } from 'react';
import { convertImageToBase64 } from '../Data/imageUtils';

export const useImageLoader = (places) => {
  const [base64Images, setBase64Images] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      if (!places || places.length === 0) {
        setIsLoading(false);
        return;
      }

      try {
        const imagePromises = places.map(async (place) => {
          const base64 = await convertImageToBase64(place.photo);
          return { id: place.id, base64 };
        });
        
        const images = await Promise.all(imagePromises);
        const imagesMap = {};
        images.forEach(img => {
          imagesMap[img.id] = img.base64;
        });
        
        setBase64Images(imagesMap);
        console.log('All images preloaded:', Object.keys(imagesMap));
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [places]);

  return { base64Images, isLoading };
};
