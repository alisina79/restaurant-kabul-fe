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
    description: "Fragrant rice topped with tender lamb, carrots, and raisins.",
    extraInfo: "Serves: 2-3, Calories: 550 kcal",
  },
  {
    id: 2,
    name: "Mantu",
    image: afghanImage,
    description: "Afghan dumplings filled with beef, topped with yogurt.",
    extraInfo: "Serves: 1-2, Calories: 320 kcal",
  },
  {
    id: 3,
    name: "Bolani",
    image: logoImage,
    description: "Flatbread stuffed with spiced potatoes and green onions.",
    extraInfo: "Serves: 1-2, Calories: 270 kcal",
  },
];

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  // Container animation (staggered fade-in-up)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Staggered fade-in-up effect for each item
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
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Title Animation */}
      <motion.h2 className={styles.title} variants={itemVariants}>
        🍽️ Featured Dishes
      </motion.h2>

      {/* Dish Grid Animation */}
      <motion.div className={styles.dishGrid} variants={containerVariants}>
        {featuredDishes.map((dish) => (
          <motion.div
            key={dish.id}
            className={styles.dishCard}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.imageWrapper}
              variants={itemVariants}
              whileHover={{ scale: 1.1, filter: "brightness(1.1)" }}
            >
              <motion.img
                src={dish.image}
                alt={dish.name}
                className={styles.dishImage}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1 },
                  },
                }}
                whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              />
              <motion.div className={styles.overlay} variants={itemVariants}>
                <p className={styles.extraInfo}>{dish.extraInfo}</p>
              </motion.div>
            </motion.div>
            <motion.h3 className={styles.dishName} variants={itemVariants}>
              {dish.name}
            </motion.h3>
            <motion.p
              className={styles.dishDescription}
              variants={itemVariants}
            >
              {dish.description}
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.menuButton}
            >
              Place Order
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturedDishes;
