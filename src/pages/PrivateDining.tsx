import { useNavigate } from "react-router";
import { motion, useInView } from "framer-motion"; // Import motion for animations
import styles from "../css/PrivateDining.module.css";
import privateRoom from "../assets/Rest.jpg"; // Using an existing image from assets
import secondaryImage from "../assets/Aash.jpg"; // Adding secondary image for text section
import { useRef } from "react";

export default function PrivateDining() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // Variants for staggered fade-in animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div style={{ width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
      <div className={styles.spacer}></div> {/* Add spacer for top margin */}
      <motion.section
        className={styles.container}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* IMAGE SECTION WITH STAGGERED FADE-IN */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -50, scale: 0.9 }
          }
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, filter: "brightness(1.05)" }}
        >
          <div className={styles.imageFrame}>
            <motion.img
              src={privateRoom}
              alt="Private Dining Room"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* TEXT SECTION WITH STAGGERED ANIMATION */}
        <motion.div 
          className={styles.textSection} 
          variants={containerVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div className={styles.textBox} variants={containerVariants}>
            <div className={styles.textContent}>
              <motion.span className={styles.monogram} variants={itemVariants}>K</motion.span>
              <motion.h1 className={styles.mainHeading} variants={itemVariants}>PRIVATE DINING AT KALVIN RESTAURANTS</motion.h1>
              <motion.h2 className={styles.subheading} variants={itemVariants}>Unforgettable Experiences</motion.h2>
              <motion.p variants={itemVariants}>
                Experience the perfect blend of authentic Afghan cuisine and modern elegance in an ambiance
                designed for comfort and charm. Every dish tells a story—crafted with time-honored recipes
                and premium ingredients.
              </motion.p>
              <motion.p variants={itemVariants}>
                Immerse yourself in the warm, inviting atmosphere where rich flavors, exquisite presentation,
                and impeccable service come together to create an unforgettable dining experience.
              </motion.p>
              <motion.button
                className={styles.menuButton}
                onClick={() => navigate("/private-dining-inquiry")}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                PRIVATE DINING
              </motion.button>
            </div>
            
            {/* Secondary image container below button */}
            <motion.div 
              className={styles.secondaryImageContainer}
              variants={itemVariants}
              custom={5}
            >
              <img
                src={secondaryImage}
                alt="Traditional Afghan Cuisine"
                className={styles.secondaryImage}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className={styles.spacer}></div> {/* Add spacer for bottom margin */}
    </div>
  );
}
