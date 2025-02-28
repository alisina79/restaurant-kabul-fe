import { useNavigate } from "react-router";
import { motion } from "framer-motion"; // Import motion for animations
import styles from "../css/Menudetails.module.css";
import exter from "../chef/exter.jpg";

export default function Menudetails() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.container}>
        {/* IMAGE SECTION WITH ANIMATION */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.imageFrame}>
            <img src={exter} alt="Afghan Cuisine" />
          </div>
        </motion.div>

        {/* TEXT SECTION WITH ANIMATION */}
        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.textBox}>
            <h1>Bites & Sips</h1>
            <p>
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
            </p>
            <motion.button
              className={styles.menuButton}
              onClick={() => navigate("/menu")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu 🍽️
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
