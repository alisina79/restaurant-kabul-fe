import React, { useState, useEffect } from 'react';

interface TestimonialItem {
  boldText: string;
  regularText: string;
  attribution: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="my-8 px-4 py-6 text-center">
      <blockquote className="italic text-gray-900 text-lg">
        <span className="font-bold">{testimonials[currentIndex].boldText}</span>
        {testimonials[currentIndex].regularText}
      </blockquote>
      <p className="mt-2 text-sm text-gray-800">
        {testimonials[currentIndex].attribution}
      </p>
    </div>
  );
}; 