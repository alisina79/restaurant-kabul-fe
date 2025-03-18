import React from 'react';
import { ImageContainer, ImageGrid, ImageContent } from './ImageContainer';

interface ImageSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = '',
}) => {
  return (
    <ImageGrid className={className}>
      <ImageContainer src={imageSrc} alt={imageAlt} />
      <ImageContent>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      </ImageContent>
    </ImageGrid>
  );
}; 