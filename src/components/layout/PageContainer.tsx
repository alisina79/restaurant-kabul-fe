import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 ${className}`}>
      {children}
    </div>
  );
};

export const Section: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
};

export const ContentBlock: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {children}
    </div>
  );
}; 