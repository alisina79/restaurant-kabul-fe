import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from '../css/PrivateDining.module.css';

// Import the image
import privateRoom from "../assets/Rest.jpg";

export default function PrivateDining() {
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
    <div className={styles.privateDiningContainer}>
      {/* Left column - Image */}
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
          src={privateRoom} 
          alt="Private dining room" 
          className={styles.foodImage}
          variants={imageVariants}
          loading="eager"
        />
        <div className={styles.imageOverlay}></div>
      </motion.div>
      
      {/* Right column - Text content */}
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
          PRIVATE DINING
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2 
          className={styles.subtitle}
          variants={itemVariants}
        >
          Unforgettable Experiences
        </motion.h2>
        
        {/* Content paragraphs */}
        <motion.div 
          className={styles.content}
          variants={itemVariants}
        >
          <p>
            Experience the perfect blend of authentic Afghan cuisine and modern elegance in an ambiance
            designed for comfort and charm. Every dish tells a story—crafted with time-honored recipes
            and premium ingredients.
          </p>
          <p>
            Immerse yourself in the warm, inviting atmosphere where rich flavors, exquisite presentation,
            and impeccable service come together to create an unforgettable dining experience.
          </p>
          <p>
            Our private dining rooms can accommodate intimate gatherings of 8-16 guests, 
            while our exclusive spaces can host larger parties of up to 50 people for a more grand celebration.
          </p>
        </motion.div>
        
        {/* Single Button */}
        <motion.div 
          className={styles.buttonContainer}
          variants={itemVariants}
        >
          <motion.button 
            className={styles.button}
            onClick={() => navigate('/private-dining')}
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            PRIVATE DINING
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
