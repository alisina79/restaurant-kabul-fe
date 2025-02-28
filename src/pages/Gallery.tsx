import { useState } from "react";
import styles from "../css/gallery.module.css";
import { motion } from "framer-motion";

// Import images correctly
import one from "../chef/one.jpg";
import two from "../chef/two.jpg";
import three from "../chef/three.jpg";
import four from "../chef/four.jpg";
import five from "../chef/five.jpg";
import six from "../chef/six.jpg";
import seven from "../chef/seven.jpg";
import eight from "../chef/eight.jpg";
import nine from "../chef/nine.jpg";
import ten from "../chef/ten.jpg";

// Use imported variables instead of string paths
const images = [one, two, three, four, five, six, seven, eight, nine, ten];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <motion.div
      className={styles.galleryContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className={styles.heading}>Explore Our Exquisite Dishes</h1>
      <p className={styles.subheading}>
        A glimpse of our finest creations, prepared with passion and
        authenticity.
      </p>

      <div className={styles.gridContainer}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={styles.imageWrapper}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openImage(index)}
          >
            <img
              src={img}
              alt={`Dish ${index + 1}`}
              className={styles.galleryImage}
            />
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent}>
            <span
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            <img
              src={images[currentIndex]}
              alt="Expanded view"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Gallery;
