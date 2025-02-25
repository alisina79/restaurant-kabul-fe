import styles from "../css/PrivacyPolicy.module.css";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Privacy Policy</h2>
        <ul>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#info">Information We Collect</a>
          </li>
          <li>
            <a href="#use">How We Use Your Information</a>
          </li>
          <li>
            <a href="#security">Security</a>
          </li>
          <li>
            <a href="#cookies">Cookies</a>
          </li>
          <li>
            <a href="#rights">Your Rights</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </aside>

      <motion.main
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to Kaboul Gourmet. We respect your privacy and are committed
            to protecting it.
          </p>
        </section>

        <section id="info">
          <h2>Information We Collect</h2>
          <p>
            We collect personal and non-personal information when you use our
            website, such as name, contact details, and browsing activity.
          </p>
        </section>

        <section id="use">
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to improve our services, process
            reservations, and personalize your experience.
          </p>
        </section>

        <section id="security">
          <h2>Security</h2>
          <p>
            We implement security measures to protect your data from
            unauthorized access.
          </p>
        </section>

        <section id="cookies">
          <h2>Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience. You can control
            cookie settings through your browser.
          </p>
        </section>

        <section id="rights">
          <h2>Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your data. Contact
            us to exercise these rights.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, reach out to us at
            support@kaboulgourmet.com.
          </p>
        </section>
      </motion.main>
    </div>
  );
};

export default PrivacyPolicy;
