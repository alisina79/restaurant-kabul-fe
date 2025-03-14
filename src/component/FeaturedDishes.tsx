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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delayAmount: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.45, 
      ease: "easeOut", 
      delay: delayAmount * 0.15,
      type: "spring",
      damping: 12
    },
  }),
};

const underlineVariants = {
  hidden: { opacity: 0, width: "0%" },
  visible: {
    opacity: 1,
    width: "80px",
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut", 
      delay: delay * 0.15,
      type: "spring",
      damping: 15
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px rgba(172, 141, 91, 0.3)",
    transition: { duration: 0.3 },
  },
};

// Enhanced button-specific animation variant
const buttonVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut", 
      delay: delay * 0.1,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(172, 141, 91, 0.25)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.97 }
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
  const mainRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  const dishesRef = useRef(null);
  
  // Use separate InView checks for different sections
  const isSectionInView = useInView(mainRef, { amount: 0.1, once: true });
  const isTitleInView = useInView(titleRef, { amount: 0.5, once: true });
  const areCategoriesInView = useInView(categoriesRef, { amount: 0.5, once: true });
  const areDishesInView = useInView(dishesRef, { amount: 0.1, once: true });
  
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
      ref={mainRef}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        padding: "2rem clamp(0.5rem, 5vw, 1rem)"
      }}
    >
      {/* Section Title with enhanced design */}
      <motion.div 
        className={styles.sectionHeader} 
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ 
          marginBottom: "clamp(1rem, 3vw, 1.5rem)",
          textAlign: "center" 
        }}
      >
        <motion.h2 
          className={styles.title}
          variants={fadeUpVariants}
          custom={0}
          style={{ 
            fontSize: "clamp(1.5rem, 5vw, 2rem)", 
            marginBottom: "0.5rem" 
          }}
        >
          <span className={styles.titleIcon}>🍽️</span> Featured Dishes
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          variants={fadeUpVariants} 
          custom={0.2}
          style={{ 
            fontSize: "clamp(0.85rem, 3vw, 1rem)", 
            maxWidth: "600px", 
            margin: "0 auto 0.75rem",
            padding: "0 clamp(0.5rem, 3vw, 1rem)" 
          }}
        >
          Authentic Afghan delicacies prepared with traditional recipes
        </motion.p>
        <motion.div className={styles.underline} variants={underlineVariants}></motion.div>
      </motion.div>

      {/* Category Filters with enhanced animations */}
      <motion.div 
        className={styles.categoryFilters}
        ref={categoriesRef}
        initial="hidden"
        animate={areCategoriesInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ 
          marginBottom: "clamp(1.25rem, 4vw, 2rem)", 
          gap: "clamp(0.3rem, 2vw, 0.75rem)",
          flexWrap: "wrap",
          justifyContent: "center",
          display: "flex" 
        }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.activeCategory : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUpVariants}
            custom={index * 0.2}
            style={{ 
              padding: "clamp(0.3rem, 2vw, 0.5rem) clamp(0.6rem, 3vw, 1rem)", 
              fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
              fontWeight: 500,
            }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Dish Cards Grid / Carousel */}
      <motion.div 
        className={styles.dishGrid} 
        ref={dishesRef}
        initial="hidden"
        animate={areDishesInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 300px))",
          gap: "clamp(1rem, 3vw, 2rem)",
          width: "100%",
          justifyContent: "center",
          margin: "0 auto"
        }}
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
              style={{
                height: "clamp(360px, 70vw, 420px)",
                fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                width: "100%",
                borderRadius: "clamp(8px, 2vw, 12px)",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                backgroundImage: `url(${dish.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Dark overlay for text visibility */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%)",
                zIndex: 1
              }}></div>
              
              {/* Category Label with animation */}
              <motion.div
                className={styles.categoryLabel}
                variants={fadeUpVariants}
                custom={0.15}
                style={{
                  position: "absolute",
                  top: "clamp(10px, 2vw, 15px)",
                  right: "clamp(10px, 2vw, 15px)",
                  zIndex: 2,
                  padding: "clamp(0.2rem, 1vw, 0.3rem) clamp(0.5rem, 2vw, 0.85rem)",
                  borderRadius: "clamp(15px, 4vw, 20px)",
                  backgroundColor: "rgba(172, 141, 91, 0.9)",
                  color: "white",
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  fontWeight: 600
                }}
              >
                {dish.category}
              </motion.div>

              {/* Overlay with Info */}
              <div className={styles.overlay} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "clamp(1rem, 3vw, 1.5rem)",
                height: "100%",
                position: "relative",
                zIndex: 2,
                textAlign: "left"
              }}>
                <motion.h3
                  className={styles.dishName}
                  variants={fadeUpVariants}
                  custom={0.45}
                  style={{ 
                    fontSize: "clamp(1.2rem, 4vw, 1.5rem)", 
                    marginBottom: "clamp(0.3rem, 1vw, 0.5rem)", 
                    color: "white",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                  }}
                >
                  {dish.name}
                </motion.h3>

                <motion.p
                  className={styles.description}
                  variants={fadeUpVariants}
                  custom={0.6}
                  style={{ 
                    fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", 
                    lineHeight: "1.4", 
                    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
                    color: "rgba(255,255,255,0.9)",
                    textShadow: "0 1px 3px rgba(0,0,0,0.3)"
                  }}
                >
                  {dish.description}
                </motion.p>

                <motion.div
                  className={styles.dishInfo}
                  variants={fadeUpVariants}
                  custom={0.75}
                  style={{ 
                    fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)", 
                    marginBottom: "clamp(0.75rem, 3vw, 1.25rem)", 
                    width: "100%",
                    color: "rgba(255,255,255,0.9)",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                  }}
                >
                  <span className={styles.price} style={{ 
                    fontWeight: "bold", 
                    color: "#f5d8a0",
                    fontSize: "clamp(0.9rem, 3vw, 1.1rem)"
                  }}>
                    {dish.price}
                  </span>
                  <span className={styles.extraInfo} style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "clamp(0.7rem, 2vw, 0.8rem)"
                  }}>
                    {dish.extraInfo}
                  </span>
                </motion.div>

                <motion.div 
                  className={styles.buttonGroup}
                  variants={fadeUpVariants}
                  custom={0.9}
                  style={{ 
                    gap: "clamp(0.5rem, 2vw, 0.75rem)", 
                    display: "flex", 
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "clamp(0.3rem, 1vw, 0.5rem)"
                  }}
                >
                  <motion.button
                    className={styles.detailButton}
                    variants={buttonVariants}
                    custom={1.0}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => openDishDetail(dish)}
                    style={{ 
                      padding: "clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.5rem, 2vw, 0.75rem)", 
                      fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                      backgroundColor: "rgba(172, 141, 91, 0.95)",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: 500,
                      cursor: "pointer",
                      width: "auto",
                      minWidth: "clamp(80px, 25vw, 110px)"
                    }}
                  >
                    View Details
                  </motion.button>

                  <motion.button
                    className={styles.orderButton}
                    variants={buttonVariants}
                    custom={1.1}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ 
                      padding: "clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.5rem, 2vw, 0.75rem)", 
                      fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      color: "#222",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: 500,
                      cursor: "pointer",
                      width: "auto",
                      minWidth: "clamp(80px, 25vw, 110px)"
                    }}
                  >
                    Visit Menu
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.5, 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            } 
          }}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          style={{ 
            padding: "clamp(0.4rem, 1.5vw, 0.5rem) clamp(1rem, 3vw, 1.25rem)", 
            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", 
            margin: "clamp(1rem, 3vw, 1.5rem) auto 0",
            display: "block",
            backgroundColor: "rgba(172, 141, 91, 0.9)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
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
