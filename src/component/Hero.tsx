import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion"; // Import motion for animations
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from "../css/hero.module.css";
import exter from "../chef/exter.jpg";
import ext from "../chef/ext.jpg";
import eight from "../chef/eight.jpg";
import Gourmet4 from "../assets/Gourmet4.png";
import Gourmet5 from "../assets/Gourmet5.png";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={styles.hero}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Swiper Carousel with Fade Effect */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className={styles.heroCarousel}
      >
        {[ext, exter, eight, Gourmet4, Gourmet5].map((image, index) => (
          <SwiperSlide key={index} className={styles.heroSlide}>
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Animated Hero Content */}
      <motion.div className={styles.heroContent} variants={containerVariants}>
        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Welcome at Kaboul Gourmet
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          Indulge in an exclusive gourmet experience with our premium selection.
        </motion.p>
        <motion.button
          className={styles.ctaButton}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          DISCOVER MORE
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
