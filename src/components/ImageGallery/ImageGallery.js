import React, { useState, useEffect } from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  return (
    <div className={styles.gallery}>
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className={styles.image} />
    </div>
  );
};

export default ImageGallery;
