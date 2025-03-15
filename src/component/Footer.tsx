import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaArrowUp,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import styles from "../css/footer.module.css";
import { KFooterLogoSVG } from "./SVGS";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [year] = useState(new Date().getFullYear());
  const newsletterRef = useRef<HTMLDivElement>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInUp);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (newsletterRef.current) {
        observer.unobserve(newsletterRef.current);
      }
    };
  }, []);

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut" 
      }
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        {/* Large Clickable "K" */}
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/" className={styles.logo} aria-label="Return to homepage">
            <KFooterLogoSVG color="#ac8d5b"  width="300" height="300"/>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav 
          className={styles.footerNav}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Footer Navigation"
        >
          <motion.div 
            className={styles.navRow}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInVariants}>
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Link to="/about">About Us</Link>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Link to="/menu">Menus</Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.navRow}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInVariants}>
              <Link to="/ourjourny">Our journy</Link>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Link to="/gallery">Gallery</Link>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Link to="/contact">Contact</Link>
            </motion.div>
          </motion.div>
        </motion.nav>

        {/* Social Media Icons */}
        <motion.div 
          className={styles.socialIcons}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our Instagram"
            variants={socialVariants}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our TikTok"
            variants={socialVariants}
          >
            <FaTiktok />
          </motion.a>
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our Facebook"
            variants={socialVariants}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our LinkedIn"
            variants={socialVariants}
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>

        {/* Sub Navigation Links */}
        <motion.div 
          className={styles.footerSubnav}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/termsandconditions">Terms & Conditions</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className={styles.newsletter}
          ref={newsletterRef}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Stay Updated!</h3>
          <p>Subscribe to receive the latest offers and news.</p>
          <form
            onSubmit={handleNewsletterSubmit}
            className={styles.newsletterForm}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email for newsletter"
              disabled={isSubmitting || isSubmitted}
            />
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.successButton}
                >
                  <FaCheck /> Subscribed
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? <FaSpinner className={styles.spinner} /> : "Subscribe"}
                </motion.button>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Copyright */}
        <motion.p 
          className={styles.footerCopyright}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Kaboul Gourmet © {year}. All rights reserved.
        </motion.p>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              className={styles.scrollToTop}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
