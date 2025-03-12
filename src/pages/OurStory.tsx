import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "../component/ui";
import styles from "../css/OurStory.module.css";
import chef from "../chef/chef.jpg";

const textCarouselItems = [
  "While each of their establishments has its own unique feel, the theme which pervades them all is that of family. – Gentleman's Journal",
  "At Kaboul Gourmet, we embrace the harmony of tradition and innovation to create an unforgettable dining experience.",
  "Our commitment to fresh, sustainable ingredients is what makes every dish special and unique.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OurStory = () => {
  const [, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(
        (prevIndex) => (prevIndex + 1) % textCarouselItems.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.ourStoryContainer}>
      {/* Image Section */}
      <motion.div
        className={styles.imageSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={chef}
          alt="Kaboul Gourmet Chef"
          className={styles.chefImage}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Text Section with Staggered Animation */}
      <motion.div
        className={styles.contentSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          OUR STORY
        </motion.h2>

        <motion.p className={styles.intro} variants={itemVariants}>
          With a passion for cooking and the desire to create some of the best
          restaurants and dining experiences, we founded Kaboul Gourmet.
        </motion.p>

        <motion.div className={styles.body} variants={itemVariants}>
          <p>
            Kaboul Gourmet is a collection of uniquely crafted dining spaces,
            all tied together by a love for seasonal and sustainable
            ingredients, impeccable service, and luxurious atmospheres.
          </p>
          <p>
            From cozy neighborhood eateries to our signature flagship
            experience, our chefs work passionately to deliver vibrant dishes
            made with handpicked produce. We collaborate closely with local
            markets and artisans to bring authenticity and freshness to your
            plate.
          </p>
          <p>
            Our menus evolve with the seasons, and our culinary team enjoys the
            freedom to innovate while honoring the roots of traditional Afghan
            cuisine. Kaboul Gourmet is about more than food — it’s about feeling
            at home, wherever you dine with us.
          </p>
        </motion.div>

        <motion.div className={styles.buttons} variants={itemVariants}>
          <a href="/about" className={styles.outlineButton}>
            DISCOVER MORE
          </a>
          <a href="/newsletter" className={styles.outlineButton}>
            NEWSLETTER SIGNUP
          </a>
        </motion.div>

        <motion.div className={styles.quoteCarousel} variants={itemVariants}>
          <Carousel items={textCarouselItems} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurStory;
