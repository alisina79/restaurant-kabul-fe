import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/hero.module.css";

import one from "../chef/one.jpg";
import two from "../chef/two.jpg";
import three from "../chef/four.jpg";
import four from "../chef/four.jpg";
import five from "../chef/five.jpg";

const slides = [
  {
    image: one,
    title: "Exquisite Flavors, Unforgettable Moments",
    description: "Indulge in the finest gourmet experiences at Kaboul Gourmet.",
    buttonText: "Explore Menu",
    link: "/menu",
  },
  {
    image: two,
    title: "Authentic & Handcrafted Dishes",
    description: "Every dish tells a story of tradition and passion.",
    buttonText: "Reserve a Table",
    link: "/reservations",
  },
  {
    image: three,
    title: "A Romantic & Luxurious Ambiance",
    description: "Perfect for intimate dinners and memorable evenings.",
    buttonText: "View Locations",
    link: "/locations",
  },
  {
    image: four,
    title: "A Culinary Journey Like No Other",
    description: "Savor the finest fusion of flavors from around the world.",
    buttonText: "See Our Specials",
    link: "/specials",
  },
  {
    image: five,
    title: "Bringing the VIP Experience to You",
    description: "An exclusive dining experience crafted just for you.",
    buttonText: "Book Private Dining",
    link: "/private-dining",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement | null>(null);
  let touchStartX = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleSwipeStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleSwipeEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <div className={styles.hero} ref={heroRef}>
      <div
        className={styles.carousel}
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} className={styles.image} />
            <div
              className={`${styles.textContainer} ${
                isVisible ? styles.visible : ""
              }`}
            >
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.description}>{slide.description}</p>
              <button
                className={styles.heroButton}
                onClick={() => navigate(slide.link)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.prev} ${isVisible ? styles.visible : ""}`}
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className={`${styles.next} ${isVisible ? styles.visible : ""}`}
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className={`${styles.dots} ${isVisible ? styles.visible : ""}`}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
