import styles from "../css/chefPage.module.css";
import chef from "../chef/chef.jpg"; // Ensure the correct image is used
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const Chef = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  // Variants for staggered animation
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
    <motion.section
      className={styles.chefContainer}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Left Container: Chef Image */}
      <motion.div
        className={styles.chefImageContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={chef}
          alt="Chef"
          className={styles.chefImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
        />
      </motion.div>

      {/* Right Container: Chef Info */}
      <motion.div
        className={styles.chefInfoContainer}
        variants={containerVariants}
      >
        <motion.h1 className={styles.chefTitle} variants={itemVariants}>
          Meet Our Executive Chef
        </motion.h1>
        <motion.p className={styles.chefDescription} variants={itemVariants}>
          With over 20 years of culinary experience, Chef John Doe brings
          passion, creativity, and authenticity to every dish. His expertise in
          fusion cuisine blends traditional flavors with modern techniques,
          creating an unforgettable dining experience.
        </motion.p>
        <motion.p className={styles.chefQuote} variants={itemVariants}>
          "Cooking is an art, but the greatest masterpiece is the joy it brings
          to others."
        </motion.p>
        <motion.button
          className={styles.menuButton}
          onClick={() => navigate("/menu")}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUtensils className={styles.icon} /> Explore the Menu
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Chef;
