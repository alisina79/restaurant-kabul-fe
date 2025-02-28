import { useState, useEffect } from "react";
import styles from "../css/ChefSpecial.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import lamb from "../chef/lamb.jpg";
import burger from "../chef/burger.jpg";
import special from "../chef/special.jpg";

const specials = [
  {
    id: 1,
    title: "Lamb Shank with Saffron Rice",
    description:
      "Slow-cooked lamb shank infused with saffron and aromatic spices.",
    image: lamb,
    overlayColor: "rgba(255, 165, 0, 0.6)",
  },
  {
    id: 2,
    title: "Grilled Salmon with Lemon Butter",
    description:
      "Freshly grilled salmon topped with a lemon butter sauce and herbs.",
    image: burger,
    overlayColor: "rgba(0, 100, 255, 0.6)",
  },
  {
    id: 3,
    title: "Persian Chicken Stew (Fesenjan)",
    description: "A rich walnut and pomegranate stew with tender chicken.",
    image: special,
    overlayColor: "rgba(150, 50, 50, 0.6)",
  },
];

const ChefSpecial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const savedIndex = localStorage.getItem("chefSpecialIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("chefSpecialIndex", currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section {...handlers} className={styles.chefSpecial}>
      <div
        className={styles.overlay}
        style={{ background: specials[currentIndex].overlayColor }}
      ></div>
      <img
        src={specials[currentIndex].image}
        alt={specials[currentIndex].title}
        className={styles.bgImage}
        loading="lazy"
      />
      <div className={styles.content}>
        <h2>{specials[currentIndex].title}</h2>
        <p>{specials[currentIndex].description}</p>
        <button className={styles.ctaButton}>Order Now</button>
      </div>
      <button className={styles.prevButton} onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        <FaChevronRight />
      </button>
      <div className={styles.dotsContainer}>
        {specials.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ChefSpecial;
