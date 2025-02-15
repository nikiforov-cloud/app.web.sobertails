import React, { useState, useEffect, useRef } from 'react';
import { LazyImageProps } from './LazyImage.types.ts';

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, style, ...props }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        rootMargin: '100px', // Load the image when it's close to the viewport
      },
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      style={{ opacity: inView ? 1 : 0, transition: 'opacity .3s', ...style }}
      {...props}
    />
  );
};

export default LazyImage;
