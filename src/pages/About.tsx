import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../css/about.module.css";
import ext from "../chef/ext.jpg";

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* LEFT SIDE: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          className={styles.imageContainer}
        >
          <motion.img
            src={ext}
            alt="Kaboul Gourmet"
            className={styles.aboutImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          />
        </motion.div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={styles.textContent}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            WHAT’S ON
          </motion.h2>
          <p className={styles.subtitle}>What’s on at Kaboul Gourmet</p>
          <p className={styles.description}>
            Throughout the year, we run a series of wine dinners, themed events,
            live music days, and other celebrations. Check out what’s happening
            at our locations.
          </p>

          <div className={styles.buttons}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              WHAT'S ON
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
            >
              NEWSLETTER SIGNUP
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
