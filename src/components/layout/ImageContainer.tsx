import React from 'react';

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-in-out"
      />
    </div>
  );
};

export const ImageGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
};

export const ImageContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col justify-center space-y-6 p-6 sm:p-8 lg:p-12 ${className}`}>
      {children}
    </div>
  );
}; 