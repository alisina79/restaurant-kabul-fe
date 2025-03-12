import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "../css/FeaturedDishes.module.css";
import restImage from "../assets/Rest.jpg";
import afghanImage from "../assets/afghan.jpg";
import logoImage from "../assets/Logo.jpg";

// Enhanced dish data with required properties
const featuredDishes = [
  {
    id: 1,
    name: "Kabuli Pulao",
    image: restImage,
    extraInfo: "Serves: 2-3, Calories: 550 kcal",
    description: "Afghanistan's national dish featuring fragrant rice with lamb, carrots, and raisins.",
    price: "$18.99",
    category: "Main Course",
    preparationTime: "25 min",
  },
  {
    id: 2,
    name: "Mantu",
    image: afghanImage,
    extraInfo: "Serves: 1-2, Calories: 320 kcal",
    description: "Delicate steamed dumplings filled with seasoned ground beef and onions.",
    price: "$14.99",
    category: "Appetizer",
    preparationTime: "20 min",
  },
  {
    id: 3,
    name: "Bolani",
    image: logoImage,
    extraInfo: "Serves: 1-2, Calories: 270 kcal",
    description: "Flatbread filled with potatoes, green onions, and herbs, pan-fried to golden perfection.",
    price: "$12.99",
    category: "Appetizer",
    preparationTime: "15 min",
  },
];

// Available categories for filtering
const categories = ["All", "Main Course", "Appetizer"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delayAmount: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delayAmount },
  }),
};

const underlineVariants = {
  hidden: { opacity: 0, width: "0%" },
  visible: {
    opacity: 1,
    width: "80px",
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: delay * 0.1 },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 12px 30px rgba(172, 141, 91, 0.4)",
    transition: { duration: 0.3 },
  },
};

// Enhanced button-specific animation variant
const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut", 
      delay: delay,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(172, 141, 91, 0.3)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

// Define TypeScript interface for dish
interface Dish {
  id: number;
  name: string;
  image: string;
  extraInfo: string;
  description: string;
  price: string;
  category: string;
  preparationTime: string;
}

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [visibleDishes, setVisibleDishes] = useState(3); // Start with 3 visible dishes
  const [filteredDishes, setFilteredDishes] = useState(featuredDishes);

  // Filter dishes when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredDishes(featuredDishes);
    } else {
      setFilteredDishes(
        featuredDishes.filter((dish) => dish.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Open dish detail modal
  const openDishDetail = (dish: Dish) => {
    setSelectedDish(dish);
    setIsDetailModalOpen(true);
  };

  return (
    <motion.section
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Section Title with enhanced design */}
      <motion.div className={styles.sectionHeader} variants={fadeUpVariants} custom={0}>
        <motion.h2 className={styles.title}>
          <span className={styles.titleIcon}>🍽️</span> Featured Dishes
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          variants={fadeUpVariants} 
          custom={0.1}
        >
          Authentic Afghan delicacies prepared with traditional recipes
        </motion.p>
        <motion.div className={styles.underline} variants={underlineVariants}></motion.div>
      </motion.div>

      {/* Category Filters with enhanced animations */}
      <motion.div 
        className={styles.categoryFilters}
        variants={fadeUpVariants}
        custom={0.2}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.activeCategory : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUpVariants}
            custom={0.3 + index * 0.1}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Dish Cards Grid / Carousel */}
      <motion.div 
        className={styles.dishGrid} 
        variants={containerVariants}
        custom={0.4}
      >
        <AnimatePresence>
          {filteredDishes.slice(0, visibleDishes).map((dish, index) => (
            <motion.div
              key={dish.id}
              className={styles.dishCard}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              layout
            >
              {/* Category Label with animation */}
              <motion.div 
                className={styles.categoryLabel}
                variants={fadeUpVariants}
                custom={0.05 + index * 0.1}
              >
                {dish.category}
              </motion.div>
              
              {/* Background Image with animation */}
              <motion.div
                className={styles.imageWrapper}
                style={{ backgroundImage: `url(${dish.image})` }}
                variants={fadeUpVariants}
                custom={0.1 + index * 0.1}
              ></motion.div>

              {/* Overlay with Info */}
              <div className={styles.overlay}>
                <motion.h3
                  className={styles.dishName}
                  variants={fadeUpVariants}
                  custom={0.15 + index * 0.1}
                >
                  {dish.name}
                </motion.h3>

                <motion.p
                  className={styles.description}
                  variants={fadeUpVariants}
                  custom={0.2 + index * 0.1}
                >
                  {dish.description}
                </motion.p>

                <motion.div
                  className={styles.dishInfo}
                  variants={fadeUpVariants}
                  custom={0.25 + index * 0.1}
                >
                  <motion.span 
                    className={styles.price}
                    variants={fadeUpVariants}
                    custom={0.3 + index * 0.1}
                  >
                    {dish.price}
                  </motion.span>
                  <motion.span 
                    className={styles.extraInfo}
                    variants={fadeUpVariants}
                    custom={0.35 + index * 0.1}
                  >
                    {dish.extraInfo}
                  </motion.span>
                </motion.div>

                <motion.div 
                  className={styles.buttonGroup}
                  variants={fadeUpVariants}
                  custom={0.4 + index * 0.1}
                >
                  <motion.button
                    className={styles.detailButton}
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                    custom={0.45 + index * 0.1}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => openDishDetail(dish)}
                  >
                    View Details
                  </motion.button>

                  <motion.button
                    className={styles.orderButton}
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                    custom={0.5 + index * 0.1}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    visit Menu
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button with animation */}
      {filteredDishes.length > visibleDishes && (
        <motion.button
          className={styles.loadMoreButton}
          onClick={() => setVisibleDishes(prev => prev + 3)}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          custom={0.8}
          whileHover="hover"
          whileTap="tap"
        >
          Load More Dishes
        </motion.button>
      )}

      {/* Dish Detail Modal with enhanced animations */}
      <AnimatePresence>
        {isDetailModalOpen && selectedDish && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDetailModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className={styles.closeButton}
                onClick={() => setIsDetailModalOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
              >
                ×
              </motion.button>

              <motion.div
                className={styles.modalImage}
                style={{ backgroundImage: `url(${selectedDish.image})` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              ></motion.div>

              <motion.div 
                className={styles.modalDetails}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
              >
                <motion.h3 
                  className={styles.modalDishName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                >
                  {selectedDish.name}
                </motion.h3>
                <motion.p 
                  className={styles.modalDescription}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                >
                  {selectedDish.description}
                </motion.p>
                
                <motion.div 
                  className={styles.modalInfoGrid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                >
                  <motion.div 
                    className={styles.modalInfoItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
                  >
                    <span className={styles.modalInfoLabel}>Price:</span>
                    <span className={styles.modalInfoValue}>{selectedDish.price}</span>
                  </motion.div>
                  <motion.div 
                    className={styles.modalInfoItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.65 } }}
                  >
                    <span className={styles.modalInfoLabel}>Category:</span>
                    <span className={styles.modalInfoValue}>{selectedDish.category}</span>
                  </motion.div>
                  <motion.div 
                    className={styles.modalInfoItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
                  >
                    <span className={styles.modalInfoLabel}>Preparation:</span>
                    <span className={styles.modalInfoValue}>{selectedDish.preparationTime}</span>
                  </motion.div>
                  <motion.div 
                    className={styles.modalInfoItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.75 } }}
                  >
                    <span className={styles.modalInfoLabel}>Portion:</span>
                    <span className={styles.modalInfoValue}>{selectedDish.extraInfo.split(',')[0]}</span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className={styles.modalActions}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
                >
                  <motion.button 
                    className={styles.modalOrderButton}
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                    custom={0.9}
                    whileHover="hover"
                    whileTap="tap"
                  >
                   Explore Menu
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default FeaturedDishes;
