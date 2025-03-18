import { useEffect, useRef, MouseEvent, useCallback } from "react";
import { motion, useInView, useAnimation, LazyMotion, domAnimation } from "framer-motion";
import styles from "../css/OurStory.module.css";
import chef from "../chef/chef.jpg";
// If you're using Next.js, uncomment the next line and comment out the font imports below
// import { Montserrat, Cormorant_Garamond } from "next/font/google";

// For standard React, you may need to import fonts in your main CSS or index.html
// Or you can use React Helmet or similar for head management

// Optimized variants with GPU-accelerated properties
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    } 
  },
};

const buttonVariants = {
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 10px 20px rgba(172, 141, 91, 0.2)",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.95, 
    boxShadow: "0px 5px 10px rgba(172, 141, 91, 0.15)",
  }
};

// Enhanced image animation on scroll - using translates for better performance
const imageVariants = {
  hidden: { opacity: 0, y: 40, rotateY: -5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateY: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 1, 0.5, 1],
      rotateY: { duration: 1.4 }
    } 
  }
};

const OurStory = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
  });
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      // Start with a slight delay to ensure container opacity animation completes first
      setTimeout(() => {
        controls.start("visible");
      }, 400);
    }
  }, [isInView, controls]);

  // Advanced parallax tilt effect - memoized for better performance
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate tilt values
    const tiltX = (y - 0.5) * 10; // -5 to 5 degrees
    const tiltY = (0.5 - x) * 10; // -5 to 5 degrees
    
    // Apply transforms - use a GPU-optimized transform
    requestAnimationFrame(() => {
      if (imageRef.current) {
        imageRef.current.style.transform = 
          `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.08, 1.08, 1.08)`;
      }
    });
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    if (!imageRef.current) return;
    
    // Reset transforms with smooth transition
    requestAnimationFrame(() => {
      if (imageRef.current) {
        imageRef.current.style.transform = 
          'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section 
        className={`py-8 bg-amber-50/50 ${styles.pageBackground}`} 
        id="our-story" 
        aria-label="Our Story"
        itemScope 
        itemType="http://schema.org/Article"
      >
        <motion.div
          ref={sectionRef}
          className={styles.ourStoryContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image Section */}
          <motion.div
            className={styles.imageSection}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <div 
              className={styles.imageWrapper}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => {}}
              onTouchEnd={() => {}}
            >
              <img
                ref={imageRef}
                src={chef}
                alt="Kaboul Gourmet Chef preparing a signature dish"
                className={styles.chefImage}
                loading="lazy"
                fetchPriority="high"
                itemProp="image"
                decoding="async"
              />
              <div className={styles.imageOverlay}>
                <span>Our Master Chef</span>
              </div>
            </div>
          </motion.div>

          {/* Text Section with Staggered Animation */}
          <motion.div
            className={`${styles.contentSection} ${styles.animateContent}`}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            itemProp="articleBody"
          >
            <motion.h2 
              className={styles.heading} 
              variants={itemVariants}
              itemProp="headline"
            >
              OUR STORY
            </motion.h2>

            <motion.p className={styles.intro} variants={itemVariants}>
              With a passion for cooking and the desire to create some of the best
              restaurants and dining experiences, we founded <strong>Kaboul Gourmet</strong>.
            </motion.p>

            <motion.div className={styles.body} variants={itemVariants}>
              <p>
                Kaboul Gourmet is a collection of uniquely crafted dining spaces,
                all tied together by a love for <strong>seasonal and sustainable
                ingredients</strong>, impeccable service, and luxurious atmospheres.
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
                cuisine. Kaboul Gourmet is about more than food — it's about feeling
                at home, wherever you dine with us.
              </p>
            </motion.div>

            <motion.div className={styles.buttons} variants={itemVariants}>
              <motion.a 
                href="/about" 
                className={styles.outlineButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Discover more about Kaboul Gourmet"
              >
                DISCOVER MORE
              </motion.a>
              <motion.a 
                href="/newsletter" 
                className={styles.outlineButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Sign up for our newsletter"
              >
                NEWSLETTER SIGNUP
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </LazyMotion>
  );
};

export default OurStory;
