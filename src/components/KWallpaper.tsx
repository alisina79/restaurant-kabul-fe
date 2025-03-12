import React from 'react';
import '../css/K-wallpaper.css';

interface KWallpaperProps {
  className?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large' | 'full';
}

const KWallpaper: React.FC<KWallpaperProps> = ({ className = '', style = {}, size = 'full' }) => {
  // Determine size-based styles
  let sizeStyles: React.CSSProperties = {};
  
  switch(size) {
    case 'small':
      sizeStyles = { width: '200px', height: '200px' };
      break;
    case 'medium':
      sizeStyles = { width: '400px', height: '400px' };
      break;
    case 'large':
      sizeStyles = { width: '800px', height: '800px' };
      break;
    case 'full':
    default:
      sizeStyles = { width: '100%', height: '100vh' };
  }

  return (
    <div className={`k-wallpaper ${className}`} style={{ ...sizeStyles, ...style }}>
      {/* Decorative elements */}
      <div className="k-pattern"></div>
      <div className="k-circle k-circle-1"></div>
      <div className="k-circle k-circle-2"></div>
      <div className="k-diagonal-line"></div>
      
      {/* Corner accents */}
      <div className="k-corner k-top-left"></div>
      <div className="k-corner k-top-right"></div>
      <div className="k-corner k-bottom-left"></div>
      <div className="k-corner k-bottom-right"></div>
      
      {/* Main letter */}
      <div className="k-letter">K</div>
    </div>
  );
};

export default KWallpaper; 