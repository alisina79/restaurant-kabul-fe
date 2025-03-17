import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGift, 
  FaUtensils, 
  FaBell, 
  FaFacebookF, 
  FaInstagram, 
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { MdRestaurantMenu } from "react-icons/md";
import styles from "../css/Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Clear success message after certain time
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    setLoading(true);
    try {
      // Here you would typically make an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      setMessage(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setShowSuccessMessage(true);
      
      // Reset form
      setEmail("");
      setName("");
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className={styles.newsletterSection}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.newsletterContent}>
        {/* Header Section */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>Stay Updated</h1>
          <p className={styles.subtitle}>
            Subscribe to our newsletter for the latest updates, exclusive offers,
            and upcoming events at Kaboul Gourmet.
          </p>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          className={styles.offerMessage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FaGift className={styles.offerIcon} />
          <span> Subscribe now and get </span>
          <b>10% OFF</b>
          <span> your next meal at Kaboul Gourmet!</span>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className={styles.benefits}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.benefitItem} variants={itemVariants}>
            <div className={styles.benefitIcon}><FaUtensils /></div>
            <h3 className={styles.benefitTitle}>Exclusive Offers</h3>
            <p className={styles.benefitText}>Get special discounts and promotions available only to our subscribers.</p>
          </motion.div>
          
          <motion.div className={styles.benefitItem} variants={itemVariants}>
            <div className={styles.benefitIcon}><FaBell /></div>
            <h3 className={styles.benefitTitle}>Event Notifications</h3>
            <p className={styles.benefitText}>Be the first to know about our special events and themed nights.</p>
          </motion.div>
          
          <motion.div className={styles.benefitItem} variants={itemVariants}>
            <div className={styles.benefitIcon}><MdRestaurantMenu /></div>
            <h3 className={styles.benefitTitle}>New Menu Alerts</h3>
            <p className={styles.benefitText}>Get updates when we introduce new seasonal dishes and chef specials.</p>
          </motion.div>
        </motion.div>

        {/* Newsletter Form */}
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            className={styles.subscribeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe Now"}
          </motion.button>
        </motion.form>

        {/* Success/Error Message */}
        <AnimatePresence>
          {message && (
            <motion.div
              className={`${styles.successMessage} ${message.includes("Thank you") ? styles.successMessage : styles.errorMessage}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {message.includes("Thank you") ? (
                <FaCheckCircle className={styles.messageIcon} />
              ) : (
                <FaExclamationTriangle className={styles.messageIcon} />
              )}
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Media Links */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={styles.socialIcon} /> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.socialIcon} /> Instagram
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <SiX className={`${styles.socialIcon} ${styles.xIcon}`} /> X
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
