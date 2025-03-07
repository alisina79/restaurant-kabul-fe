import { motion, useInView } from "framer-motion";
import styles from "../css/FeaturedDishes.module.css";
import restImage from "../assets/Rest.jpg";
import afghanImage from "../assets/afghan.jpg";
import logoImage from "../assets/Logo.jpg";
import { useRef } from "react";

const featuredDishes = [
  {
    id: 1,
    name: "Kabuli Pulao",
    image: restImage,
    extraInfo: "Serves: 2-3, Calories: 550 kcal",
  },
  {
    id: 2,
    name: "Mantu",
    image: afghanImage,
    extraInfo: "Serves: 1-2, Calories: 320 kcal",
  },
  {
    id: 3,
    name: "Bolani",
    image: logoImage,
    extraInfo: "Serves: 1-2, Calories: 270 kcal",
  },
];

/* Container Animation - Staggers All Children */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

/* Fade-in-Up Animation */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delayAmount: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delayAmount },
  }),
};

/* Underline Animation */
const underlineVariants = {
  hidden: { opacity: 0, width: "0%" },
  visible: {
    opacity: 1,
    width: "80px",
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // ✅ Remove "once: true" so animation works on scroll

  console.log("Is section visible? ", isInView); // Debugging

  return (
    <motion.section
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // ✅ Will re-trigger on scroll
      variants={containerVariants}
    >
      {/* Title with Staggered Animation */}
      <motion.h2 className={styles.title} variants={fadeUpVariants} custom={0}>
        🍽️ Featured Dishes
      </motion.h2>

      {/* Underline Animation */}
      <motion.div
        className={styles.underline}
        variants={underlineVariants}
      ></motion.div>

      {/* Grid of Dish Cards */}
      <motion.div className={styles.dishGrid} variants={containerVariants}>
        {featuredDishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            className={styles.dishCard}
            variants={fadeUpVariants}
            custom={index * 0.2}
          >
            <div
              className={styles.imageWrapper}
              style={{ backgroundImage: `url(${dish.image})` }}
            ></div>

            <div className={styles.overlay}>
              {/* Dish Name */}
              <motion.h3
                className={styles.dishName}
                variants={fadeUpVariants}
                custom={index * 0.3}
              >
                {dish.name}
              </motion.h3>

              {/* Dish Extra Info */}
              <motion.p
                className={styles.extraInfo}
                variants={fadeUpVariants}
                custom={index * 0.4}
              >
                {dish.extraInfo}
              </motion.p>

              {/* Button */}
              <motion.button
                className={styles.menuButton}
                variants={fadeUpVariants}
                custom={index * 0.5}
                whileHover={{ scale: 1.1 }}
              >
                Place Order
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturedDishes;
