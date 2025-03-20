import React from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'black' }) => {
  return (
    <div className="mb-4">
      <h1 className={`text-4xl font-serif italic text-${color}`}>
        Restaurant Kabul
      </h1>
    </div>
  );
};

export default Logo; 