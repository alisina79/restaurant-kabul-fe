import React, { useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Celebration.module.css';

// Import the food image
import foodImage from "/hall.jpg";

export default function Celebration() {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);

  // 3D tilt effect on mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { left, top, width, height } = rect;
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate rotation values based on mouse position
    const rotateY = 10 * (0.5 - x);
    const rotateX = 10 * (y - 0.5);
    
    // Apply the transformations with perspective for 3D effect
    imageRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.05, 1.05, 1.05)
    `;
  }, []);
  
  // Reset transformations when mouse leaves
  const handleMouseLeave = useCallback(() => {
    if (!imageRef.current) return;
    
    // Reset with smooth transition
    imageRef.current.style.transform = 
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" }
    }
  };

  // Button hover animation
  const buttonHoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className={styles.celebrationContainer}>
      {/* Left column - Text content */}
      <motion.div 
        className={styles.textColumn}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main title */}
        <motion.h1 
          className={styles.mainTitle}
          variants={itemVariants}
        >
          CELEBRATIONS
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2 
          className={styles.subtitle}
          variants={itemVariants}
        >
          Celebrate with us.
        </motion.h2>
        
        {/* Content paragraphs */}
        <motion.div 
          className={styles.content}
          variants={itemVariants}
        >
          <p>
            Life is a collection of moments. Let us help you celebrate the meaningful ones with 
            exceptional dining experiences tailored to your special occasions.
          </p>
          <p>
            We offer the perfect setting for your wedding receptions, birthdays, graduations, and 
            personal milestones. Our intimate private dining rooms accommodate small gatherings, 
            while full restaurant bookings are available for larger celebrations of up to 120 guests.
          </p>
          <p>
            Our team delights in meeting your custom requests—from celebration cakes and floral arrangements 
            to personalized menus. Enhance your event with pre-ordered champagne, signed menus, or 
            cookbooks as unique mementos.
          </p>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          className={styles.buttonContainer}
          variants={itemVariants}
        >
          <div className={styles.buttonRow}>
            <motion.button 
              className={styles.button}
              onClick={() => navigate('/reservations')}
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              MAKE A BOOKING
            </motion.button>
            <motion.button 
              className={styles.button}
              onClick={() => navigate('/contact')}
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              TALK TO OUR TEAM
            </motion.button>
          </div>
          
          <div className={styles.fullWidthButtonContainer}>
            <motion.button 
              className={`${styles.button} ${styles.fullWidthButton}`}
              onClick={() => navigate('/private-dining')}
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              PRIVATE DINING ENQUIRY
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right column - Food image */}
      <motion.div 
        className={styles.imageColumn}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.img 
          ref={imageRef}
          src={foodImage} 
          alt="Elegant dining hall setup for celebrations" 
          className={styles.foodImage}
          variants={imageVariants}
          loading="eager"
        />
        <div className={styles.imageOverlay}></div>
      </motion.div>
    </div>
  );
}
