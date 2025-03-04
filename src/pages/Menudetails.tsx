import { useNavigate } from "react-router";
import { motion, useInView } from "framer-motion"; // Import motion for animations
import styles from "../css/Menudetails.module.css";
import exter from "../chef/exter.jpg";
import { useRef } from "react";

export default function Menudetails() {
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
    <>
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
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
        >
          <div className={styles.imageFrame}>
            <motion.img
              src={exter}
              alt="Afghan Cuisine"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* TEXT SECTION WITH STAGGERED ANIMATION */}
        <motion.div className={styles.textSection} variants={containerVariants}>
          <motion.div className={styles.textBox} variants={containerVariants}>
            <motion.h1 variants={itemVariants}>Bites & Sips</motion.h1>
            <motion.p variants={itemVariants}>
              Where tradition meets sophistication. Experience the perfect blend
              of authentic Afghan cuisine and modern elegance in an ambiance
              designed for comfort and charm. At "Kaboul Gourmet", every dish
              tells a story—crafted with time-honored recipes, premium
              ingredients, and a passion for culinary excellence. Immerse
              yourself in the warm, inviting atmosphere where rich flavors,
              exquisite presentation, and impeccable service come together to
              create an unforgettable dining experience. Whether you're savoring
              a cherished family recipe or exploring new taste sensations, let
              us transport you to the heart of Afghanistan with every bite.
            </motion.p>
            <motion.button
              className={styles.menuButton}
              onClick={() => navigate("/menu")}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu 🍽️
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
