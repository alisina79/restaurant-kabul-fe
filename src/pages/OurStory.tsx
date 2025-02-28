import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../css/OurStory.module.css";

// Importing images correctly
import rest from "../chef/rest.jpg";
import one from "../chef/one.jpg";
import three from "../chef/three.jpg";
import eight from "../chef/eight.jpg";

export default function OurStory() {
  useEffect(() => {
    document.title = "Our Story - Kaboul Gourmet";
  }, []);

  return (
    <div className={styles.ourStoryContainer}>
      {/* Hero Section */}
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${rest})` }}
      >
        <div className={styles.heroOverlay}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.heroTitle}
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.sectionTitle}
        >
          A Journey of Passion & Taste
        </motion.h2>
        <p className={styles.sectionText}>
          Kaboul Gourmet was born from a dream to bring the rich flavors of
          Afghan cuisine to France. From the bustling streets of Kabul to the
          heart of Paris, we craft dishes that tell a story of tradition,
          warmth, and authenticity.
        </p>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className={styles.timelineTitle}>2015 - The Vision Begins</h3>
            <p className={styles.timelineText}>
              The idea of Kaboul Gourmet was first conceived, inspired by the
              rich culinary heritage of Afghanistan.
            </p>
          </motion.div>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className={styles.timelineTitle}>
              2018 - First Restaurant Opens
            </h3>
            <p className={styles.timelineText}>
              We opened our first restaurant, quickly gaining popularity for our
              authentic dishes.
            </p>
          </motion.div>
          <motion.div
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h3 className={styles.timelineTitle}>
              2024 - Expanding the Experience
            </h3>
            <p className={styles.timelineText}>
              We launched our website, allowing customers to explore our menu,
              make reservations, and order online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className={styles.gallerySection}>
        {[one, three, eight].map((img, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt="Dish" className={styles.galleryImage} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
