import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../css/Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    setMessage(
      "🎉 Thank you for subscribing! Check your email for confirmation."
    );
    setEmail(""); // Reset the input field
  };

  return (
    <motion.section
      className={styles.newsletterSection}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
      <motion.p
        className={styles.offerMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎁 Subscribe now and get <b>10% OFF</b> your next meal at Kaboul
        Gourmet!
      </motion.p>

      {/* Newsletter Form */}
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <motion.button
          type="submit"
          className={styles.subscribeButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>

      {/* Success/Error Message */}
      {message && (
        <motion.div
          className={styles.successMessage}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.div>
      )}

      {/* Social Media Links */}
      <motion.div
        className={styles.socialIcons}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔵 Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          🐦 Twitter
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Newsletter;
