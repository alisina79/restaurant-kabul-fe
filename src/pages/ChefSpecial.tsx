import { useState, useEffect } from "react";
import styles from "../css/ChefSpecial.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import lamb from "../chef/lamb.jpg";
import burger from "../chef/burger.jpg";
import special from "../chef/special.jpg";

console.log(lamb, burger, special);

const specials = [
  {
    id: 1,
    title: "Lamb Shank with Saffron Rice",
    description:
      "Slow-cooked lamb shank infused with saffron and aromatic spices.",
    image: lamb,
  },
  {
    id: 2,
    title: "Grilled Salmon with Lemon Butter",
    description:
      "Freshly grilled salmon topped with a lemon butter sauce and herbs.",
    image: burger,
  },
  {
    id: 3,
    title: "Persian Chicken Stew (Fesenjan)",
    description: "A rich walnut and pomegranate stew with tender chicken.",
    image: special,
  },
];

const ChefSpecial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
    }, 5000); // Changes every 5 seconds

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

  return (
    <section className={styles.chefSpecial}>
      <div className={styles.overlay}></div>
      <img
        src={specials[currentIndex].image}
        alt={specials[currentIndex].title}
        className={styles.bgImage}
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
    </section>
  );
};

export default ChefSpecial;
