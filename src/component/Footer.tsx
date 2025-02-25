import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaArrowUp } from "react-icons/fa";
import styles from "../css/Footer.module.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section - Explore Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Explore</h4>
          <nav className={styles.footerNav}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/menu">Menus</a>
            <a href="/ourstory">Our Story</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className={styles.footerSubnav}>
            <a href="/termsandconditions">Terms & Conditions</a>
            <a href="/privacypolicy">Privacy Policy</a>
          </div>
        </div>

        {/* Middle Section - Social Media Icons */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Follow Us</h4>
          <div className={styles.footerIcons}>
            <a href="#" className={styles.icon} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className={styles.icon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={styles.icon} aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Right Section - Newsletter Signup */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Stay Updated!</h4>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email..."
              className={styles.input}
              aria-label="Email Address"
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
          <p className={styles.loyaltyText}>
            Be the first to know about our special offers!
          </p>
        </div>
      </div>
      <p className={styles.footerCopyright}>
        Kaboul Gourmet © {new Date().getFullYear()}. All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className={styles.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
