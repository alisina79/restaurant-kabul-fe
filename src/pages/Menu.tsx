import { useState, useEffect } from "react";
import { useLocation } from "react-router";
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [allergenFilter, setAllergenFilter] = useState<string[]>([]);
  const location = useLocation();

  // Handle location state for scrolling to specific section
  useEffect(() => {
    if (location.state?.section) {
      const formattedCategory =
        (location.state.section as string).charAt(0).toUpperCase() +
        location.state.section.slice(1).toLowerCase();

      if (menuData[formattedCategory as keyof MenuData]) {
        setActiveCategory(formattedCategory as keyof MenuData);
      }

      setTimeout(() => {
        const section = document.getElementById(formattedCategory);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  // Handle allergen filter
  const handleAllergenFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    setAllergenFilter((prevFilter) =>
      checked
        ? [...prevFilter, value]
        : prevFilter.filter((allergen) => allergen !== value)
    );
  };

  // Filter menu items based on search query and allergen filter
  const filteredItems =
    menuData[activeCategory]?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (allergenFilter.length === 0 ||
          !allergenFilter.some((allergen) => item.allergens.includes(allergen)))
    ) || [];

  return (
    <div
      className={`${styles.menuContainer} ${darkMode ? styles.darkMode : ""}`}
    >
      <button
        className={styles.darkModeToggle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h2 className={styles.title}>Our Menu</h2>

      <div
        className={`${styles.searchWrapper} ${
          isFocused ? styles.searchFocused : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search for a dish..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={() => setSearchQuery("")}
          >
            ✖
          </button>
        )}
      </div>

      {/* Allergen Filter */}
      <div className={styles.allergenFilter}>
        <h3>Filter by Allergens</h3>
        <label>
          <input
            type="checkbox"
            value="gluten"
            onChange={handleAllergenFilterChange}
          />
          Gluten
        </label>
        <label>
          <input
            type="checkbox"
            value="dairy"
            onChange={handleAllergenFilterChange}
          />
          Dairy
        </label>
        <label>
          <input
            type="checkbox"
            value="egg"
            onChange={handleAllergenFilterChange}
          />
          Egg
        </label>
      </div>

      <div className={styles.menuTabs}>
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`${styles.menuTab} ${
              activeCategory === category ? styles.activeTab : ""
            }`}
            onClick={() => setActiveCategory(category as keyof MenuData)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.menuGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className={styles.menuItem} id={activeCategory}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.menuImage}
              />
              <div className={styles.menuDetails}>
                <h3 className={styles.menuName}>{item.name}</h3>
                <p className={styles.menuDescription}>{item.description}</p>
                <span className={styles.menuPrice}>{item.price}</span>
              </div>

              {/* Customization Options */}
              <div className={styles.customizationOptions}>
                <h4>Customize your dish:</h4>
                <label>
                  Spice Level:
                  <select>
                    <option value="Mild">Mild</option>
                    <option value="Medium">Medium</option>
                    <option value="Hot">Hot</option>
                  </select>
                </label>
                <div className={styles.dietaryPreferences}>
                  <label>
                    <input type="checkbox" /> Vegetarian
                  </label>
                  <label>
                    <input type="checkbox" /> Vegan
                  </label>
                  <label>
                    <input type="checkbox" /> Gluten-Free
                  </label>
                  <label>
                    <input type="checkbox" /> Dairy-Free
                  </label>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
