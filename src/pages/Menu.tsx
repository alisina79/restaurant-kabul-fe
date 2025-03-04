import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import styles from "../css/Menu.module.css";

import Nodels from "../assets/Nodels.jpg";
import egg from "../assets/egg.jpg";
import Tea from "../assets/Tea.jpg";
import Water from "../assets/Water.jpg";
import Mango from "../assets/Mango.jpg";
import Lime from "../assets/Lime.jpg";

// Define MenuItem type
type MenuItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  allergens: string[];
};

// Define MenuData type
type MenuData = {
  Foods: MenuItem[];
  Beverages: MenuItem[];
  Starters: MenuItem[];
};

// Menu data
const menuData: MenuData = {
  Foods: [
    {
      id: 1,
      name: "Noodles",
      price: "€15",
      image: Nodels,
      description: "Delicious noodles with veggies.",
      allergens: ["gluten"],
    },
    {
      id: 2,
      name: "Egg",
      price: "€12",
      image: egg,
      description: "Boiled egg served with herbs.",
      allergens: ["egg"],
    },
  ],
  Beverages: [
    {
      id: 3,
      name: "Tea",
      price: "€5",
      image: Tea,
      description: "Refreshing mint and lime tea.",
      allergens: [],
    },
    {
      id: 4,
      name: "Water",
      price: "€4",
      image: Water,
      description: "Natural spring water.",
      allergens: [],
    },
  ],
  Starters: [
    {
      id: 5,
      name: "Mango",
      price: "€7",
      image: Mango,
      description: "Fresh mango slices.",
      allergens: [],
    },
    {
      id: 6,
      name: "Lime",
      price: "€8",
      image: Lime,
      description: "Crispy lime-flavored rolls.",
      allergens: ["gluten", "dairy"],
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>("Foods");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [allergenFilter, setAllergenFilter] = useState<string[]>([]);
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      const formattedCategory =
        location.state.section.charAt(0).toUpperCase() +
        location.state.section.slice(1).toLowerCase();
      if (menuData[formattedCategory as keyof MenuData])
        setActiveCategory(formattedCategory as keyof MenuData);
      setTimeout(
        () =>
          document
            .getElementById(formattedCategory)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        100
      );
    }
  }, [location]);

  // Handle allergen filtering
  const handleAllergenFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAllergenFilter((prevFilter) =>
      e.target.checked
        ? [...prevFilter, e.target.value]
        : prevFilter.filter((allergen) => allergen !== e.target.value)
    );
  };

  // Handle adding to cart
  const handleAddToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Handle removing from cart
  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  // Filter menu items based on search and allergens
  const filteredItems =
    menuData[activeCategory]?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (allergenFilter.length === 0 ||
          !allergenFilter.some((allergen) => item.allergens.includes(allergen)))
    ) || [];

  return (
    <motion.div
      className={`${styles.menuContainer} ${darkMode ? styles.darkMode : ""}`}
    >
      <motion.button
        className={styles.darkModeToggle}
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.05 }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </motion.button>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Menu
      </motion.h2>

      {/* Search Bar */}
      <motion.div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for a dish..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={() => setSearchQuery("")}
          >
            ✖
          </button>
        )}
      </motion.div>

      {/* Allergen Filter */}
      <div className={styles.allergenFilter}>
        <h3>Filter by Allergens</h3>
        {["gluten", "dairy", "egg"].map((allergen) => (
          <label key={allergen}>
            <input
              type="checkbox"
              value={allergen}
              onChange={handleAllergenFilterChange}
            />
            {allergen.charAt(0).toUpperCase() + allergen.slice(1)}
          </label>
        ))}
      </div>

      {/* Menu Categories */}
      <div className={styles.menuTabs}>
        {Object.keys(menuData).map((category) => (
          <motion.button
            key={category}
            className={`${styles.menuTab} ${
              activeCategory === category ? styles.activeTab : ""
            }`}
            onClick={() => setActiveCategory(category as keyof MenuData)}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Menu Items */}
      <motion.div className={styles.menuGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.menuItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className={styles.menuImage}
              />
              <div className={styles.menuDetails}>
                <h3 className={styles.menuName}>{item.name}</h3>
                <p className={styles.menuDescription}>{item.description}</p>
                <span className={styles.menuPrice}>{item.price}</span>
                <div className={styles.cartControls}>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    disabled={!cart[item.id]}
                  >
                    ➖
                  </button>
                  <span>{cart[item.id] || 0}</span>
                  <button onClick={() => handleAddToCart(item.id)}>➕</button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p className={styles.noResults}>No items found.</motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Menu;
