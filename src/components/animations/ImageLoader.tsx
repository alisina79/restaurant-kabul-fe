import React from 'react';
import { motion } from 'framer-motion';

interface ImageLoaderProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ className = '', size = 'medium' }) => {
  const getAspectRatio = () => {
    switch (size) {
      case 'large':
        return 'aspect-[16/9]';
      case 'medium':
        return 'aspect-[3/4]';
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${getAspectRatio()} ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#ac8d5b] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default ImageLoader; 