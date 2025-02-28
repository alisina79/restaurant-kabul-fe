import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from "../css/hero.module.css";
import exter from "../chef/exter.jpg";
import ext from "../chef/ext.jpg";
import eight from "../chef/eight.jpg";
import Gourmet4 from "../assets/Gourmet4.png";
import Gourmet5 from "../assets/Gourmet5.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className={styles.heroCarousel}
      >
        {[ext, exter, eight, Gourmet4, Gourmet5].map((image, index) => (
          <SwiperSlide key={index} className={styles.heroSlide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.heroImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome at Kaboul Gourmet</h1>
        <p className={styles.heroSubtitle}>
          Indulge in an exclusive gourmet experience with our premium selection.
        </p>
        <button className={styles.ctaButton}>DISCOVER MORE</button>
      </div>
    </section>
  );
}

export default Hero;
