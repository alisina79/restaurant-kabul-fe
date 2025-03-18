import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import styles from "../css/Seasonal.module.css";
import { Carousel } from "../component/ui";

// Import pattern
import patternBg from "../assets/patterns/elegant-container-bg.svg";

// Import images from public folder
const mainImage = "/dish.jpg";
const bottomImage = "/new.jpg";

const Seasonal: React.FC = () => {
  // Track window size for responsive animations
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width when resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "The food is as beautiful as the setting - seasonal ingredients treated with respect and flair.",
      author: "Food & Travel Magazine",
      position: "Featured Review"
    },
    {
      id: 2,
      text: "Our dining experience was exceptional. The seasonal menu truly showcases the best flavors of each season.",
      author: "Michelin Guide",
      position: "Restaurant Review"
    },
    {
      id: 3,
      text: "The attention to detail and quality of ingredients make this restaurant a standout culinary destination.",
      author: "Culinary Expert",
      position: "Featured Review"
    },
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

  // Adjust threshold based on screen size
  const viewportMargin =
    windowWidth <= 768 ? "0px 0px -30px 0px" : "0px 0px -50px 0px";
  const viewportAmount = windowWidth <= 480 ? 0.2 : 0.3;

  // Set up inView hooks for each section with better thresholds
  const leftColumnInView = useInView(leftColumnRef, {
    once: true,
    amount: viewportAmount,
    margin: viewportMargin,
  });
  const rightContentInView = useInView(rightContentRef, {
    once: true,
    amount: viewportAmount,
    margin: viewportMargin,
  });
  const bottomImageInView = useInView(bottomImageRef, {
    once: true,
    amount: viewportAmount,
    margin: viewportMargin,
  });

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
    leftColumnInView,
    leftColumnControls,
    rightContentInView,
    rightContentControls,
    bottomImageInView,
    bottomImageControls,
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

  // Adjust animation distance based on screen size
  const getAnimationDistance = () => {
    if (windowWidth <= 480) return 15;
    if (windowWidth <= 768) return 20;
    if (windowWidth <= 1200) return 25;
    return 30;
  };

  // Adjust animation timing based on screen size
  const getAnimationDuration = () => {
    return windowWidth <= 768 ? 0.6 : 0.7;
  };

  // Animation variants with consistent timing and easing
  const containerVariants = {
    hidden: { opacity: 0, y: getAnimationDistance() },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(),
        staggerChildren: windowWidth <= 768 ? 0.08 : 0.1, // Faster stagger on mobile
        ease: [0.25, 1, 0.5, 1],
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: getAnimationDistance() * 0.7 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(),
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(),
        ease: [0.25, 1, 0.5, 1],
      },
    },
    enter: { opacity: 0, y: windowWidth <= 480 ? 8 : 10 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: windowWidth <= 768 ? 0.4 : 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      y: windowWidth <= 480 ? -8 : -10,
      transition: {
        duration: windowWidth <= 768 ? 0.4 : 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: getAnimationDistance() * 1.1,
      scale: windowWidth <= 768 ? 0.99 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: getAnimationDuration() * 1.1, // Slightly longer for images
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-playfair">
      {/* Background pattern */}
      <div
        className={styles.patternBackground}
        style={{ backgroundImage: `url(${patternBg})` }}
      ></div>

      <div className="flex bg-[#ac8d5b] max-h-[700px] relative z-10 overflow-hidden justify-around">
        <motion.div
          ref={leftColumnRef}
          className="w-[47%] h-full flex items-center justify-center p-0"
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
              whileHover={{ scale: windowWidth <= 768 ? 1.03 : 1.05 }}
              transition={{ duration: windowWidth <= 768 ? 0.4 : 0.5 }}
            />
          </motion.div>
        </motion.div>

        <div className="w-[50%] h-full flex flex-col justify-between text-white overflow-hidden" ref={rightContentRef}>
          <motion.div
            className="mb-8 flex flex-col justify-center"
            initial="hidden"
            animate={rightContentControls}
            variants={containerVariants}
          >
            <motion.div
              ref={sectionHeaderRef}
              className="mb-5"
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
              Our menus at Restaurant Kabul celebrate only the best in produce
              of the season. With frequently changing menus our Chef continues
              to adapt our offering to ensure we only serve our guests the very
              best.
            </motion.p>

            <motion.div
              ref={buttonRef}
              variants={itemVariants}
              className="flex justify-center"
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
              <Carousel 
                items={testimonials}
                autoPlayInterval={6000}
                className={styles.quote}
              />
            </motion.div>

            <motion.div
              ref={bottomImageRef}
              className="w-full flex justify-end items-center mt-4"
              initial="hidden"
              animate={bottomImageControls}
              variants={containerVariants}
            >
              <motion.div
                className={`${styles.bottomImageContainer} w-[80%]`}
                whileHover={{
                  boxShadow:
                    windowWidth <= 768
                      ? "0 15px 30px rgba(0, 0, 0, 0.25)"
                      : "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: windowWidth <= 768 ? 0.3 : 0.4 }}
              >
                <motion.img
                  src={bottomImage}
                  alt="Seasonal dish highlight"
                  className={styles.bottomImage}
                  whileHover={{ scale: windowWidth <= 768 ? 1.03 : 1.05 }}
                  transition={{ duration: windowWidth <= 768 ? 0.4 : 0.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Seasonal;
