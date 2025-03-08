import React, { useState, useEffect } from "react";

interface CarouselProps {
  children?: React.ReactNode;
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ children, items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <p className="italic text-gray-700">{items[index]}</p>
      {children}
    </div>
  );
};

export default Carousel;
