import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import styles from '../css/Seasonal.module.css';

// Import pattern
import patternBg from '../assets/patterns/elegant-container-bg.svg';

// Import images from public folder
const mainImage = '/dish.jpg';
const bottomImage = '/new.jpg';

const Seasonal: React.FC = () => {
  // Testimonials data
  const testimonials = [
    { 
      id: 1, 
      text: "The food is as beautiful as the setting - seasonal ingredients treated with respect and flair." 
    },
    { 
      id: 2, 
      text: "Our dining experience was exceptional. The seasonal menu truly showcases the best flavors of each season." 
    },
    { 
      id: 3, 
      text: "The attention to detail and quality of ingredients make this restaurant a standout culinary destination." 
    }
  ];

  // State for active testimonial
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Create refs for scroll animation triggers
  const leftColumnRef = useRef(null);
  const rightContentRef = useRef(null);
  const sectionHeaderRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const carouselRef = useRef(null);
  const bottomImageRef = useRef(null);
  
  // Set up inView hooks for each section with better thresholds
  const leftColumnInView = useInView(leftColumnRef, { once: true, amount: 0.3, margin: "0px 0px -50px 0px" });
  const rightContentInView = useInView(rightContentRef, { once: true, amount: 0.3, margin: "0px 0px -50px 0px" });
  const bottomImageInView = useInView(bottomImageRef, { once: true, amount: 0.3, margin: "0px 0px -50px 0px" });
  
  // Animation controls - consolidated to fewer controllers
  const leftColumnControls = useAnimation();
  const rightContentControls = useAnimation();
  const bottomImageControls = useAnimation();
  
  // Consolidated animation triggers for better performance and synchronization
  useEffect(() => {
    // Handle left column animations
    if (leftColumnInView) {
      leftColumnControls.start("visible");
    }
    
    // Handle right content animations
    if (rightContentInView) {
      rightContentControls.start("visible");
    }
    
    // Handle bottom image animations
    if (bottomImageInView) {
      bottomImageControls.start("visible");
    }
  }, [
    leftColumnInView, leftColumnControls,
    rightContentInView, rightContentControls, 
    bottomImageInView, bottomImageControls
  ]);
  
  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
  };

  // Animation variants with consistent timing and easing
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        staggerChildren: 0.1, // Reduced stagger for smoother sequence
        ease: [0.25, 1, 0.5, 1],
        when: "beforeChildren" // Ensures parent animates before children
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y for subtler animation
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, // Consistent timing with container
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y for subtler animation
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Consistent timing
        ease: [0.25, 1, 0.5, 1]
      }
    },
    enter: { opacity: 0, y: 10 }, // Reduced y for subtler animation
    center: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, // Reduced y for subtler animation
      transition: { 
        duration: 0.5, 
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 }, // Reduced scale and y for subtler animation
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7, // Consistent timing with other elements
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div className={styles.seasonalPageWrapper}>
      {/* Background pattern */}
      <div className={styles.patternBackground} style={{ backgroundImage: `url(${patternBg})` }}></div>
      
      <div className={styles.container}>
        <motion.div 
          ref={leftColumnRef}
          className={styles.left}
          initial="hidden"
          animate={leftColumnControls}
          variants={containerVariants}
        >
          <motion.div 
            className={styles.imageContainer}
            variants={imageVariants}
          >
            <motion.img 
              src={mainImage} 
              alt="Seasonal dish presentation" 
              className={styles.topImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        <div className={styles.right} ref={rightContentRef}>
          <motion.div 
            className={styles.content}
            initial="hidden"
            animate={rightContentControls}
            variants={containerVariants}
          >
            <motion.div 
              ref={sectionHeaderRef}
              className={styles.sectionHeader}
              variants={itemVariants}
            >
              <h3 className={styles.sectionLabel}>Seasonal Fresh</h3>
              <div className={styles.separator}></div>
            </motion.div>
            
            <motion.h2 
              ref={subtitleRef}
              className={styles.subtitle}
              variants={itemVariants}
            >
              Only the very best ingredients
            </motion.h2>
            
            <motion.p 
              ref={descriptionRef}
              className={styles.description}
              variants={itemVariants}
            >
              Our menus at Restaurant Kabul celebrate only the best in produce of the season. With frequently changing menus our Chef continues to adapt our offering to ensure we only serve our guests the very best.
            </motion.p>
            
            <motion.div
              ref={buttonRef}
              variants={itemVariants}
            >
              <Link to="/menu" className={styles.buttonLink}>
                <button className={styles.button}>Menus</button>
              </Link>
            </motion.div>
          
            <motion.div 
              ref={carouselRef}
              className={styles.carousel}
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  className={styles.quote}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={testimonialVariants}
                >
                  <p className={styles.quoteText}>"{testimonials[activeTestimonial].text}"</p>
                </motion.div>
              </AnimatePresence>
              
              <div className={styles.dots}>
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`${styles.dot} ${index === activeTestimonial ? styles.active : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={bottomImageRef}
            className={styles.bottomImageWrapper}
            initial="hidden"
            animate={bottomImageControls}
            variants={imageVariants}
          >
            <motion.div 
              className={styles.bottomImageContainer}
              whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={bottomImage} 
                alt="Seasonal dish highlight" 
                className={styles.bottomImage}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Seasonal;
