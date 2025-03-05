'use client'

import { useEffect, useRef } from 'react';
import GalleryConfig from './interfaces/galleryConfigInterface';

declare global {
  interface Window {
    cloudinary: any;
  }
}

const CloudinaryGallery = ({ galleryConfig } : {galleryConfig: GalleryConfig}) => {
  const galleryRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  
  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: cloudName,
          url: {
            secureDistribution: import.meta.env.VITE_CLOUDINARY_URL, // URL segura de Cloudinary
            secure: false, // Usar HTTPS
          },
          ...galleryConfig,
        })
        .render();
    }
  }, [galleryConfig]);

  return (
    <div ref={galleryRef} style={{ width: '100%', margin: 'auto' }}>
      <div>Cargando...</div>
    </div>
  );
};

export default CloudinaryGallery;
