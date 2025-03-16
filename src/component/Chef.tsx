import styles from "../css/ChefSpecial.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import Rest from "../assets/Rest.jpg"; // Using an appropriate image from the assets folder
import { useState, useEffect, useRef } from "react";

const Chef = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Create refs for scroll animation triggers
  const textColumnRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const testimonialSectionRef = useRef(null);
  const imageColumnRef = useRef(null);
  
  // Set up inView hooks for each section
  const textColumnInView = useInView(textColumnRef, { once: true, amount: 0.2, margin: "0px 0px -100px 0px" });
  const headingInView = useInView(headingRef, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" });
  const buttonsInView = useInView(buttonsRef, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" });
  const testimonialInView = useInView(testimonialSectionRef, { once: true, amount: 0.3, margin: "0px 0px -100px 0px" });
  const imageInView = useInView(imageColumnRef, { once: true, amount: 0.2, margin: "0px 0px -100px 0px" });
  
  // Animation controls
  const textColumnControls = useAnimation();
  const headingControls = useAnimation();
  const buttonsControls = useAnimation();
  const testimonialControls = useAnimation();
  const imageControls = useAnimation();
  
  // Trigger animations when elements come into view
  useEffect(() => {
    if (textColumnInView) {
      textColumnControls.start("visible");
    }
  }, [textColumnInView, textColumnControls]);
  
  useEffect(() => {
    if (headingInView) {
      headingControls.start("visible");
    }
  }, [headingInView, headingControls]);
  
  useEffect(() => {
    if (buttonsInView) {
      buttonsControls.start("visible");
    }
  }, [buttonsInView, buttonsControls]);
  
  useEffect(() => {
    if (testimonialInView) {
      testimonialControls.start("visible");
    }
  }, [testimonialInView, testimonialControls]);
  
  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageInView, imageControls]);

  // Testimonial data
  const testimonials = [
    {
      boldText: "Unlike many City restaurants,",
      regularText: " La Chapelle is a great bet on the weekend.",
      attribution: "– Great British Chefs"
    },
    {
      boldText: "The epitome of fine dining,",
      regularText: " with exceptional service and stunning surroundings.",
      attribution: "– Food & Travel Magazine"
    },
    {
      boldText: "A true culinary masterpiece,",
      regularText: " where every dish tells a story of tradition and innovation.",
      attribution: "– Gourmet Today"
    }
  ];

  // Set up autoplay for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  // Animation variants with fade-in-up effect for scrolling
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2,
        ease: [0.25, 1, 0.5, 1] // Matching cubic-bezier(0.25, 1, 0.5, 1)
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 1, 0.5, 1] // Matching cubic-bezier(0.25, 1, 0.5, 1)
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    enter: { opacity: 0, x: 20 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1
      }
    }
  };

  const singleDotVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  // Function to navigate directly to a specific testimonial
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className={styles.chefSpecialContainer}>
      {/* The background texture is applied via CSS */}
      
      {/* Left Column - Text Content */}
      <motion.div 
        ref={textColumnRef}
        className={styles.textColumn}
        initial="hidden"
        animate={textColumnControls}
        variants={containerVariants}
      >
        <motion.div className={styles.contentWrapper} variants={containerVariants}>
          {/* Main Heading */}
          <motion.h1 
            ref={headingRef}
            className={styles.mainHeading} 
            initial="hidden"
            animate={headingControls}
            variants={itemVariants}
          >
            Large arched windows, high stone ceilings and elegant interiors provide the perfect backdrop to Michelin starred Galvin La Chapelle's traditional yet modern French menu, moments away from Liverpool Street station.
          </motion.h1>
          
          {/* Buttons with enhanced hover animations */}
          <motion.div 
            ref={buttonsRef}
            className={styles.buttonContainer} 
            initial="hidden"
            animate={buttonsControls}
            variants={containerVariants}
          >
            <motion.button 
              className={`${styles.actionButton} ${styles.bookButton}`}
              onClick={() => navigate("/reservation")}
              whileHover={{ 
                y: -3, 
                boxShadow: "0 10px 20px rgba(172, 141, 91, 0.2)" 
              }}
              whileTap={{ 
                y: -1,
                boxShadow: "0 5px 10px rgba(172, 141, 91, 0.15)"
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              variants={itemVariants}
            >
              BOOK A TABLE
            </motion.button>
            <motion.button 
              className={`${styles.actionButton} ${styles.menuButton}`}
              onClick={() => navigate("/menu")}
              whileHover={{ 
                y: -3, 
                boxShadow: "0 10px 20px rgba(172, 141, 91, 0.2)"
              }}
              whileTap={{ 
                y: -1,
                boxShadow: "0 5px 10px rgba(172, 141, 91, 0.15)"
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              variants={itemVariants}
            >
              MENUS
            </motion.button>
          </motion.div>
          
          {/* Testimonial Carousel Section - Auto-swiping without navigation arrows */}
          <motion.div 
            ref={testimonialSectionRef}
            className={styles.testimonialSection} 
            initial="hidden"
            animate={testimonialControls}
            variants={containerVariants}
          >
            <div className={styles.testimonialCarousel}>
              {/* Current Testimonial */}
              <motion.div
                key={currentTestimonial}
                initial="enter"
                animate="center"
                exit="exit"
                variants={testimonialVariants}
                className={styles.testimonialContent}
              >
                {/* Quote icon moved inside the content, positioned via CSS */}
                <motion.div variants={itemVariants}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                </motion.div>
                
                <motion.p className={styles.testimonialText} variants={itemVariants}>
                  <span className={styles.testimonialBold}>
                    {testimonials[currentTestimonial].boldText}
                  </span>
                  <span className={styles.testimonialRegular}>
                    {testimonials[currentTestimonial].regularText}
                  </span>
                </motion.p>
                <motion.p className={styles.testimonialAttribution} variants={itemVariants}>
                  {testimonials[currentTestimonial].attribution}
                </motion.p>
              </motion.div>
              
              {/* Carousel Indicator Dots Only */}
              <motion.div 
                className={styles.carouselIndicatorContainer}
                variants={dotVariants}
              >
                <motion.div className={styles.carouselIndicator} variants={dotVariants}>
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      variants={singleDotVariant}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Right Column - Image */}
      <motion.div 
        ref={imageColumnRef}
        className={styles.imageColumn} 
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        whileHover={{ 
          transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
        }}
      >
        {/* Background image with gradient overlay */}
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${Rest})` }}></div>
        <div className={styles.overlay}></div>
        
        {/* Decorative corner elements - now hidden via CSS */}
        <div className={styles.cornerTL}></div>
        <div className={styles.cornerBR}></div>
      </motion.div>
    </div>
  );
};

export default Chef;
