import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="relative overflow-visible rounded-lg">
      <div className="absolute top-0 left-[30%] w-[40%] h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
      <div className="absolute bottom-0 left-[30%] w-[40%] h-[2px] bg-gradient-to-l from-transparent via-amber-400/40 to-transparent"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="p-5 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-amber-600/70 text-center relative"
        >
          <span className="absolute top-0 left-3 text-5xl text-amber-600/20 font-serif leading-none">"</span>
          <p className="italic text-gray-700 text-lg leading-relaxed font-medium relative z-10">{items[index]}</p>
          <span className="absolute bottom-0 right-3 text-5xl text-amber-600/20 font-serif leading-none">"</span>
          {children}
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-6 gap-2">
        {items.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all ${
              i === index ? "bg-amber-600 w-8" : "bg-amber-300/30 w-3"
            }`}
            whileHover={{ 
              width: i === index ? "2rem" : "1.2rem", 
              backgroundColor: i === index ? "rgb(217 119 6)" : "rgb(217 119 6 / 0.5)" 
            }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
