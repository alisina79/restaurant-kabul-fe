import styles from "../css/ChefPage.module.css";
import chefPortrait from "../chef/chef.jpg"; // Executive chef portrait
import chefAtWork from "../chef/exter.jpg"; // Chef at work image
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils, FaStar } from "react-icons/fa";

const Chef = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  // Staggered animation variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: custom * 0.2 
      },
    }),
  };

  // Handle image load to prevent layout shifts
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="chef-page-wrapper" style={{ maxWidth: "100%", overflow: "hidden" }}>
      <motion.div 
        className={`${styles.chefContainer} ${hasAnimated ? styles.fadeIn : ''}`}
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vignette overlay for depth */}
        <div className={styles.vignetteOverlay}></div>
        
        {/* Logo "K" character at the top - animated separately */}
        <motion.div 
          className={styles.logoContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.logoLetter}>K</span>
        </motion.div>

        {/* Main content two-column layout */}
        <div className={styles.mainContent}>
          {/* Left Column: Chef Portrait Image */}
          <motion.div
            className={`${styles.chefImageContainer} ${imageLoaded ? styles.imageLoaded : ''}`}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={chefPortrait}
              alt="Executive Chef Portrait"
              className={styles.chefImage}
              loading="eager" 
              onLoad={handleImageLoad}
            />
          </motion.div>

          {/* Right Column: Chef Info */}
          <div className={styles.chefInfoContainer}>
            {/* Content Wrapper for better organization */}
            <div className={styles.chefContentWrapper}>
              {/* Main heading with star accent */}
              <motion.div
                className={styles.titleWrapper}
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
              >
                <FaStar style={{ color: "#e0c188", marginRight: "8px", fontSize: "16px" }} />
                <h1 className={styles.chefTitle}>MEET OUR EXECUTIVE CHEF</h1>
                <FaStar style={{ color: "#e0c188", marginLeft: "8px", fontSize: "16px" }} />
              </motion.div>

              {/* Subheading */}
              <motion.h2 
                className={styles.chefSubtitle}
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
              >
                Culinary Excellence
              </motion.h2>

              {/* Description */}
              <motion.p 
                className={styles.chefDescription}
                custom={3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
              >
                Get to know the culinary mastermind behind our exceptional dishes. Our Executive Chef brings years of global experience and a passion for innovation to every plate. With a deep commitment to seasonal ingredients and refined techniques, the chef leads our team in delivering an unforgettable dining experience.
              </motion.p>

              {/* CTA Button with enhanced styling */}
              <motion.button
                className={styles.menuButton}
                onClick={() => navigate("/chef-special")}
                custom={4}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUtensils className={styles.icon} /> MEET THE CHEF
              </motion.button>
            </div>
            
            {/* Chef at work image under the button */}
            <motion.div
              className={styles.secondaryImageContainer}
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <img
                src={chefAtWork}
                alt="Chef at Work"
                className={styles.secondaryImage}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chef;
