import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import styles from "../css/Footer.module.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail(""); // Clear input field after submission
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Large Clickable "K" */}
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className={styles.logo}>
            K
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <nav className={styles.footerNav}>
          <div className={styles.navRow}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/menu">Menus</Link>
          </div>
          <div className={styles.navRow}>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Sub Navigation Links */}
        <div className={styles.footerSubnav}>
          <Link to="/termsandconditions">Terms & Conditions</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>

        {/* Newsletter Section (Now below Sub Links) */}
        <div className={styles.newsletter}>
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
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Copyright */}
        <p className={styles.footerCopyright}>
          Kaboul Gourmet © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Scroll to Top Button (Moved to Right) */}
        {showScroll && (
          <button
            className={styles.scrollToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
