import { useNavigate } from "react-router";
import { motion, useInView } from "framer-motion"; // Import motion for animations
import styles from "../css/PrivateDining.module.css";
import privateRoom from "../assets/Rest.jpg"; // Using an existing image from assets
import { useRef } from "react";

export default function PrivateDining() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.2,
    once: true,
    margin: "-100px 0px 0px 0px"
  });

  // Variants for staggered fade-in animation
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.2
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className={styles.spacer}></div>
      <motion.section
        className={styles.container}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* IMAGE SECTION */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -30, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.imageFrame}>
            <motion.img
              src={privateRoom}
              alt="Private Dining Room"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <div className={styles.textSection}>
          <div className={styles.textBox}>
            <div className={styles.textContent}>
              <span className={styles.monogram}>K</span>
              <h1 className={styles.mainHeading}>PRIVATE DINING AT KALVIN RESTAURANTS</h1>
              <h2 className={styles.subheading}>Unforgettable Experiences</h2>
              <p className={styles.paragraph}>
                Experience the perfect blend of authentic Afghan cuisine and modern elegance in an ambiance
                designed for comfort and charm. Every dish tells a story—crafted with time-honored recipes
                and premium ingredients.
              </p>
              <p className={styles.paragraph}>
                Immerse yourself in the warm, inviting atmosphere where rich flavors, exquisite presentation,
                and impeccable service come together to create an unforgettable dining experience.
              </p>
              <motion.button
                className={styles.menuButton}
                onClick={() => navigate("/private-dining")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                PRIVATE DINING
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
      <div className={styles.spacer}></div>
    </div>
  );
}
