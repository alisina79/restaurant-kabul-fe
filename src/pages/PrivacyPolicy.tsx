import { useState } from "react";
import styles from "../css/PrivacyPolicy.module.css";
import { motion } from "framer-motion";
import { FaArrowUp, FaChevronDown, FaChevronUp } from "react-icons/fa";

const sectionsData = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to Kaboul Gourmet's Privacy Policy page. We take privacy seriously and ensure your personal information is handled securely. This policy outlines what data we collect, how we use it, and your rights regarding your personal data.",
  },
  {
    id: "info",
    title: "Information We Collect",
    content:
      "We collect personal and non-personal information when you use our website, such as your name, contact details, and browsing activity.",
  },
  {
    id: "use",
    title: "How We Use Your Information",
    content:
      "We use your information to enhance your experience, improve our services, and process your reservations.",
  },
  {
    id: "security",
    title: "Security",
    content:
      "We implement security measures to protect your data from unauthorized access or breaches.",
  },
  {
    id: "cookies",
    title: "Cookies",
    content:
      "Our website uses cookies to enhance your browsing experience. You can control your cookie preferences in your browser settings.",
  },
  {
    id: "rights",
    title: "Your Rights",
    content:
      "You have the right to access, modify, or delete your personal data. If you wish to exercise these rights, please contact us.",
  },
  {
    id: "contact",
    title: "Contact Us",
    content:
      "If you have any questions about our Privacy Policy, please reach out to us at support@kaboulgourmet.com.",
  },
];

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Navigation</h2>
        <ul>
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
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.introText}>
          At Kaboul Gourmet, we respect your privacy and are committed to
          protecting it.
        </p>

        {sectionsData.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2
              className={styles.collapsibleHeader}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}{" "}
              {openSections.includes(section.id) ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </h2>
            {openSections.includes(section.id) && (
              <motion.p
                className={styles.expandedText}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                {section.content}
              </motion.p>
            )}
          </section>
        ))}

        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp className={styles.icon} />
        </button>
      </motion.main>
    </div>
  );
};

export default PrivacyPolicy;
