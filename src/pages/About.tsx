import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../css/about.module.css";
import ext from "../chef/ext.jpg";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const navigate = useNavigate();

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] // Improved easing for more natural movement
      } 
    },
  };

  // Pattern text for the K borders
  const patternText = "KKKKKKKKKKKKKKKKKKKK";

  return (
    <motion.section
      className={styles.aboutSection}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        {/* LEFT SIDE: IMAGE */}
        <motion.div
          className={styles.imageContainer}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { 
              opacity: 1,
              x: 0,
              transition: { 
                duration: 0.8,
                ease: "easeOut"
              } 
            }
          }}
        >
          {/* Decorative Corner Elements */}
          <motion.div 
            className={`${styles.imageCorner} ${styles.topLeft}`}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              visible: { opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.4 } }
            }}
          />
          <motion.div 
            className={`${styles.imageCorner} ${styles.topRight}`}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              visible: { opacity: 1, scale: 1, transition: { delay: 1.0, duration: 0.4 } }
            }}
          />
          <motion.div 
            className={`${styles.imageCorner} ${styles.bottomLeft}`}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              visible: { opacity: 1, scale: 1, transition: { delay: 1.1, duration: 0.4 } }
            }}
          />
          <motion.div 
            className={`${styles.imageCorner} ${styles.bottomRight}`}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              visible: { opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.4 } }
            }}
          />
          
          <motion.img
            src={ext}
            alt="Kaboul Gourmet signature dish"
            className={styles.aboutImage}
            loading="eager"
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
          />
        </motion.div>

        {/* RIGHT SIDE: STAGGERED TEXT CONTENT */}
        <motion.div 
          className={styles.textContent}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
        >
          {/* K Pattern Border */}
          <motion.div 
            className={styles.kPatternTop}
            variants={{
              hidden: { opacity: 0, width: '0%' },
              visible: { opacity: 1, width: '100%', transition: { delay: 0.3, duration: 0.6 } }
            }}
          >
            {patternText}
          </motion.div>
          <motion.div 
            className={styles.kPatternBottom}
            variants={{
              hidden: { opacity: 0, width: '0%' },
              visible: { opacity: 1, width: '100%', transition: { delay: 0.4, duration: 0.6 } }
            }}
          >
            {patternText}
          </motion.div>
          <motion.div 
            className={styles.kPatternLeft}
            variants={{
              hidden: { opacity: 0, height: '0%' },
              visible: { opacity: 1, height: '100%', transition: { delay: 0.5, duration: 0.6 } }
            }}
          >
            {patternText}
          </motion.div>
          <motion.div 
            className={styles.kPatternRight}
            variants={{
              hidden: { opacity: 0, height: '0%' },
              visible: { opacity: 1, height: '100%', transition: { delay: 0.6, duration: 0.6 } }
            }}
          >
            {patternText}
          </motion.div>

          {/* Content Inner Container */}
          <motion.div
            className={styles.contentInner}
            variants={containerVariants}
          >
            {/* TOP DECORATIVE K (ITEM 1) */}
            <motion.div
              className={styles.decorativeK}
              variants={itemVariants}
            >
              K
            </motion.div>

            {/* HEADING (ITEM 2) */}
            <motion.h2
              className={styles.title}
              variants={itemVariants}
            >
              WHAT'S ON
            </motion.h2>

            {/* GOLD UNDERLINE (ITEM 3) */}
            <motion.div 
              className={styles.goldUnderline} 
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { 
                  width: 60, 
                  opacity: 1, 
                  transition: { 
                    duration: 0.6,
                    ease: "easeOut"
                  } 
                }
              }}
            />

            {/* SUBHEADING (ITEM 4) */}
            <motion.p 
              className={styles.subtitle} 
              variants={itemVariants}
            >
              What's on at Kaboul Restaurants
            </motion.p>

            {/* PARAGRAPH DESCRIPTION (ITEM 5) */}
            <motion.p 
              className={styles.description} 
              variants={itemVariants}
            >
              Throughout the year, we run a series of wine dinners, themed events, 
              live music days, and other celebrations. Check out what's happening 
              at our locations.
            </motion.p>

            {/* BUTTONS (ITEMS 6 & 7) */}
            <motion.div 
              className={styles.buttons} 
              variants={itemVariants}
            >
              <motion.button
                className={styles.primaryButton}
                onClick={() => navigate("/whatson")}
                aria-label="View What's On events"
                initial={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.3), 0 0 15px rgba(172, 141, 91, 0.5)",
                  backgroundPosition: "0% 0%",
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2), 0 0 5px rgba(172, 141, 91, 0.3)",
                  transition: { duration: 0.1 }
                }}
              >
                <span className={styles.buttonText}>WHAT'S ON</span>
                <motion.span 
                  className={styles.buttonHighlight}
                  initial={{ width: '0%', opacity: 0 }}
                  whileHover={{ 
                    width: '100%', 
                    opacity: 1,
                    transition: { duration: 0.3 } 
                  }}
                />
              </motion.button>
              <motion.button
                className={styles.secondaryButton}
                onClick={() => navigate("/newsletter")}
                aria-label="Sign up for newsletter"
                initial={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.2), 0 0 15px rgba(172, 141, 91, 0.3)",
                  borderColor: "#d4b978",
                  color: "#d4b978",
                  backgroundColor: "rgba(172, 141, 91, 0.08)",
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.15), 0 0 5px rgba(172, 141, 91, 0.2)",
                  transition: { duration: 0.1 }
                }}
              >
                <span className={styles.buttonText}>NEWSLETTER SIGNUP</span>
                <motion.span 
                  className={styles.buttonBorder}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 } 
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
