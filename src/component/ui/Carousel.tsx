import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../css/OurStory.module.css";

interface CarouselItem {
  text: string;
  author?: string;
  position?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  showIndicators?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlayInterval = 4000,
  showIndicators = true,
  className = "",
  children 
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [items.length, autoPlayInterval]);

  const handleDotClick = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <div className={`${styles.quoteCarousel} ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 1, 0.5, 1]
          }}
          className={styles.quoteCarouselBlockquote}
        >
          <span className={styles.quoteText}>{items[index].text}</span>
          
          {(items[index].author || items[index].position) && (
            <div className={styles.quoteAuthor}>
              {items[index].author && (
                <p className={styles.authorName}>{items[index].author}</p>
              )}
              {items[index].position && (
                <p className={styles.authorPosition}>{items[index].position}</p>
              )}
            </div>
          )}
          
          {children}
        </motion.div>
      </AnimatePresence>
      
      {showIndicators && (
        <div className={styles.carouselDots}>
          {items.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${styles.carouselDot} ${i === index ? styles.active : ''}`}
              whileHover={{ 
                width: i === index ? "2rem" : "1.2rem", 
                backgroundColor: i === index ? "rgb(217 119 6)" : "rgb(217 119 6 / 0.5)" 
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
