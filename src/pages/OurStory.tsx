import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "../component/ui";
import styles from "../css/OurStory.module.css";
import chef from "../chef/chef.jpg";

const textCarouselItems = [
  "While each of their establishments has its own unique feel, the theme which pervades them all is that of family. - Gentleman's Journal",
  "At Kaboul Gourmet, we embrace the harmony of tradition and innovation to create an unforgettable dining experience.",
  "Our commitment to fresh, sustainable ingredients is what makes every dish special and unique.",
];

const OurStory = () => {
  const [, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(
        (prevIndex) => (prevIndex + 1) % textCarouselItems.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.ourStoryContainer}>
      {/* Left Section - Image with Zoom-in Animation */}
      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={chef} alt="Our Story" className={styles.ourStoryImage} />
      </motion.div>

      {/* Right Section - Text Content with Staggered Animations */}
      <motion.div
        className={styles.textContainer}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h2
          className={styles.ourStoryHeader}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1 }}
        >
          OUR STORY
        </motion.h2>

        <motion.p
          className={styles.ourStoryParagraph}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          With a passion for cooking and the desire to create some of the best
          restaurants and dining experiences, we founded Kaboul Gourmet. Our
          philosophy embraces seasonal, sustainable ingredients with impeccable
          service. With a passion for cooking and the desire to create some of
          the best restauran With a passion for cooking and the desire to create
          some of the best restaurants and dining experiences, we founded Kaboul
          Gourmet. Our philosophy embraces seasonal, sustainable ingredients
          with impeccable service. With a passion for cooking and the desire to
          create some of the best restaurants and dining experiences, we founded
          Kaboul Gourmet. Our philosophy embraces seasonal, sustainable
          ingredients with impeccable service.ts and dining experiences, we
          founded Kaboul Gourmet.
        </motion.p>

        <motion.div
          className={styles.buttonContainer}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="https://instagram.com/yourrestaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a href="/newsletter">Newsletter Signup</a>
        </motion.div>

        <motion.div
          className={styles.carouselContainer}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Carousel items={textCarouselItems} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurStory;
