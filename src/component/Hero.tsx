import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../css/hero.module.css";
import Gourmet1 from "../assets/Gourmet1.png";
import Gourmet2 from "../assets/Gourmet2.png";
import Gourmet3 from "../assets/Gourmet3.png";
import Gourmet4 from "../assets/Gourmet4.png";
import Gourmet5 from "../assets/Gourmet5.png";
import { useState } from "react";

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <section className={`${styles.hero} ${darkMode ? styles.dark : ""}`}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className={styles.heroCarousel}
      >
        <SwiperSlide className={styles.heroSlide}>
          <img src={Gourmet1} alt="Berry" />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSlide}>
          <img src={Gourmet2} alt="Food" />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSlide}>
          <img src={Gourmet3} alt="Lime" />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSlide}>
          <img src={Gourmet4} alt="Lime" />
        </SwiperSlide>
        <SwiperSlide className={styles.heroSlide}>
          <img src={Gourmet5} alt="Lime" />
        </SwiperSlide>
      </Swiper>

      <div className={styles.content}>
        <h1 className={styles.heroTitle}>Welcome to Kaboul Gourmet</h1>
        <p className={styles.heroSubtitle}>
          Experience luxury dining with a touch of elegance.
        </p>
        <Link to="/menu">
          <button className={styles.ctaButton}>Explore Our Menu</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
