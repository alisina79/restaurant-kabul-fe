import { useState, useEffect, SetStateAction } from "react";
import styles from "../css/Carousel.module.css";
import first from "/src/photo/first.jpg";
import second from "/src/photo/second.jpg";
import third from "/src/photo/third.jpg";
import four from "/src/photo/four.jpg";
import five from "/src/photo/five.jpg";
import six from "/src/photo/six.jpg";

const images = [
  {
    src: first,
    caption: "Experience a luxurious dining experience at Kaboul Gourmet.",
  },
  { src: second, caption: "Indulge in our chef’s special creations." },
  { src: third, caption: "Savor authentic flavors from our renowned chefs." },
  { src: four, caption: "Relax in a cozy and romantic atmosphere." },
  { src: five, caption: "Enjoy the perfect blend of tradition and modernity." },
  { src: six, caption: "Create memorable moments with every meal." },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const handleDotClick = (index: SetStateAction<number>) =>
    setCurrentSlide(index);

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselSlide}
          style={{ backgroundImage: `url(${images[currentSlide].src})` }}
        >
          <div className={styles.gradientOverlay}>
            <h2 className={styles.carouselCaption}>
              {images[currentSlide].caption}
            </h2>
            <button className={styles.carouselButton}>View Our Menu</button>
          </div>
          <div className={styles.controls}>
            <button className={styles.arrow} onClick={handlePrev}>
              ❮
            </button>
            <button className={styles.arrow} onClick={handleNext}>
              ❯
            </button>
            <button
              className={styles.playPause}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "⏸" : "▶️"}
            </button>
          </div>
        </div>
        <div className={styles.indicatorDots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
