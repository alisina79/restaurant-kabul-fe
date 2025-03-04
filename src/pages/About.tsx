import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import styles from "../css/about.module.css";
import ext from "../chef/ext.jpg";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });
  const navigate = useNavigate(); // ✅ Initialize navigation

  // Variants for staggered fade-in-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className={styles.aboutSection}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* LEFT SIDE: IMAGE */}
        <motion.div
          className={styles.imageContainer}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
        >
          <motion.img
            src={ext}
            alt="Kaboul Gourmet"
            className={styles.aboutImage}
            variants={{
              hidden: { scale: 0.9, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
            }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          />
        </motion.div>

        {/* RIGHT SIDE: STAGGERED TEXT CONTENT (Now Scroll Activated & Repeats) */}
        <motion.div className={styles.textContent} variants={containerVariants}>
          <motion.h2
            className={styles.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            WHAT’S ON
          </motion.h2>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            What’s on at Kaboul Gourmet
          </motion.p>
          <motion.p className={styles.description} variants={itemVariants}>
            Throughout the year, we run a series of wine dinners, themed events,
            live music days, and other celebrations. Check out what’s happening
            at our locations.
          </motion.p>

          <motion.div className={styles.buttons} variants={containerVariants}>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
              onClick={() => navigate("/whatson")} // ✅ Corrected Navigation
            >
              WHAT'S ON
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
              onClick={() => navigate("/newsletter")}
            >
              NEWSLETTER SIGNUP
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
