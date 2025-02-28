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
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <motion.section
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={styles.title}>🍽️ Featured Dishes</h2>
      <div className={styles.dishGrid}>
        {featuredDishes.map((dish) => (
          <div key={dish.id} className={styles.dishCard}>
            <div className={styles.imageWrapper}>
              <img
                src={dish.image}
                alt={dish.name}
                className={styles.dishImage}
              />
              <div className={styles.overlay}>
                <p className={styles.extraInfo}>{dish.extraInfo}</p>
              </div>
            </div>
            <h3 className={styles.dishName}>{dish.name}</h3>
            <p className={styles.dishDescription}>{dish.description}</p>
            <button className={styles.menuButton}>Place Order</button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedDishes;
