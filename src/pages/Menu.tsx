import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaFire,
  FaBreadSlice,
  FaChevronUp,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import styles from "../css/Menu.module.css";
import Switch from "react-switch";

const allTags = ["Spicy", "Vegan", "Gluten-Free"];

const menu = {
  starters: [
    {
      name: "Bruschetta",
      desc: "Grilled bread with tomatoes.",
      img: "/images/bruschetta.jpg",
      tags: ["Vegan"],
    },
    {
      name: "Spicy Wings",
      desc: "Wings with hot sauce.",
      img: "/images/wings.jpg",
      tags: ["Spicy"],
    },
  ],
  mains: [
    {
      name: "Ribeye Steak",
      desc: "With garlic butter.",
      img: "/images/ribeye.jpg",
      tags: [],
    },
    {
      name: "Veggie Bowl",
      desc: "Roasted veggies + quinoa.",
      img: "/images/veggie-bowl.jpg",
      tags: ["Vegan", "Gluten-Free"],
    },
  ],
  beverages: [
    {
      name: "Berry Smoothie",
      desc: "Berries & yogurt.",
      img: "/images/berry-smoothie.jpg",
      tags: ["Gluten-Free"],
    },
    {
      name: "Spicy Margarita",
      desc: "Tequila with chili.",
      img: "/images/spicy-marg.jpg",
      tags: ["Spicy"],
    },
  ],
};

const formatTitle = (key: string) =>
  ({
    starters: "Starters",
    mains: "Main Courses",
    beverages: "Drinks & Beverages",
  }[key as keyof typeof menu] || key);

const tagIcon: Record<string, React.ReactNode> = {
  Spicy: <FaFire color="#ac8d5b" />,
  Vegan: <FaLeaf color="#ac8d5b" />,
  "Gluten-Free": <FaBreadSlice color="#ac8d5b" />,
};

const Menu: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag]
    );
  };

  const filteredItems = (items: any[]) =>
    items.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchTags =
        activeFilters.length === 0 ||
        activeFilters.every((tag) => item.tags?.includes(tag));
      return matchSearch && matchTags;
    });

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <nav className={styles.navbar}>
        {Object.keys(menu).map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            offset={-60}
            duration={500}
            className={styles.navLink}
          >
            {formatTitle(section)}
          </Link>
        ))}
        <div className={styles.themeToggle}>
          <FaSun />
          <Switch
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            checked={theme === "light"}
            offColor="#333"
            onColor="#ac8d5b"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
          />
          <FaMoon />
        </div>
      </nav>

      <div className={styles.searchFilter}>
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <div className={styles.filters}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${
                activeFilters.includes(tag) ? styles.active : ""
              }`}
              onClick={() => toggleFilter(tag)}
            >
              {tagIcon[tag]} {tag}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(menu).map(([section, items]) => {
        const sectionId = section;
        const visibleItems = filteredItems(items);
        return (
          <motion.section
            key={section}
            id={sectionId}
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>{formatTitle(section)}</h2>
            <div className={styles.cards}>
              {visibleItems.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                  <div className={styles.tags}>
                    {item.tags?.map((tag: string) => (
                      <span key={tag} className={styles.tag}>
                        {tagIcon[tag]} {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {visibleItems.length === 0 && (
                <p className={styles.empty}>No items found.</p>
              )}
            </div>
          </motion.section>
        );
      })}

      {showTopBtn && (
        <button
          className={styles.scrollTop}
          onClick={() => scroll.scrollToTop()}
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default Menu;
